import { Card, CardHeader, CardContent, Divider, useTheme, Box, Button } from "@mui/material";
import Switch from "@mui/material/Switch";

export const Bateria = (props) => {
  const theme = useTheme();
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <Card {...props}>
      <CardHeader title="Configurações da bateria" />
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
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          53%
        </p>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ marginTop: 20 }}>Utilizar valores default</p>
          <Switch {...label} defaultChecked />
        </div>
        <div>
          <p style={{ marginTop: 50 }}>Duração ideal de uma pausa (min)</p>
          <Box style={{ display: "flex" }}>
            <div
              style={{
                width: "106px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#07407B",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
          </Box>
        </div>
        <div>
          <p style={{ marginTop: 50 }}>Número ideal de pausas</p>
          <Box style={{ display: "flex" }}>
            <div
              style={{
                width: "106px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#07407B",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "106px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
          </Box>
        </div>
        <Divider style={{ marginTop: "20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ marginTop: 50 }}>Ao carregar totalmente a bateria (100%), descarregá-la.</p>
          <Switch {...label} defaultChecked />
        </div>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            editData();
          }}
        >
          Guardar alterações
        </Button>
      </Box>
    </Card>
  );
};
