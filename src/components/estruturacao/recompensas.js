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
import { Car, Coffee, DollarCircle, Airplane, CardAdd } from "iconsax-react";

export const Recompensas = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [descriptionRecompensa, setDescriptionRecompensa] = useState();

  const recompensas = [
    {
      id: uuid(),
      name: "Vale de 20€ de combustível em bombas da Galp.",
      icon: (
        <Car
          variant="Bold"
          color="#07407B"
          aria-label="Ícone na cor azul num fundo branco de um carro"
        />
      ),
    },
    {
      id: uuid(),
      name: "1 dia de férias programado para o mês de setembro.",
      icon: (
        <Airplane
          variant="Bold"
          color="#07407B"
          aria-label="Ícone na cor azul num fundo branco de um avião"
        />
      ),
    },
    {
      id: uuid(),
      name: "Extra de 10 cafés grátis durante a semana.",
      icon: (
        <Coffee
          variant="Bold"
          color="#07407B"
          aria-label="Ícone na cor azul num fundo branco de um café"
        />
      ),
    },
    {
      id: uuid(),
      name: "Bónus de 50€ mensais.",
      icon: (
        <DollarCircle
          variant="Bold"
          color="#07407B"
          aria-label="Ícone na cor azul num fundo branco de um dollar"
        />
      ),
    },
    {
      id: uuid(),
      name: "Vale de 20€ em refeições.",
      icon: (
        <CardAdd
          variant="Bold"
          color="#07407B"
          aria-label="Ícone na cor azul num fundo branco de um cartão bancário"
        />
      ),
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
          <DialogTitle
            id="alert-dialog-title"
            aria-label="Texto na cor preta num fundo branco escrito Adicionar uma nova recompensa"
          >
            Adicionar uma nova recompensa
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              aria-label="Texto na cor preta num fundo branco escrito Preencha os campos corretamente para criar uma nova recompensa."
            >
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
                aria-label="Campo de texto branco para escrever a recompensa"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              aria-label="Botão clicável com texto na cor azul escrito Cancelar"
            >
              Cancelar
            </Button>
            <Button
              style={{ color: "#F57738" }}
              onClick={async () => {
                if (descriptionRecompensa == "") {
                  alert("Preencha o campo da nova recompensa.");
                }
                console.log(descriptionRecompensa);
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
              aria-label="Botão clicável com texto na cor azul laranja Adicionar"
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
          <CardHeader
            subtitle={`${recompensas.length} in total`}
            title="Recompensas"
            aria-label="Texto como título na cor preta num fundo branco escrito Recompensas"
          />
          <Box sx={{ m: 1 }}>
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: "10px", marginTop: "10px" }}
              onClick={handleClickOpen}
              aria-label="Botão na cor azul e hover laranja clicável com texto na cor branca escrito Adicionar recompensa"
            >
              Adicionar
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>
        {recompensas.map((recompensas, i) => (
          <ListItem divider={i < recompensas.length - 1} key={recompensas.id}>
            <div style={{ marginRight: 10 }}>{recompensas.icon}</div>
            <ListItemText
              primary={recompensas.name}
              aria-label={`Texto na cor preta num fundo branco escrito ${recompensas.name}`}
            />
            <Button
              color="primary"
              variant="outlined"
              style={{ marginLeft: 40 }}
              onClick={async () => {
                await deleteDoc(doc(firestore, "users_data", customer.id));
                window.location.reload(false);
              }}
              aria-label="Botão clicável com texto na cor azul escrito Eliminar"
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
