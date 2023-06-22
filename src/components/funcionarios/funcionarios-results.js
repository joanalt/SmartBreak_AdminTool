import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

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
import { useEffect } from "react";
import user from "../../redux/user";

export const CustomerListResults = ({ customers, ...rest }, props) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("userData"));
  const [search, setSearch] = useState("");
  const [depName, setDepName] = useState("");

  const deleteStaff = async (id) => {
    try {
      const response = await fetch("https://sb-api.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("-------------------", data);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", error.message);
    }
  };

  const editStaff = async (value, id) => {
    console.log(".........................", value);
    try {
      const response = await fetch("https://sb-api.herokuapp.com/users/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
        body: JSON.stringify({ admin: !value }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("-------------------D", data);
        router.push("/painel");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", error.message);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://sb-api.herokuapp.com/departments/" + customer.department,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer " + user.token,
  //         },
  //       }
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setDepName(data.message.name);
  //       console.log("-------------------", data.message);
  //     } else {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     //Alert.alert("Error", error.message);
  //   }
  // };

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
                  {/* <TableCell>Departamento</TableCell> */}
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
                          {/* <TableCell>{depName}</TableCell> */}
                          <TableCell>
                            {customer._id != user._id ? (
                              <Button
                                variant="outlined"
                                style={{
                                  marginLeft: 10,
                                  borderColor: "#AA0000",
                                  color: "#AA0000",
                                }}
                                onClick={() => {
                                  console.log(customer._id);
                                  deleteStaff(customer._id);
                                  //window.location.reload(false); TODO :)
                                }}
                              >
                                Eliminar
                              </Button>
                            ) : (
                              <></>
                            )}
                            {customer._id != user._id ? (
                              !customer.admin ? (
                                <Button
                                  color="primary"
                                  variant="contained"
                                  style={{ marginLeft: 40 }}
                                  onClick={async () => {
                                    editStaff(customer.admin, customer._id);
                                    // Set the "capital" field of the city 'DC'
                                  }}
                                >
                                  Fornecer permissões
                                </Button>
                              ) : (
                                <Button
                                  color="primary"
                                  variant="outlined"
                                  style={{ marginLeft: 40 }}
                                  onClick={async () => {
                                    editStaff(customer.admin, customer._id);
                                  }}
                                >
                                  Suspender permissões
                                </Button>
                              )
                            ) : (
                              <></>
                            )}
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
