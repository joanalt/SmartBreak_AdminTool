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
              borderRadius: "22px",
              border: "2.5px black solid",
              height: "120px",
            }}
          />
          <div
            style={{
              width: "10px",
              backgroundColor: "black",
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
              backgroundColor: "#0051BA",
              borderRadius: "18px",
              height: "112px",
              marginLeft: "-124px",
              marginTop: "4px",
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
