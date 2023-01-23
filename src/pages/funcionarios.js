import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/funcionarios/funcionarios-results";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

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
        <CustomerListResults customers={customers} />
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
