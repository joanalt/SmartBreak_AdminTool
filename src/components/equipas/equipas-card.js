import PropTypes from "prop-types";
import { Box, Card, CardContent, Divider, Grid, Typography, IconButton  } from "@mui/material";
import { People, ArrowCircleUp, ArrowCircleDown } from "iconsax-react";
import { doc, getDoc, collection } from "@firebase/firestore"
import { firestore } from "../../firebase_setup/firebase"
import { useEffect, useState } from "react";

const Member = async ({employee}) => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");

    const docRef = doc(firestore, "users_data", employee);
    const docSnap = await getDoc(docRef);
    setEmployeeName(docSnap.data().name + " " + docSnap.data().lastName);
    setEmployeeEmail(docSnap.data().email)


  return(
    <>
    <Typography align="left" color="textPrimary" gutterBottom variant="body2">
      {employeeName}
    </Typography>
    <Typography align="left" color="textPrimary" gutterBottom variant="body2">
      {employeeEmail}
    </Typography>
    </>
  )
}

export const ProductCard = ({ product, ...rest }) => {

  const [showMembers, setShowMembers] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const getMemberInfo = async (employee) => {

    const docRef = doc(firestore, "users_data", employee);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserName(docSnap.data().name + " " + docSnap.data().lastName)
      setUserEmail(docSnap.data().email)
    } else {
    //       // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      ></Box>
      
        <Typography align="left" color="textPrimary" gutterBottom variant="h5">
          {product.name}
        </Typography>
        <Typography align="left" color="textPrimary" variant="body2">
          {product.description}
        </Typography>
     
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
          lg={10} sm={10} xl={10} xs={12}
        >
          <People color="#555" onClick={() => setShowMembers(true)}/>
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {product.members} Membros
          </Typography>
        </Grid>
        <Grid item lg={2} sm={2} xl={2} xs={12}>
          {showMembers ? 
              <IconButton  variant="text" size="small"> <ArrowCircleUp variant="Bold"  color="#0051ba" onClick={() => setShowMembers(false)}/></IconButton >
            :
              <IconButton  variant="text" size="small"> <ArrowCircleDown variant="Bold"  color="#0051ba" onClick={() => setShowMembers(true)}/></IconButton >
          }
       
        </Grid>
      </Grid>
    </Box>
  </Card>
)};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
