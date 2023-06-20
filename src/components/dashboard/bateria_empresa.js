import { Card, CardHeader, CardContent, Divider, useTheme } from "@mui/material";

export const Bateria = (props) => {
  const theme = useTheme();

  return (
    <Card {...props}>
      <CardHeader title="Bateria da empresa" />
      <Divider />
      <CardContent>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div
            style={{
              width: "242px",
              borderRadius: "18px",
              border: "2px #07407B solid",
              height: "120px",
            }}
          />
          <div
            style={{
              width: "3px",
              backgroundColor: "#07407B",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              height: "30px",
              marginLeft: "5px",
              alignSelf: "center",
            }}
          />
          <div
            style={{
              width: "125px",
              backgroundColor: "#07407B",
              borderRadius: "18px",
              height: "120px",
              marginLeft: "-124px",
              position: "absolute",
            }}
          />
        </div>
        <p style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>53%</p>
      </CardContent>
      <Divider />
    </Card>
  );
};
