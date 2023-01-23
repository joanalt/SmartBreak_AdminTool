import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { TaskSquare, UserAdd, Diagram, MedalStar } from "iconsax-react";

const atividade = [
  {
    id: uuid(),
    name: "1 objetivo cumprido",
    imageUrl: <TaskSquare variant="Bold" color="#0051BA" />,
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "3 novos funcionários",
    imageUrl: <UserAdd variant="Bold" color="#0051BA" />,
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "9 equipamentos adicionados",
    imageUrl: <Diagram variant="Bold" color="#0051BA" />,
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: "2 prémios atribuídos",
    imageUrl: <MedalStar variant="Bold" color="#0051BA" />,
    updatedAt: subHours(Date.now(), 5),
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${atividade.length} in total`} title="Atividade recente" />
    <Divider />
    <List>
      {atividade.map((atividade, i) => (
        <ListItem divider={i < atividade.length - 1} key={atividade.id}>
          <ListItemAvatar>
            <div>{atividade.imageUrl}</div>
          </ListItemAvatar>
          <ListItemText
            primary={atividade.name}
            secondary={`Updated ${formatDistanceToNow(atividade.updatedAt)}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);
