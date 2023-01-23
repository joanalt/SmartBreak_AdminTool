import PropTypes from "prop-types";
import { Box, Card, CardContent, Divider, Grid, Typography, Button  } from "@mui/material";
import { People, ArrowCircleUp, ArrowCircleDown } from "iconsax-react";
import { doc, getDoc, collection, deleteDoc } from "@firebase/firestore"
import { firestore } from "../../firebase_setup/firebase"
import { useEffect, useState } from "react";

import * as React from 'react';


export const ProductCard = ({ product }) => {


  return (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      ></Box>
      
        <Typography align="left" color="textPrimary" gutterBottom variant="h5">
          {product.name}
        </Typography>
        <Typography align="left" color="textPrimary" variant="body2">
          {product.description}
        </Typography>
     
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}  sx={{
            alignItems: "center",
            display: "flex",
          }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
          lg={6} sm={6} xl={12} xs={12}
        >
          <People color="#555" onClick={() => setShowMembers(true)}/>
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {product.members} Membros
          </Typography>
        </Grid>
        <Grid  sx={{
            alignItems: "center",
            display: "flex",
          }} item lg={6} sm={6} xl={12} xs={12}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onClick={ () => {
            alert(teamId)
            deleteDoc(doc(firestore, "teams", teamId));
            forceUpdate()
            }
          }
        >
          Eliminar equipa
        </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
)};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
