// import { Box } from '@mui/system'
// import React from 'react'
// import { Button } from '@mui/material';
// import { useFormik } from 'formik';
// import * as yup from 'yup'

// function Login() {
    
//     const formik = useFormik({
//         initialValues: { email: "", password: "" },
//         onSubmit: (values) => {
//         alert("salam")
//           console.log(values);
//         },
//           validationSchema : yup.object({
//         email: yup.string("error email").email("email ra vared kon").required("hatman email ra vared kon"),
//         password: yup.string("error password")
//           .min(3, "3ta bishtar")
//           .max(8, "8ta kamtar")
//           .required("bayad vared koni"),
//       })
//       })
    

//   return (
//     <Box
//       sx={{
//         flex: 1,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           name="email"
//           type="text"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <input
//           name="password"
//           type="text"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <Button type="submit">submit</Button>
//       </form>
//     </Box>
//   );
// }

// export default Login


import React from "react";
import { Formik, Field, Form } from "formik";
import Header from './../Header/index';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Basic = ({setToken}) => {
    const navigate = useNavigate();

    return(
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
  
      onSubmit={async (values) => {
       const res = await axios.post("https://reqres.in/api/login",values) 
       console.log(res.data)
       setToken(res.data.token)
         navigate("/")
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" type="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
)
    };

export default Basic
// ReactDOM.render(<Basic />, document.getElementById("root"));
