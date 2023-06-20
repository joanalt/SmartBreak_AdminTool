import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

import { doc, collection, updateDoc, getDoc } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

export const AccountProfileDetails = (props) => {
  const id = "EusdGqpC9WYJYIJfYycJVHFf4u72";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const docRef = doc(firestore, "users_data", id);
    const docSnap = await getDoc(docRef);
    setFirstName(docSnap.data().name);
    setLastName(docSnap.data().lastName);
    setEmail(docSnap.data().email);
  };

  const handleChangefirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const handleChangelastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const editData = async () => {
    const docRef = doc(firestore, "users_data", id);

    // Set the "capital" field of the city 'DC'
    if (firstName != "") {
      await updateDoc(docRef, {
        name: firstName,
      });
    }

    if (lastName != "") {
      await updateDoc(docRef, {
        lastName: lastName,
      });
    }

    if (email != "") {
      await updateDoc(docRef, {
        email: email,
      });
    }

    window.location.reload(false);
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="Estes são os dados que podem ser editados" title="Perfil" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Escreva o primeiro nome"
                label="Nome"
                name="firstName"
                onChange={handleChangefirstName}
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Escreva o último nome"
                label="Apelido"
                name="lastName"
                onChange={handleChangelastName}
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChangeEmail}
                value={email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Alterar palavra-passe"
                name="alterar palavra-passe"
                //onChange={handleChangeEmail}
                value={email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
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
    </form>
  );
};
