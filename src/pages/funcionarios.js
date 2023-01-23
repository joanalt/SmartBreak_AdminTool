import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/funcionarios/funcionarios-results";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import { useEffect, useState } from "react";


const Page = () => {

  const [allDocs, setAllDocs] = useState([]);


  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => { 
    let temp = [];
  
    const ref = await getDocs(collection(firestore, 'users_data'));
    ref.forEach((doc) => {
      
      // console.log(doc.id, " => ", doc.data())
      temp.push({
        name : doc.data().name + " " + doc.data().lastName,
        id : doc.data().uid,
        email : doc.data().email,
        team : doc.data().teams[0],
      })
    })
  
    console.log("DEBUG: ", temp);
    setAllDocs(temp);
  }


  return(
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
      {allDocs && allDocs.length == 0 ?
          <></>
          :
          <CustomerListResults customers={allDocs} />
      }
        
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
