// import { SetStateAction, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import { Button, TextareaAutosize, CircularProgress } from "@mui/material";
// import { useSessionContext } from "./ContextProvider";
// interface themeTypes {
//   spacing: (value: number) => number;
//   shape: {
//     borderRadius: string;
//   };
// }
// const useStyles = makeStyles((theme:themeTypes) => ({
//   root: {
//     padding: theme.spacing(6),
//   },
//   textarea: {
//     width: "100%",
//     padding: theme.spacing(2),
//     border: "1px solid",
//     borderRadius: theme.shape.borderRadius,
//   },
//   button: {
//     float: "right",
//   },
// }));

// export default function NewsPost() {
//   const router = useNavigate();
//   const classes = useStyles();
//   const session = useSessionContext();
//   const [isLoading, setIsLoading] = useState(false);
//   const [content, setContent] = useState("");

//   const handleContentChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setContent(e.target.value);
//   };

//   const onSubmit = async (data: string) => {
//     if (!session) return
//     try {
//       if (data.trim() !== '') {
//         setIsLoading(true);
//         // Step 4: Content submission
//         await session.call({
//           name: "make_post",
//           args: [data],
//         })
//         router('/');
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setContent("");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <TextareaAutosize
//         className={classes.textarea}
//         // rowsMin={4}
//         placeholder="Write your post..."
//         value={content}
//         onChange={handleContentChange}

//       />
//       <Button
//         className={classes.button}
//         variant="contained"
//         color="primary"
//         disabled={isLoading || content.trim() === ""}
//         onClick={() => onSubmit(content)}
//       >
//         {isLoading ? <CircularProgress size={24} /> : "Post"}
//       </Button>
//     </div>
//   );
// }
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddFood = () => {
  const AddFoodSchema = Yup.object().shape({
    foodName: Yup.string().required("Food Name is required"),
    cuisineType: Yup.string().required("Cuisine Type is required"),
    description: Yup.string().required("Description is required"),
    imageLink: Yup.string().required("Image Link is required"),
  });

  return (
    <Box pt={15} pb={1}>
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add New Food
        </Typography>

        <Formik
          initialValues={{
            foodName: "",
            cuisineType: "",
            description: "",
            imageLink: "",
          }}
          validationSchema={AddFoodSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            // You can handle form submission logic here
            // Reset form after submission if needed
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%", marginTop: "20px" }}>
              <Field
                as={TextField}
                name="foodName"
                label="Food Name"
                variant="outlined"
                fullWidth
                error={errors.foodName && touched.foodName}
                helperText={
                  errors.foodName && touched.foodName && errors.foodName
                }
                sx={{ marginBottom: "20px" }}
              />
              <Field
                as={TextField}
                name="cuisineType"
                label="Cuisine Type"
                variant="outlined"
                fullWidth
                error={errors.cuisineType && touched.cuisineType}
                helperText={
                  errors.cuisineType &&
                  touched.cuisineType &&
                  errors.cuisineType
                }
                sx={{ marginBottom: "20px" }}
              />
              <Field
                as={TextField}
                name="imageLink"
                label="Type Food Image Link"
                variant="outlined"
                fullWidth
                error={errors.imageLink && touched.imageLink}
                helperText={
                  errors.imageLink && touched.imageLink && errors.imageLink
                }
                sx={{ marginBottom: "20px" }}
              />
              <Field
                as={TextField}
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={errors.description && touched.description}
                helperText={
                  errors.description &&
                  touched.description &&
                  errors.description
                }
                sx={{ marginBottom: "20px" }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Add Food
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default AddFood;
