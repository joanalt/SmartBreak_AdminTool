import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { doc, collection, updateDoc, getDoc } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";
import { useState, useEffect } from "react";

export const AccountProfile = (props) => {
  const id = "EusdGqpC9WYJYIJfYycJVHFf4u72";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  console.log(firstName, lastName, email);

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

  return (
    <>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src="static/images/avatars/ester.png"
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {firstName} {lastName}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {email}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Escolher foto
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
