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

import { ProductListToolbar } from "../components/equipas/equipas-toolbar";
import { ProductCard } from "../components/equipas/equipas-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useEffect, useState } from "react";

const Page = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

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
    console.log("ENTREI");
    try {
      const response = await fetch(
        "https://sb-api.herokuapp.com/departments/organization/" + user.organization,
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
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", error.message);
    }
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
