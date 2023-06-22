import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Bateria } from "../components/estruturacao/bateria_empresa";
import { Recompensas } from "../components/estruturacao/recompensas";

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
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Bateria />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Recompensas />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
