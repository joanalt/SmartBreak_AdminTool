import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/funcionarios/funcionarios-results";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { useEffect, useState } from "react";

const Page = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [allDocs, setAllDocs] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    console.log("user organization", user.organization);
    try {
      const response = await fetch(
        "https://sb-api.herokuapp.com/users/organization/" + user.organization,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAllDocs(data.message);
        console.log("-------------------", data.message);
        router.push("/painel");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", error.message);
    }
  };

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
          {allDocs && allDocs.length == 0 ? <></> : <CustomerListResults customers={allDocs} />}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
