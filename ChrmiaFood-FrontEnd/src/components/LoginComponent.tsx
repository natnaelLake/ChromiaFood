import { useState } from "react";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { LoginComponentProps } from "./types";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = (props: LoginComponentProps) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    try {
      localStorage.setItem("user", values);
      navigate("/");
    } catch (error) {
      setServerError("Login failed. Please check your credentials."); // Display server-side error
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
        Login
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
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
              sx={{ marginTop: "20px", justifyContent: "center", width: 150 }}
            >
              Login
            </Button>

            {serverError && (
              <Typography color="error" sx={{ marginTop: "10px" }}>
                {serverError}
              </Typography>
            )}

            <Typography variant="body2" sx={{ marginTop: "20px" }}>
              Don't have an account yet?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={props.handleSignupLinkClick}
              >
                Create Account
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default Login;
