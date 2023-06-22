import {
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Chip,
  Typography,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

function getStyles(name, usersSelected, theme) {
  return {
    fontWeight:
      usersSelected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const ProductListToolbar = (props) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [nameTeam, setNameTeam] = useState("");
  const [descriptionTeam, setDescriptionTeam] = useState("");

  const [allUsers, setAllUsers] = useState({});

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const addDepartment = async () => {
    try {
      const response = await fetch("https://sb-api.herokuapp.com/departments/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: addName,
          description: addDescription,
          organization: user.organization,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.push("/painel");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Adicionar um novo departamento"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Preencha os campos corretamente para criar um novo departamento.
          </DialogContentText>
          <Box>
            <TextField
              sx={{ marginTop: 5 }}
              onChange={(event) => setAddName(event.target.value)}
              defaultValue={""}
              fullWidth
              id="team_name"
              label="Nome do departamento"
              variant="outlined"
              required
              size="small"
            />
            <TextField
              sx={{ marginTop: 3 }}
              onChange={(event) => setAddDescription(event.target.value)}
              defaultValue={""}
              fullWidth
              multiline
              id="team_description"
              label="Descrição do departamento"
              required
              rows={4}
              variant="outlined"
              size="small"
            />
            {/*<FormControl required fullWidth sx={{ marginTop: 3 }}>
              <InputLabel id="demo-simple-select-label">Membros</InputLabel>
              <Select
                labelId="team_users"
                id="demo-simple-select"
                value={usersSelected}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                label="Users"
                onChange={handleChange}
                multiple
                variant="outlined"
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {users.map((element) => (
                  <MenuItem
                    key={element}
                    value={element}
                    style={getStyles(element, usersSelected, theme)}
                  >
                    {element}
                  </MenuItem>
                ))}
              </Select>
                </FormControl>*/}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#747474" }} onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            style={{ color: "#07407B" }}
            onClick={async () => {
              if (addName == "") {
                alert("Preencha o campo do nome do novo departamento.");
              } else if (addDescription == "") {
                alert("Preencha o campo da descrição do novo departamento.");
              }
              console.log(addName);
              console.log(addDescription);
              addDepartment();
              setOpen(false);
              // window.location.reload(false);
            }}
            autoFocus
          >
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Departamentos da empresa
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            onClick={handleClickOpen}
          >
            Adicionar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
