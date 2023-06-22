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

function getStyles(name, teamsSelected, theme) {
  return {
    fontWeight:
      teamsSelected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const ProductListToolbar = (props) => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const [open, setOpen] = useState(false);
  const [priorityGoal, setPriorityGoal] = useState("");
  const [descriptionGoal, setDescriptionGoal] = useState("");

  const [allUsers, setAllUsers] = useState({});

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [addPriority, setAddPriority] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const addGoal = async () => {
    try {
      const response = await fetch("https://sb-api.herokuapp.com/goals/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + user.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priority: addPriority,
          description: addDescription,
          organization: user.organization,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
        <DialogTitle id="alert-dialog-title">{"Adicionar um novo objetivo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Preencha os campos corretamente para criar um novo objetivo.
          </DialogContentText>
          <Box>
            <TextField
              sx={{ marginTop: 5 }}
              onChange={(event) => setAddPriority(event.target.value)}
              defaultValue={""}
              fullWidth
              id="priority"
              label="Prioridade"
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
              label="Descrição do objetivo"
              required
              rows={4}
              variant="outlined"
              size="small"
            />
            {/*<FormControl required fullWidth sx={{ marginTop: 3 }}>
              <InputLabel id="demo-simple-select-label">Equipas</InputLabel>
              <Select
                labelId="team_users"
                id="demo-simple-select"
                value={teamsSelected}
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
                    style={getStyles(element, teamsSelected, theme)}
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
              if (addPriority == "") {
                alert("Preencha o campo da prioridade do novo objetivo.");
              } else if (setAddDescription == "") {
                alert("Preencha o campo do novo objetivo.");
              }
              console.log(addPriority);
              console.log(setAddDescription);
              addGoal();
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
          Objetivos da empresa
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
