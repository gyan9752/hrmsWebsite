import { CircularProgress, IconButton, styled, Tooltip } from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useAddNewUserMutation } from "../features/api/userApi";

const AddUser = () => {
  const [userImage, setUserImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const [addNewUser, { isLoading }] = useAddNewUserMutation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUserImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[6-9]\d{9}$/, "Phone number must be exactly 10 digits starting with 6, 7, 8, or 9"),
    gender: Yup.string().required("Gender is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "male",
      role: "author",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const token = localStorage.getItem("authToken");
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("gender", values.gender);
      formData.append("role", values.role);
      formData.append("password", values.password);

      if (userImage) {
        formData.append("image", userImage);
      }

      try {
        const res = await addNewUser({ formData, token }).unwrap();
        toast.success(res?.message || "User added successfully");
        navigate("/dashboard/users");
      } catch (err) {
        console.error("addNewUser error:", err);
        toast.error(err?.data?.message || err?.message || "Failed to add user");
      }
    },
  });

  const { values, handleBlur, handleChange, errors, touched } = formik;

  return (
    <AddUserMainContainer>
      <FirstContainer>
        Add User Information
        <Tooltip title="Back to users list">
          <IconButton onClick={() => navigate("/dashboard/users")}>
            <ReplyAllOutlinedIcon />
          </IconButton>
        </Tooltip>
      </FirstContainer>

      <FormCard>
        <div>
          <CardTitle>Basic User Details</CardTitle>
          <CardSubTitle>
            Fill in the user details below. Click save when complete.
          </CardSubTitle>
        </div>

        <UserForm onSubmit={formik.handleSubmit}>
          <FormSection>
            <Label htmlFor="name">Name*</Label>
            <InputField
              type="text"
              id="name"
              name="name"
              placeholder="Enter full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </FormSection>

          <FormSection>
            <Label htmlFor="email">Email*</Label>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </FormSection>

          <FormSection>
            <Label htmlFor="password">Password*</Label>
            <InputField
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </FormSection>

          <FormSection>
            <Label htmlFor="phone">Phone No.*</Label>
            <InputField
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </FormSection>

          <FormRow>
            <FormSection style={{ flex: 1 }}>
              <Label htmlFor="gender">Gender*</Label>
              <SelectField
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </SelectField>
              {touched.gender && errors.gender && (
                <ErrorMessage>{errors.gender}</ErrorMessage>
              )}
            </FormSection>

            <FormSection style={{ flex: 1 }}>
              <Label htmlFor="role">Role*</Label>
              <SelectField
                id="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="admin">admin</option>
                <option value="author">author</option>
              </SelectField>
              {touched.role && errors.role && (
                <ErrorMessage>{errors.role}</ErrorMessage>
              )}
            </FormSection>
          </FormRow>

          <FormSection>
            <Label>Profile Image</Label>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "2px dashed #999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                overflow: "hidden",
                backgroundColor: "#f9f9f9",
              }}
              onClick={() => document.getElementById("userImageInput").click()}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ textAlign: "center", color: "#666" }}>
                  <PersonOutlineIcon style={{ fontSize: 32 }} />
                  <div style={{ fontSize: "11px" }}>Upload Photo</div>
                </div>
              )}
            </div>
            <input
              type="file"
              id="userImageInput"
              name="image"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </FormSection>

          <SaveButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <CircularProgress size={18} sx={{ color: "white", mr: 1 }} />
                Saving...
              </>
            ) : (
              "Save User"
            )}
          </SaveButton>
        </UserForm>
      </FormCard>
    </AddUserMainContainer>
  );
};

export default AddUser;

const AddUserMainContainer = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const FirstContainer = styled("h2")`
  font: 600 24px Montserrat;
  color: rgb(52, 49, 49);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormCard = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const CardTitle = styled("h3")`
  font: 600 18px Montserrat;
  color: rgb(52, 49, 49);
`;

const CardSubTitle = styled("p")`
  font: 500 14px Montserrat;
  color: rgb(100, 100, 100);
`;

const UserForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormRow = styled("div")`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled("label")`
  font: 600 16px Montserrat;
  color: rgb(96, 85, 85);
`;

const InputField = styled("input")`
  height: 55px;
  border-radius: 12px;
  border: 1px solid black;
  padding-left: 20px;
  font: 600 14px Montserrat;
  color: rgb(60, 60, 60);

  &:focus {
    outline: none;
  }
`;

const SelectField = styled("select")`
  height: 55px;
  border-radius: 12px;
  border: 1px solid black;
  padding-left: 20px;
  padding-right: 20px;
  font: 600 14px Montserrat;
  color: rgb(60, 60, 60);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled("div")`
  color: red;
  font: 500 12px Montserrat;
`;

const SaveButton = styled("button")`
  height: 55px;
  border-radius: 12px;
  border: 1px solid black;
  font: 600 15px Montserrat;
  color: rgb(251, 248, 248);
  background-color: black;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #feaf00;
    color: black;
    border: none;
  }

  &:focus {
    outline: none;
  }
`;
