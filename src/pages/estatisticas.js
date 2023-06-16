import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Poupanca } from "../components/estatisticas/poupanca";
import { BateriasDepartamento } from "../components/estatisticas/bateriasDepartamento";
import { Objetivos } from "../components/estatisticas/objetivos";
import { TempoMedio } from "../components/estatisticas/tempoMedio";
import { ValorBaterias } from "../components/estatisticas/valorBaterias";

const Page = () => (
  <>
    <Head>
      <title>Smart Break</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
      <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <Typography sx={{ m: 1 }} variant="h4">
            Estatísticas da empresa
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Poupanca />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <BateriasDepartamento />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Objetivos />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <TempoMedio />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <ValorBaterias />
          </Grid>
        </Grid>
      </Container>  
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
