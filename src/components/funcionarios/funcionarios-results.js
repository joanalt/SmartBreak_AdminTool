import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { doc, deleteDoc, updateDoc, getDoc } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

export const CustomerListResults = ({ customers, ...rest }, props) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [search, setSearch] = useState("");

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Box {...props}>
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
            Funcionários da empresa
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  value={search}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon color="action" fontSize="small">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Procurar funcionário"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Card {...rest} sx={{ mt: 3 }}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {search == "" ? (
                  <>
                    {customers &&
                      customers.map((customer) => (
                        <TableRow
                          hover
                          key={customer.id}
                          selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                        >
                          <TableCell>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <Typography color="textPrimary" variant="body1">
                                {customer.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell>
                            <Button
                              color="primary"
                              variant="contained"
                              style={{ marginLeft: 10 }}
                              onClick={async () => {
                                await deleteDoc(doc(firestore, "users_data", customer.id));
                                window.location.reload(false);
                              }}
                            >
                              Eliminar funcionário
                            </Button>
                            <Button
                              color="primary"
                              variant="contained"
                              style={{ marginLeft: 40 }}
                              onClick={async () => {
                                const docRef = doc(firestore, "users_data", customer.id);

                                // Set the "capital" field of the city 'DC'
                                await updateDoc(docRef, {
                                  admin: true,
                                });
                                alert(
                                  "Utilizador " + customer.name + " promovido a administrador."
                                );
                              }}
                            >
                              Pomover a administrador
                            </Button>
                            <Button
                              color="primary"
                              variant="outlined"
                              style={{ marginLeft: 40 }}
                              onClick={async () => {
                                const docRef = doc(firestore, "users_data", customer.id);

                                // Set the "capital" field of the city 'DC'
                                await updateDoc(docRef, {
                                  admin: false,
                                });
                                alert("Utilizador " + customer.name + " desprovido.");
                              }}
                            >
                              Despromover
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </>
                ) : (
                  <>
                    {filteredCustomers.map((customer) => (
                      <TableRow
                        hover
                        key={customer.id}
                        selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                            onChange={(event) => handleSelectOne(event, id)}
                            value="true"
                          />
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                              {customer.name}
                            </Avatar>
                            <Typography color="textPrimary" variant="body1">
                              {customer.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.equipa}</TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
