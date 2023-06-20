import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Poupanca } from "../components/estatisticas/poupanca";
import { BateriasDepartamento } from "../components/estatisticas/bateriasDepartamento";
import { Objetivos } from "../components/estatisticas/objetivos";
import { TempoMedio } from "../components/estatisticas/tempoMedio";
import { ValorBaterias } from "../components/estatisticas/valorBaterias";
import { useState, React } from "react";


const Page = () => {
  const tempos = ['Hoje', 'Esta semana', 'Este mês'];

  const [tempoSelecionado, setTempoSelecionado] = useState(tempos[0]);

  return (
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
          <Box sx={{ m: 1 }}>
            {tempos.map((tempo, index) => (
              <Button
                key={tempo}
                variant={tempo === tempoSelecionado ? "contained" : "outlined"}
                style={{ color: tempo === tempoSelecionado ? "primary" : undefined, marginRight: 10 }}
                onClick={() => setTempoSelecionado(tempos[index])}
              >
                {tempo}
              </Button>
            ))}
          </Box>

          <Grid container spacing={3}>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <Poupanca tempoSelecionado={tempoSelecionado} />
            </Grid>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <BateriasDepartamento tempoSelecionado={tempoSelecionado}/>
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <Objetivos tempoSelecionado={tempoSelecionado}/>
            </Grid>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <TempoMedio tempoSelecionado={tempoSelecionado}/>
            </Grid>
            <Grid item lg={6} md={12} xl={6} xs={12}>
              <ValorBaterias tempoSelecionado={tempoSelecionado}/>
            </Grid>
          </Grid>
        </Container >
      </Box >
    </>
  )

};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
