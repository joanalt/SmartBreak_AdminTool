import Head from "next/head";
import NextLink from "next/link";
//import Router from "next/router";
//import { useFormik } from "formik";
//import * as Yup from "yup";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//import axios from "axios";

//const apiURL = "https://sb-api.herokuapp.com/auth/login";

const Login = () => {
  console.log("LOGINNNNNN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleLogin = async () => {
    console.log("TENTEI ENTRAR");
    try {
      const response = await fetch("https://sb-api.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      const responseData = await response.json(); // Converter a resposta para JSON
      console.log(responseData); // Exibir os dados retornados pelo servidor

      if (response.ok) {
        const data = response.message;
        setResponseData(data);
        console.log("Login successful");
        console.log("Data:", response.message);
        // handleNavigate(responseData.user._id);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error(error);
      console.log("Error", error.message);
    }
  };

  const router = useRouter();

  const handleNavigate = (uid) => {
    router.push("/painel");
  };

  /*const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Deve ser um email válido").max(255).required("Campo obrigatório"),
      password: Yup.string().max(255).required("Campo obrigatório"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  const router = useRouter();

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
          style={{ marginBottom: "40px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginTop: "60px",
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
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
          }}
        >
          <form /*onSubmit={formik.handleSubmit}*/>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Entrar
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por continuares a melhorar o teu local de trabalho.
              </Typography>
            </Box>
            <TextField
              //error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              //helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              //onBlur={formik.handleBlur}
              onChange={(text) => setEmail(text.target.value)}
              type="email"
              //value={formik.values.email}
              variant="outlined"
            />
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Palavra-passe"
              margin="normal"
              name="password"
              //onBlur={formik.handleBlur}
              onChange={(text) => setPassword(text.target.value)}
              type="password"
              //value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={() => handleLogin()}
              >
                Entrar
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Ainda não tens conta?{" "}
              <NextLink href="/registar1">
                <Link
                  to="/registar1"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Regista-te
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
