import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/ganhos";
import { LatestOrders } from "../components/dashboard/consumos_gerais";
import { LatestProducts } from "../components/dashboard/atividade_recente";
import { Bateria } from "../components/dashboard/bateria_empresa";
import { Metricas } from "../components/dashboard/metricas";
import { TasksProgress } from "../components/dashboard/objetivos_painel";
import { TotalCustomers } from "../components/dashboard/pausas";
import { DashboardLayout } from "../components/dashboard-layout";

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
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={4} lg={4} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={4} lg={4} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Bateria />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Metricas />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item lg={4} md={12} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
