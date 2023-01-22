import { Card, CardContent, Divider, useTheme } from "@mui/material";

export const Sales = (props) => {
  const theme = useTheme();

  return (
    <Card {...props}>
      <Divider />
      <CardContent>bateria + métricas</CardContent>
      <Divider />
    </Card>
  );
};
