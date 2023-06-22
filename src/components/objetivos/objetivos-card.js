import PropTypes from "prop-types";
import { Box, Card, CardContent, Divider, Grid, Typography, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import * as React from "react";

const Info = ({ value }) => {
  const [objPriority, setObjPriority] = useState(value.priority);
  const [objDescription, setObjDescription] = useState(value.description);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      ></Box>
      <Typography align="left" color="textPrimary" gutterBottom variant="h5">
        Prioridade: {objPriority}
      </Typography>
      <Typography align="left" color="textPrimary" variant="body2">
        {objDescription}
      </Typography>
    </>
  );
};

export const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userData"));

  const deleteGoal = async (id) => {
    try {
      const response = await fetch("https://sb-api.herokuapp.com/goals/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("-------------------", data);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", error.message);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Eliminar objetivo"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tem a certeza que deseja eliminar este objetivo permanentemente?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button style={{ color: "#747474" }} onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              style={{ color: "#AA0000" }}
              onClick={async () => {
                console.log(product._id);
                deleteGoal(product._id);
                //window.location.reload(false); TODO :)
              }}
            >
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent>
            <Info value={product} key={product._id} />
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              ></Grid>
              <Grid
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
                item
                lg={6}
                sm={6}
                xl={12}
                xs={12}
              >
                <Button
                  variant="outlined"
                  style={{
                    marginLeft: "70px",
                    marginTop: "10px",
                    borderColor: "#AA0000",
                    color: "#AA0000",
                  }}
                  onClick={handleClickOpen}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
