import { useEffect, useState } from "react";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RegisterComponentProps } from "./types";
import { useNavigate } from "react-router-dom";
import {
  encryption,
  createClient,
  newSignatureProvider,
  IClient,
} from "postchain-client";
// import * as readline from "readline";
import { Buffer } from "buffer";
window.Buffer = Buffer;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = (props: RegisterComponentProps) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const [client, setClient] = useState<IClient | null>(null); // State to hold the client instance

  useEffect(() => {
    const blockchainRID =
      "E205E8264CDC0DAC653225863F89C2DE4565F5F5B99AEC620485EFB01CA64B29";

    const createCustomer = async () => {
      try {
        const newClient = await createClient({
          nodeUrlPool: "http://localhost:7740",
          blockchainRid: blockchainRID,
        });
        setClient(newClient); // Save the client instance in state
      } catch (error) {
        console.error("Error creating client:", error);
        // Handle error if client creation fails
      }
    };

    createCustomer();
  }, []);
  const privKey = Buffer.from(
    "08578F862463C943D2788425CC5DBCAA9BB0A36DBAE40511D939C1C9867C607E",
    "hex"
  );
  const systemKeeperKeyPair = encryption.makeKeyPair(privKey);
  const systemKeeperSignatureProvider =
    newSignatureProvider(systemKeeperKeyPair);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    try {
      localStorage.setItem("user", values);
      await client?.signAndSendUniqueTransaction(
        { name: "create_book", args: ["ISBN1", "Chromia 101", "John Doe"] },
        systemKeeperSignatureProvider
      );
      navigate("/");
    } catch (error) {
      setServerError("Signup failed. Please try again."); // Display server-side error
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: "400px",
        padding: "40px",
        margin: "auto",
        marginTop: "80px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Create Account
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              width: "100%",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Field
              as={TextField}
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              error={errors.firstName && touched.firstName}
              helperText={
                errors.firstName && touched.firstName && errors.firstName
              }
              sx={{ marginBottom: "20px" }}
            />
            <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              error={errors.lastName && touched.lastName}
              helperText={
                errors.lastName && touched.lastName && errors.lastName
              }
              sx={{ marginBottom: "20px" }}
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              sx={{ marginBottom: "20px" }}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
              sx={{ marginBottom: "20px" }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ marginTop: "20px" }}
            >
              Create Account
            </Button>

            {serverError && (
              <Typography color="error" sx={{ marginTop: "10px" }}>
                {serverError}
              </Typography>
            )}

            <Typography variant="body2" sx={{ marginTop: "20px" }}>
              Already have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={props.handleLoginLinkClick}
              >
                Login
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default Signup;
