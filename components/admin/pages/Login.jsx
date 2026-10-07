import React from "react";
import { CircularProgress, styled, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../features/api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const loginResult = loginUser(values);
      const res = typeof loginResult.unwrap === "function" ? await loginResult.unwrap() : await loginResult;
      
      toast.success(res?.message || "Login successful!");

      const token = res?.token || res?.accessToken || res?.data?.token;
      const user = res?.user || res?.data?.user;

      if (token) {
        localStorage.setItem("authToken", token);
      }
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      setTimeout(() => {
        navigate("/");
      }, 300);
    } catch (err) {
      toast.error(err?.data?.message || err?.message || "Login failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email address or username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <LoginMainContainer>
      <LoginCard>
        <LogoHeader>
          <img src="/assets/images/hrvico-logo.svg" alt="HRVICO" style={{ height: "36px", marginBottom: "8px" }} />
          <PortalTitle>Blog CMS Admin</PortalTitle>
          <PortalSub>Sign in with your user credentials to access your dashboard</PortalSub>
        </LogoHeader>

        <Form onSubmit={formik.handleSubmit}>
          <FormDetail>
            <Label>Email Address / Username</Label>
            <InputField
              name="email"
              type="text"
              placeholder="admin@hrvico.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMsg>{formik.errors.email}</ErrorMsg>
            )}
          </FormDetail>

          <FormDetail>
            <Label>Password</Label>
            <InputField
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorMsg>{formik.errors.password}</ErrorMsg>
            )}
          </FormDetail>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }}>
                <CircularProgress size={20} sx={{ color: "#ffffff" }} />
                Signing in...
              </div>
            ) : (
              "Sign In to CMS"
            )}
          </SubmitButton>
        </Form>
      </LoginCard>
    </LoginMainContainer>
  );
};

export default Login;

const LoginMainContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  padding: 20px;
`;

const LoginCard = styled("div")`
  width: 100%;
  max-width: 440px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LogoHeader = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PortalTitle = styled("h2")`
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 4px 0;
  letter-spacing: -0.5px;
`;

const PortalSub = styled("p")`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormDetail = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled("label")`
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
`;

const InputField = styled("input")`
  height: 48px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  padding: 0 16px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const ErrorMsg = styled("p")`
  font-size: 0.8rem;
  color: #ef4444;
  margin: 2px 0 0 0;
`;

const SubmitButton = styled(Button)`
  height: 48px;
  border-radius: 10px;
  background-color: #7c3aed;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: none;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25);
  margin-top: 8px;

  &:hover {
    background-color: #6d28d9;
  }
`;
