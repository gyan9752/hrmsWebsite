import { CircularProgress, styled } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useRegisterUserMutation } from "../features/api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerUser, { data, isError, isLoading, isSuccess, error }] =
    useRegisterUserMutation();

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await registerUser(values);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("Invalid Email Formate"),
    password: Yup.string()
      .required("password is required")
      .min(8, "password must be 8 characters"),
    name: Yup.string().required("name is required"),
    role: Yup.string().required("role is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",

      email: "",
      password: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const { values, handleBlur, handleChange, resetForm, errors, touched } =
    formik;

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
    if (isSuccess && data) {
      toast.success(data?.message || "Registration Successfully");
      resetForm();
      navigate("/");
    }
  }, [isError, error, isSuccess, data]);

  return (
    <RegisterMainContainer>
      <RegisterContainer>
        <BlogText>Blog Management</BlogText>
        <FirsSection>
          <SignUp>SIGN UP</SignUp>
          <Para>Enter the credentials to create your account</Para>
        </FirsSection>
        <Form onSubmit={formik.handleSubmit}>
          <FormDetail>
            <Label htmlFor="name">Name</Label>
            <InputField
              placeholder="Enter your name ..."
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              id="name"
            />
            {touched.name && errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </FormDetail>
          <FormDetail>
            <Label htmlFor="email">Email</Label>
            <InputField
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email ..."
              type="email"
              name="email"
              id="email"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </FormDetail>
          <FormDetail>
            <Label htmlFor="password">Password</Label>
            <InputField
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password ..."
              type="password"
              name="password"
              id="password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </FormDetail>
          <FormDetail>
            <Label htmlFor="role">Role</Label>
            <SelectField
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              name="role"
              id="role"
            >
              <option value="">Select Role</option>
              <option disabled value="user">
                User
              </option>
              <option value="admin">Admin</option>
            </SelectField>
            {touched.role && errors.role && (
              <p className="error">{errors.role}</p>
            )}
          </FormDetail>
          <SignUpButton disabled={isLoading} type="submit">
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress size={20} />
                Submitting
              </div>
            ) : (
              "Sign Up"
            )}
          </SignUpButton>
        </Form>
        <LastSection>
          <ForgotPassword>Already have an account ?</ForgotPassword>
          <ResetPassword href="/">Login</ResetPassword>
        </LastSection>
      </RegisterContainer>
    </RegisterMainContainer>
  );
};

export default Register;

const RegisterMainContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);

  @media (max-width: 600px) {
    background-color: #fff;
    align-items: start;
  }
`;
const RegisterContainer = styled("div")`
  width: 475px;
  height: auto;
  border-radius: 20px;
  display: flex;
  background-color: #ffffff;
  padding: 25px;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;
const BlogText = styled("h1")`
  font: 700 32px Montserrat;
  color: #000000;
`;
const FirsSection = styled("div")`
  width: 318px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;
const SignUp = styled("p")`
  font: 600 20px Montserrat;
  color: #000000;
`;
const Para = styled("p")`
  font: 400 14px Montserrat;
  color: #6c6c6c;
`;
const Label = styled("label")`
  font: 500 16px Montserrat;
  color: #6c6c6c;
`;
const InputField = styled("input")`
  height: 60px;
  border-radius: 12px;
  border: 1px solid black;
  padding-left: 23px;
  font: 600 14px Montserrat;
  color: rgb(140, 130, 130);

  &:focus {
    outline: none;
    border-color: black;
  }
`;
const SelectField = styled("select")`
  height: 60px;
  border-radius: 12px;
  border: 1px solid black;
  padding-left: 23px;
  font: 600 14px Montserrat;
  color: rgb(140, 130, 130);
  padding-right: 23px;

  &:focus {
    outline: none;
    border-color: black;
  }
`;
const Form = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FormDetail = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const SignUpButton = styled("button")`
  height: 60px;
  border-radius: 12px;
  border: 1px solid black;
  font: 600 14px Montserrat;
  color: rgb(251, 248, 248);
  background-color: black;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #feaf00;
    border: none;
  }

  &:focus {
    outline: none;
  }
`;
const LastSection = styled("div")`
  display: flex;
  gap: 6px;
`;
const ForgotPassword = styled("p")`
  font: 400 14px Montserrat;
  color: #000000;
  text-decoration: none;
`;
const ResetPassword = styled("a")`
  font: 400 14px Montserrat;
  color: rgb(115, 22, 222);
`;
