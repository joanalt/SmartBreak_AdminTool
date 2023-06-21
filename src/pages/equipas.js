import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@mui/material";
import { Search as SearchIcon } from "../icons/search";

import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../components/equipas/equipas-toolbar";
import { ProductCard } from "../components/equipas/equipas-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { useEffect, useState } from "react";

const Page = () => {
  const [allDocs, setAllDocs] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    let temp = [];

    const ref = await getDocs(collection(firestore, "teams"));
    ref.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data())
      temp.push({
        name: doc.data().name,
        id: doc.data().id,
        description: doc.data().description,
        members: doc.data().users.length,
        users: [...doc.data().users],
      });
    });

    console.log("DEBUG: ", temp);
    setAllDocs(temp);
  };

  const filteredCustomers = allDocs.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

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
          <ProductListToolbar />
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ maxWidth: 500 }}>
                  <TextField
                    fullWidth
                    value={search}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon fontSize="small" color="action">
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Procurar departamento"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ pt: 3 }}>
            {allDocs && allDocs.length == 0 ? (
              <></>
            ) : (
              <Grid container spacing={3}>
                {search === "" ? (
                  <>
                    {allDocs.map((product) => (
                      <Grid item key={product.id} lg={4} md={6} xs={12}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    {filteredCustomers.map((product) => (
                      <Grid item key={product.id} lg={4} md={6} xs={12}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </>
                )}
              </Grid>
            )}
          </Box>
          {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box> */}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
