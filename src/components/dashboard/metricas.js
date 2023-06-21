import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { Monitor, Home, Bus, Cloud } from "iconsax-react";

export const Metricas = (props) => {
  const theme = useTheme();

  const metricas = [
    {
      id: uuid(),
      name: "Carregar um portátil durante 40 horas.",
      imageUrl: <Monitor variant="Bold" color="#07407B" />,
    },
    {
      id: uuid(),
      name: "Igual aos gastos de um T3 com as luzes ligadas durante 4 horas.",
      imageUrl: <Home variant="Bold" color="#07407B" />,
    },
    {
      id: uuid(),
      name: "Equivalente a uma viagem de comboio Porto - Vigo.",
      imageUrl: <Bus variant="Bold" color="#07407B" />,
    },
    {
      id: uuid(),
      name: "Redução de 2,1% das emissões de dióxido carbono.",
      imageUrl: <Cloud variant="Bold" color="#07407B" />,
    },
  ];

  return (
    <Card {...props}>
      <CardHeader subtitle={`${metricas.length} in total`} title="Métricas" />
      <Divider />
      <List>
        {metricas.map((metricas, i) => (
          <ListItem divider={i < metricas.length - 1} key={metricas.id}>
            <ListItemAvatar>
              <div>{metricas.imageUrl}</div>
            </ListItemAvatar>
            <ListItemText primary={metricas.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
};
