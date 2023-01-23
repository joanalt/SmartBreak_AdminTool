import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Chip,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import * as React from 'react';
import { Search as SearchIcon } from "../../icons/search";
import { useEffect, useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getDocs, collection, addDoc, updateDoc   } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";



function getStyles(name, usersSelected, theme) {
  return {
    fontWeight:
      usersSelected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export const ProductListToolbar = (props) => {
  
  const [open, setOpen] = useState(false);
  const [usersSelected, setUsersSelected] = useState([]);
  const [nameTeam, setNameTeam] = useState("");
  const [descriptionTeam, setDescriptionTeam] = useState("");

  const [allUsers, setAllUsers] = useState({});
  const [users, setUsers] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => { 
    let temp = {};
    let temp2 = [];
  
    const ref = await getDocs(collection(firestore, 'users_data'));
    ref.forEach((doc) => {
      
      // console.log(doc.id, " => ", doc.data())
      temp[(doc.data().uid)] = (doc.data().name + " " + doc.data().lastName)
      
      temp2.push((doc.data().name + " " + doc.data().lastName))
    })
  
    console.log("DEBUG: ", temp);
    setUsers(temp2);
    setAllUsers(temp);
  }



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUsersSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
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
        <DialogTitle id="alert-dialog-title">
          {"Adicionar uma nova equipa"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Preencha os campos corretamente para criar uma nova equipa.
          </DialogContentText>
          <Box>
            <TextField sx={{marginTop: 5}} onChange={(event) => setNameTeam(event.target.value)} defaultValue={""} fullWidth id="team_name" label="Nome da equipa" variant="outlined" required size="small" />
            <TextField sx={{marginTop: 3}} onChange={(event) => setDescriptionTeam(event.target.value)} defaultValue={""} fullWidth multiline id="team_description" label="Descrição da equipa" required rows={4} variant="outlined" size="small" />
            <FormControl required fullWidth sx={{marginTop: 3}} >
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
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={async () => {
            if (nameTeam == "") {
              alert("Preencha o campo do nome da nova equipa.")
            } else if (descriptionTeam == "") {
              alert("Preencha o campo da descrição da nova equipa.")
            } else if ( usersSelected.length == 0) {
              alert("Prencha os membros da nova equipa.")
            }
            console.log(nameTeam)
            console.log(descriptionTeam)
            console.log(usersSelected)
            let arrayUsers = []
            usersSelected.forEach((element) => {
                arrayUsers.push(Object.keys(allUsers).find(key => allUsers[key] === element));
            })

            console.log(arrayUsers)
            const docRef = await addDoc(collection(firestore, "teams"), {
              name: nameTeam,
              description: descriptionTeam,
              users : arrayUsers,
              battery : 0,
            });

            // Set the "capital" field of the city 'DC'
            await updateDoc(docRef, {
              id: docRef.id,
            });
            setOpen(false);
            }} autoFocus>
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
        Equipas da empresa
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Eliminar equipa
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onClick={handleClickOpen}
        >
          Adicionar equipa
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Procurar equipa"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
)};
