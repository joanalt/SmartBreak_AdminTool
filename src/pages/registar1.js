import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
//import { useFormik } from "formik";
//import * as Yup from "yup";
import { Box, Button, Container, FormHelperText, Link, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
//import { logUser } from "../../redux/user.js";

const apiURL = "https://sb-api.herokuapp.com/auth/register";

const Register = () => {
  /*const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Deve ser um email válido").max(255).required("Campo obrigatório"),
      firstName: Yup.string().max(255).required("Campo obrigatório"),
      lastName: Yup.string().max(255).required("Campo obrigatório"),
      password: Yup.string().max(255).required("Campo obrigatório"),
      policy: Yup.boolean().oneOf([true], "Campo obrigatório"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  const router = useRouter();

  function handleNavigation() {
    router.push("/registar2");
  }*/

  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const router = useRouter();

  // select items
  const [open, setOpen] = useState(false);
  const [valueOrg, setValueOrg] = useState("");
  const [items, setItems] = useState([]);
  const [orgId, setOrgId] = useState("");

  const [openDep, setOpenDep] = useState(false);
  const [valueDep, setValueDep] = useState("");
  const [itemsDep, setItemsDep] = useState([]);

  // fields
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [organization, setOrganization] = useState("");
  const [department, setDepartment] = useState("");
  const [notifications, setNotifications] = useState([true, false, false, false]);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://sb-api.herokuapp.com/organizations", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          const message = data.message;
          for (let i = 0; i < message.length; i++) {
            const newItem = { label: message[i].name, value: message[i]._id };
            setItems((prevItems) => [...prevItems, newItem]);
          }
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
      } catch (error) {
        console.error(error);
        //Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setItemsDep]);

  const handleRegister = async () => {
    try {
      /*const response = await fetch("https://sb-api.herokuapp.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          //email: email.trim(),
          email: email,
          password: password,
          admin: false,
          department: department.replace(/"/g, ""),
          organization: organization.replace(/"/g, ""),
        }),
      });*/

      const response = await fetch("https://sb-api.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          surname: surname,
          //email: email.trim(),
          email: email,
          password: password,
          admin: false,
          department: department.replace(/"/g, ""),
          organization: organization.replace(/"/g, ""),
          headers: {
            "Content-Type": "application/json",
          },
        }),
      });

      if (response.ok) {
        // registo com sucesso
        // Alert.alert("Registration successful");
        // --->  redireccionar para outra pagina
      } else {
        const errorData = await response.json();
        //Alert.alert("Falha no registo!", errorData.message);
      }
    } catch (error) {
      console.error(error);
      //Alert.alert("Erro!", "Ocorreu um erro durante o registo.");
    }
  };

  const validate_email = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    }
    return true;
  };

  const validate_password = (pass, pass2) => {
    if (pass != pass2) {
      //alert("As palavras-passe não coincidem.");
      return false;
    }
    if (pass.length < 8) {
      //alert("A palavra-passe deve ter no mínimo 8 caracteres.");
      return false;
    }
    return true;
  };

  const submit = () => {
    setLoading(true);

    if (email.trim().length === 0 || validate_email(email.trim()) === false) {
      //Alert.alert("Preencha corretamente o campo E-mail");
      setLoading(false);
      return false;
    }
    if (name.trim().length === 0) {
      //Alert.alert("Preencha corretamente o campo Nome");
      setLoading(false);
      return false;
    }
    if (surname.trim().length === 0) {
      //Alert.alert("Preencha corretamente o campo Apelido");
      setLoading(false);
      return false;
    }
    if (valueOrg == null) {
      //Alert.alert("Preencha corretamente o campo Empresa");
      setLoading(false);
      return false;
    }
    if (valueDep == null) {
      //Alert.alert("Preencha corretamente o campo Departamento");
      setLoading(false);
      return false;
    }
    if (password.length === 0) {
      //Alert.alert("Preencha corretamente o campo Palavra-passe");
      setLoading(false);
      return false;
    }
    if (confirmPassword.length === 0) {
      //Alert.alert("Preencha corretamente o campo Confirmar palavra-passe");
      setLoading(false);
      return false;
    }
    if (!validate_password(password, confirmPassword)) {
      setLoading(false);
      return false;
    }
    handleRegister();
    //navigation.navigate("/registar2");
    router.push("/registar2");
  };

  return (
    <>
      <Head>
        <title>Smart Break</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          backgroundColor: "#07407B",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <img src="static/images/auth_logo.svg" alt="logo" width="120" height="120" />
          <p
            style={{
              paddingTop: "15px",
              color: "#E3ECF7",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Smart Break
          </p>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginBottom: "60px",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
          }}
        >
          <form /*onSubmit={formik.handleSubmit}*/>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Regista-te
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Estamos contentes por teres tomado esta iniciativa. Vem fazer energy breaks.
              </Typography>
            </Box>
            <TextField
              //error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              //helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nome próprio"
              margin="normal"
              name="firstName"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.firstName}
              variant="outlined"
              onChange={(text) => setName(text)}
            />
            <TextField
              //error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              //helperText={formik.touched.lastName && formik.errors.lastName}
              label="Apelido"
              margin="normal"
              name="lastName"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.lastName}
              variant="outlined"
              onChange={(text) => setSurname(text)}
            />
            <TextField
              //error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              //helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              type="email"
              //value={formik.values.email}
              variant="outlined"
              onChange={(text) => setEmail(text)}
            />
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Palavra-passe"
              margin="normal"
              name="password"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              type="password"
              //value={formik.values.password}
              variant="outlined"
              onChange={(text) => setPassword(text)}
            />
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Confirmar palavra-passe"
              margin="normal"
              name="passwordConfirm"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              type="password"
              //value={formik.values.passwordConfirm}
              variant="outlined"
              onChange={(text) => setConfirmPassword(text)}
            />
            {/*Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )*/}
            <Box sx={{ py: 2 }}>
              <NextLink href="/registar2" passHref>
                <Button
                  color="primary"
                  //disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={() => handleRegister()}
                >
                  Seguinte
                </Button>
              </NextLink>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Já tens conta?{" "}
              <NextLink href="/" passHref>
                <Link variant="subtitle2" underline="hover">
                  Clica aqui para entrar
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
