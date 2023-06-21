import { Card, CardHeader, CardContent, Divider, useTheme, Box, Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import { SimpleDropdown } from "react-js-dropdavn";
import "react-js-dropdavn/dist/index.css";

const data = [
  { label: "10%", value: 1 },
  { label: "20%", value: 2 },
  { label: "30%", value: 3 },
  { label: "40%", value: 4 },
];

export const Bateria = (props) => {
  const theme = useTheme();
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <Card {...props}>
      <CardHeader title="Configurações da bateria" />
      <Divider />
      <CardContent>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} aria-label="Bateria da empresa com fundo  branco e preenchimento a azul">
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
        <Divider style={{ marginTop: "30px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ marginTop: 20 }} aria-label="Texto na cor preta num fundo branco escrito Utilizar valores deafult seguido de um switch com a cor azul quando ligado e cinzento quando desligado">Utilizar valores default</p>
          <Switch {...label} defaultChecked />
        </div>
        <div>
          <p style={{ marginTop: 50 }} aria-label="Texto na cor preta num fundo branco escrito Duração ideal de uma pausa (min)">Duração ideal de uma pausa (min)</p>
          <Box style={{ display: "flex" }} aria-label="Escala com vários tons de azul onde o centro (azul mais claro) representa o valor ideal e as extrimidades (azul escuro) o oposto">
            <div
              style={{
                width: "200px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}  
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#07407B",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>nulo</p>
            <p>&lt; 5</p>
            <p>5-15</p>
            <p>&gt; 15</p>
            <p>&gt; 20</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5%" }}>
            <SimpleDropdown
              options={data}
              clearable
              configs={{ position: { y: "bottom", x: "center" } }}
            />
          </div>
        </div>
        <div>
          <p style={{ marginTop: 50 }}>Número ideal de pausas</p>
          <Box style={{ display: "flex" }}>
            <div
              style={{
                width: "200px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#07407B",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                backgroundColor: "#062647",
                height: "20px",
                marginTop: "15px",
              }}
            />
            <div
              style={{
                width: "200px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#000A16",
                height: "20px",
                marginTop: "15px",
              }}
            />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>0</p>
            <p>&lt; 2</p>
            <p>2-4</p>
            <p>&gt; 4</p>
            <p>&gt; 6</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5%" }}>
            <SimpleDropdown
              options={data}
              clearable
              configs={{ position: { y: "bottom", x: "center" } }}
            />
          </div>
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
