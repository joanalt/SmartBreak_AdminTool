import { v4 as uuid } from "uuid";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const consumo = [
  {
    id: uuid(),
    name: "Energia gasta no último mês",
    value: 30,
  },
  {
    id: uuid(),
    name: "Produtividade geral dos funcionários",
    value: 54,
  },
  {
    id: uuid(),
    name: "Total de objetivos concluídos previsto para o último trimestre",
    value: 60,
  },
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${consumo.length} in total`} title="Consumos gerais" />
    <Divider />
    <List>
      {consumo.map((consumo) => (
        <>
          <ListItem>
            <ListItemText primary={consumo.name} />
          </ListItem>
          <Box
            sx={{ pt: 3 }}
            style={{
              marginLeft: "15px",
              marginRight: "30px",
              marginBottom: "24px",
            }}
          >
            <LinearProgress value={consumo.value} variant="determinate" />
          </Box>
        </>
      ))}
    </List>
    <Divider />
  </Card>
);
