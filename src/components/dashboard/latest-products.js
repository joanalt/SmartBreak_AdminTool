import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const products = [
  {
    id: uuid(),
    name: "1 objetivo cumprido",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "3 novos funcionários",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "9 equipamentos adicionados",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: "2 prémios atribuídos",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: subHours(Date.now(), 5),
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${products.length} in total`} title="Atividade recente" />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);
