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
              //onClick={}
              aria-label="Botão clicável com texto na cor azul escrito Associar"
            >
              Associar
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
};
