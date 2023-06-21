import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { People } from "iconsax-react";
import { doc, getDoc, collection, deleteDoc } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import * as React from "react";

export const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Eliminar departamento"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem a certeza que deseja eliminar este departamento permanentemente?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={async () => {
              await deleteDoc(doc(firestore, "teams", product.id));
              window.location.reload(false);
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
            >
              {/*<People color="#555" onClick={() => setShowMembers(true)} />
              <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                {product.members} Membros
            </Typography>*/}
            </Grid>
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
                color="primary"
                variant="contained"
                style={{ marginLeft: "70px", marginTop: "10px" }}
                onClick={handleClickOpen}
              >
                Eliminar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
