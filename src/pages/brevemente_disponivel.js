import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//depois apaga-se o comentário, era só para resolver um problema :/

const Page = () => (
  <>
    <Head>
      <title>Smart Break</title>
    </Head>
    <Box
      style={{ backgroundColor: "#F57738" }}
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="white" variant="h1">
            Brevemente disponível
          </Typography>
          <Typography align="center" color="white" variant="subtitle2">
            Estamos a recarregar as nossas baterias para que possas ter esta funcionalidade
            brevemente.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt="Under development"
              src="/static/images/brevemente.svg"
              style={{
                marginTop: 80,
                display: "inline-block",
                maxWidth: "100%",
                width: 200,
              }}
            />
          </Box>
          <NextLink href="/painel" passHref>
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
              sx={{ mt: 10 }}
              style={{ color: "#FFFFFF" }}
            >
              Voltar ao Painel
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
