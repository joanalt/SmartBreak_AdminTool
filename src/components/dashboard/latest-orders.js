import { formatDistanceToNow, subHours } from "date-fns";
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

const products = [
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
    <CardHeader subtitle={`${products.length} in total`} title="Consumos gerais" />
    <Divider />
    <List>
      {products.map((product, i) => (
        <>
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemText primary={product.name} />
          </ListItem>
          <Box sx={{ pt: 3 }}>
            <LinearProgress value={product.value} variant="determinate" />
          </Box>
        </>
      ))}
    </List>
    <Divider />
  </Card>
);
