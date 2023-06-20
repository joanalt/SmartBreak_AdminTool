import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, FormHelperText, Link, TextField, Typography } from "@mui/material";
import { setDoc, doc, getDoc, collection, updateDoc, addDoc } from "@firebase/firestore";
import { firestore, auth } from "../firebase_setup/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Deve ser um email válido").max(255).required("Campo obrigatório"),
      firstName: Yup.string().max(255).required("Campo obrigatório"),
      lastName: Yup.string().max(255).required("Campo obrigatório"),
      password: Yup.string().max(255).required("Campo obrigatório"),
      policy: Yup.boolean().oneOf([true], "Campo obrigatório"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  const router = useRouter();

  function handleNavigation() {
    router.push("/registar2");
  }

  return (
    <>
      <Head>
        <title>Smart Break</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          backgroundColor: "#07407B",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <img src="static/images/auth_logo.svg" alt="logo" width="120" height="120" />
          <p
            style={{
              paddingTop: "15px",
              color: "#E3ECF7",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Smart Break
          </p>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginBottom: "60px",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Regista-te
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por teres tomado esta iniciativa. Vem fazer energy breaks.
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nome próprio"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Apelido"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Palavra-passe"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Confirmar palavra-passe"
              margin="normal"
              name="passwordConfirm"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.passwordConfirm}
              variant="outlined"
            />
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <NextLink href="/registar2" passHref>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={async () => {
                    try {
                      const res = await createUserWithEmailAndPassword(
                        auth,
                        formik.values.email,
                        formik.values.password
                      );
                      const user = res.user;
                      const docRef = await addDoc(collection(firestore, "users_data"), {
                        name: formik.values.firstName,
                        lastName: formik.values.lastName,
                        email: formik.values.email,
                        password: formik.values.password,
                        rewards: false,
                        notifications: [true, false, false, false],
                        shareData: true,
                        pause: false,
                        battery: 0,
                        teams: [],
                        admin: true,
                      });
                      const uid = docRef.id;
                      await updateDoc(docRef, {
                        id: docRef.id,
                      });
                      await setDoc(doc(firestore, "users_routines", uid), {
                        routines: [],
                      });
                      await setDoc(doc(firestore, "users_devices", uid), {
                        devices: [],
                      });
                      handleNavigation();
                    } catch (err) {
                      console.error(err);
                      alert(err.message);
                    }

                    // console.log(formik.values.password)
                  }}
                >
                  Seguinte
                </Button>
              </NextLink>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Já tens conta?{" "}
              <NextLink href="/" passHref>
                <Link variant="subtitle2" underline="hover">
                  Clica aqui para entrar
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
