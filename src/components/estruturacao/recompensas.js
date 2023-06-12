import {
  Card,
  Box,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Button,
  TextField,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export const Recompensas = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const recompensas = [
    {
      id: uuid(),
      name: "Vale de 20€ de combustível em bombas da Galp.",
    },
    {
      id: uuid(),
      name: "1 dia de férias programado para o mês de setembro.",
    },
    {
      id: uuid(),
      name: "Extra de 10 cafés grátis durante a semana.",
    },
    {
      id: uuid(),
      name: "Bónus de 50€ mensais.",
    },
    {
      id: uuid(),
      name: "Vale de 20€ em refeições.",
    },
  ];

  return (
    <Card {...props}>
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Adicionar uma nova recompensa"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Preencha os campos corretamente para criar uma nova recompensa.
            </DialogContentText>
            <Box>
              <TextField
                sx={{ marginTop: 3 }}
                onChange={(event) => setDescriptionRecompensa(event.target.value)}
                defaultValue={""}
                fullWidth
                multiline
                id="recompensa_description"
                label="Recompensa"
                required
                rows={4}
                variant="outlined"
                size="small"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button
              onClick={async () => {
                if (descriptionRecompensa == "") {
                  alert("Preencha o campo da nova recompensa.");
                }
                console.log(descriptionGoal);
                let arrayTeams = [];
                teamsSelected.forEach((element) => {
                  arrayTeams.push(Object.keys(allUsers).find((key) => allUsers[key] === element));
                });

                console.log(arrayTeams);

                // Set the "capital" field of the city 'DC'
                await updateDoc(docRef, {
                  id: docRef.id,
                });
                setOpen(false);
                window.location.reload(false);
              }}
              autoFocus
            >
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <CardHeader subtitle={`${recompensas.length} in total`} title="Recompensas" />
          <Box sx={{ m: 1 }}>
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: "10px", marginTop: "10px" }}
              onClick={handleClickOpen}
            >
              Adicionar recompensa
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>
        {recompensas.map((recompensas, i) => (
          <ListItem divider={i < recompensas.length - 1} key={recompensas.id}>
            <ListItemText primary={recompensas.name} />
            <Button
              color="primary"
              variant="outlined"
              style={{ marginLeft: 40 }}
              onClick={async () => {
                await deleteDoc(doc(firestore, "users_data", customer.id));
                window.location.reload(false);
              }}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
};
