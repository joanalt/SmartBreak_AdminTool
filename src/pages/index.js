import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState("");
  const [error, setError] = useState(false);

  const user = localStorage.getItem("userData");
  console.log(user);

  useEffect(() => {
    // setError(false);
  }, [error]);

  function useLocalStorage(key, value) {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem(key);

      if (!userData) {
        localStorage.setItem(key, JSON.stringify(value));
        console.log("Data saved to localStorage:", value);
      }
    }
  }

  const handleLogin = async () => {
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

      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
        useLocalStorage("userData", data.user);
        router.push("/painel");
      } else {
        const errorData = await response.json();
        setError(true);
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      console.log("Error", error.message);
      setError(true); // Define o erro geral (para campos incorretos, etc.)
    }
  };

  const router = useRouter();

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
          style={{ marginTop: "40px", marginBottom: "20px" }}
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
          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Entrar
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por continuares a melhorar o teu local de trabalho. Se ainda não
                tens uma conta pessoal, podes fazê-lo através da aplicação mobile.
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              onChange={(text) => setEmail(text.target.value)}
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Palavra-passe"
              margin="normal"
              name="password"
              onChange={(text) => setPassword(text.target.value)}
              type="password"
              variant="outlined"
            />
            {error ? (
              <Typography color="red" gutterBottom variant="body2">
                Credenciais inválidas.
              </Typography>
            ) : (
              <></>
            )}
            <Typography color="textSecondary" gutterBottom variant="body2">
              Se te esqueceste da palavra-passe, recupera-a através da aplicação mobile.
            </Typography>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                variant="contained"
                onClick={async () => {
                  handleLogin();
                }}
              >
                Entrar
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Ainda não tens a tua empresa registada?{" "}
              <NextLink href="/registar">
                <Link
                  to="/registar"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Regista-a
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
