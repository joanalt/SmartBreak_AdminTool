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
import { getDocs, collection, addDoc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

function getStyles(name, teamsSelected, theme) {
  return {
    fontWeight:
      teamsSelected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const ProductListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const [teamsSelected, setTeamsSelected] = useState([]);
  const [nameTeam, setNameTeam] = useState("");
  const [descriptionTeam, setDescriptionGoal] = useState("");
  const [priorityGoal, setPriorityGoal] = useState("");

  const [allUsers, setAllUsers] = useState({});
  const [users, setUsers] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    let temp = {};
    let temp2 = [];

    const ref = await getDocs(collection(firestore, "teams"));
    ref.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data())
      temp[doc.data().uid] = doc.data().name;

      temp2.push(doc.data().name);
    });

    console.log("DEBUG: ", temp);
    setUsers(temp2);
    setAllUsers(temp);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTeamsSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              onChange={(event) => setPriorityGoal(event.target.value)}
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
              onChange={(event) => setDescriptionGoal(event.target.value)}
              defaultValue={""}
              fullWidth
              multiline
              id="team_description"
              label="Objetivo"
              required
              rows={4}
              variant="outlined"
              size="small"
            />
            <FormControl required fullWidth sx={{ marginTop: 3 }}>
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
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={async () => {
              if (priorityGoal == "") {
                alert("Preencha o campo da prioridade do novo objetivo.");
              } else if (descriptionGoal == "") {
                alert("Preencha o campo do novo objetivo.");
              } else if (teamsSelected.length == 0) {
                alert("Prencha as equipas do novo objetivo.");
              }
              console.log(priorityGoal);
              console.log(descriptionGoal);
              console.log(teamsSelected);
              let arrayTeams = [];
              teamsSelected.forEach((element) => {
                arrayTeams.push(Object.keys(allUsers).find((key) => allUsers[key] === element));
              });

              console.log(arrayTeams);
              const docRef = await addDoc(collection(firestore, "teams"), {
                name: nameTeam,
                description: descriptionTeam,
                users: arrayUsers,
                battery: 0,
              });

              // Set the "capital" field of the city 'DC'
              await updateDoc(docRef, {
                id: docRef.id,
              });
              setOpen(false);
              window.location.reload(false);
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
          {/* <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Eliminar objetivo
          </Button> */}
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            onClick={handleClickOpen}
          >
            Adicionar objetivo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
