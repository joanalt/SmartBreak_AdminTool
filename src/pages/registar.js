import Head from "next/head";
import NextLink from "next/link";
//import Router from "next/router";
//import { useFormik } from "formik";
//import * as Yup from "yup";
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
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async () => {
    try {
      const requestBody = {
        name: name,
        phone_number: phoneNumber,
        address: address,
      };

      const response = await fetch("https://sb-api.herokuapp.com/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // registo com sucesso
        // Alert.alert("Registration successful");
        // --->  redireccionar para outra pagina
      } else {
        const errorData = await response.json();
        //Alert.alert("Falha no registo!", errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Erro!", "Ocorreu um erro durante o registo.");
    }
  };

  const submit = () => {
    if (name.length === 0) {
      //Alert.alert("Preencha corretamente o campo Nome");
      return false;
    }
    if (phoneNumber.length === 0) {
      //Alert.alert("Preencha corretamente o campo Número");
      return false;
    }
    if (address.length === 0) {
      //Alert.alert("Preencha corretamente o campo Morada");
      return false;
    }
    handleRegister();
    router.push("/");
  };

  const router = useRouter();

  /*const formik = useFormik({
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

  function handleNavigation() {
    router.push("/painel");
  }*/

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
          <form /*onSubmit={formik.handleSubmit}*/>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Regista a tua empresa
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por teres tomado esta iniciativa. Vem fazer energy breaks.
              </Typography>
            </Box>
            <TextField
              //error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              //helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nome"
              margin="normal"
              name="nameOrg"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.nameOrg}
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              //error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              //helperText={formik.touched.lastName && formik.errors.lastName}
              label="Contacto telefónico"
              margin="normal"
              name="numberOrg"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.numberOrg}
              variant="outlined"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />

            <TextField
              //error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              //helperText={formik.touched.lastName && formik.errors.lastName}
              label="Morada"
              margin="normal"
              name="address"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.address}
              variant="outlined"
              onChange={(event) => setAddress(event.target.value)}
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                //checked={formik.values.policy}
                name="policy"
                //onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                Eu li os{" "}
                <NextLink href="/termos_condicoes" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Termos e Condições
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {/*Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )*/}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                variant="contained"
                onClick={() => submit()}
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
