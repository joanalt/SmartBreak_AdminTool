import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { setDoc, doc, getDoc, collection, updateDoc, addDoc } from "@firebase/firestore";
import { firestore, auth } from "../firebase_setup/firebase";
import { useRouter } from "next/router";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      nameOrg: "",
      areaOrg: "",
      numberOrg: "",
      address: "",
      policy: false,
    },
    validationSchema: Yup.object({
      nameOrg: Yup.string().max(255).required("Campo obrigatório"),
      numberOrg: Yup.string().max(255).required("Campo obrigatório"),
      address: Yup.string().max(255).required("Campo obrigatório"),
      policy: Yup.boolean().oneOf([true], "Campo obrigatório"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  const router = useRouter();

  function handleNavigation() {
    router.push("/painel");
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
          <NextLink href="/registar1" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Voltar
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Regista a tua empresa
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por teres tomado esta iniciativa. Vem fazer energy breaks.
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nome"
              margin="normal"
              name="nameOrg"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nameOrg}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Área de atuação (opcional)"
              margin="normal"
              name="areaOrg"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.areaOrg}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Contacto telefónico"
              margin="normal"
              name="numberOrg"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.numberOrg}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Morada"
              margin="normal"
              name="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                Eu li os{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Termos e Condições
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={async () => {
                  // call validation
                  try {
                    const docRef = await addDoc(collection(firestore, "organizations"), {
                      name: formik.values.nameOrg,
                      area: formik.values.areaOrg,
                      phone: formik.values.numberOrg,
                      address: formik.values.address,
                    });
                    const uid = docRef.id;
                    await updateDoc(docRef, {
                      id: docRef.id,
                    });
                    handleNavigation();
                  } catch (err) {
                    console.error(err);
                    alert(err.message);
                  }

                  // console.log(formik.values.password)
                }}
              >
                Registar
              </Button>
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
