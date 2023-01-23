import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "Password123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

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
          backgroundColor: "#0051BA",
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
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <img src="static/images/auth_logo.svg" alt="logo" width="120" height="120" />
          <p
          style={{
            color: "#E3ECF7",
            fontSize: "20px",
            fontWeight: "bold",

          }}
          >
            Smart Break</p>
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
          
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Entrar
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por continuares a melhorar o teu local de trabalho.
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
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
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Entrar
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Ainda não tens conta?{" "}
              <NextLink href="/registar">
                <Link
                  to="/registar"
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
