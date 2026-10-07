import { CircularProgress, styled, Tooltip, IconButton, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  useAddNewCategoryMutation,
  useCheckSlugQuery,
} from "../features/api/categoryApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import useDarkMode from "../hooks/useDarkMode";

const AddNewCategory = () => {
  const { isDark } = useDarkMode();
  const [addNewCategory, { data, isLoading, isSuccess, error, isError }] =
    useAddNewCategoryMutation();

  const navigate = useNavigate();

  const buildFormData = (prepared) => {
    const formData = new FormData();

    Object.entries(prepared).forEach(([key, value]) => {
      if (value === null || typeof value === "undefined") return;
      if (key === "coverImage" && value instanceof File) {
        formData.append("image", value);
        return;
      }
      if (key === "coverAlt") {
        formData.append("imageAlt", value);
        return;
      }
      formData.append(key, value);
    });

    return formData;
  };

  const handleSubmit = async (values) => {
    const userToken = localStorage.getItem("authToken");
    try {
      const prepared = {
        ...values,
        slug: String(values.slug || "")
          .trim()
          .replace(/\s+/g, "-")
          .toLowerCase(),
      };
      const formData = buildFormData(prepared);
      await addNewCategory({ values: formData, token: userToken, slug: prepared.slug });
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Category name is required"),
    slug: Yup.string()
      .required("Slug is required")
      .matches(
        /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/,
        "Slug must use hyphens between words"
      ),
    mainHeading: Yup.string()
      .max(120, "Main heading too long")
      .required("Main heading is required"),
    shortDescription: Yup.string()
      .max(500, "Short description too long")
      .required("Short description is required"),
    metaTitle: Yup.string()
      .max(60, "Meta title must be <= 60 characters")
      .required("Meta title is required"),
    metaDescription: Yup.string()
      .max(120, "Meta description must be <= 120 characters")
      .required("Meta description is required"),
    metaKeywords: Yup.string().required("Meta keywords are required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      slug: "",
      mainHeading: "",
      shortDescription: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      coverAlt: "",
      coverImage: null,
      status: "Show",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const {
    values,
    handleBlur,
    handleChange,
    resetForm,
    errors,
    touched,
    setFieldValue,
  } = formik;

  const [coverPreview, setCoverPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setCoverPreview(previewUrl);
    setFieldValue("coverImage", file);
  };

  const normalizeSlug = (text) =>
    String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

  const slugRef = useRef(null);
  const [slugAvailable, setSlugAvailable] = useState(true);

  const { data: slugCheckData, isFetching: slugChecking } = useCheckSlugQuery(
    values.slug,
    {
      skip: !values.slug || values.slug.trim() === "",
    }
  );

  useEffect(() => {
    if (slugCheckData && typeof slugCheckData.available !== "undefined") {
      setSlugAvailable(Boolean(slugCheckData.available));
    }
  }, [slugCheckData]);

  useEffect(() => {
    if (!touched.slug && values.name) {
      setFieldValue("slug", normalizeSlug(values.name));
    }
  }, [values.name]);

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
    if (isSuccess && data) {
      toast.success(data?.message || "Category created successfully");
      resetForm();
      navigate("/categories");
    }
  }, [isError, error, isSuccess, data]);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      <HeaderRow>
        <div>
          <PageTitle>Add New Category</PageTitle>
          <PageSubtitle>Create a new blog category and set SEO metadata.</PageSubtitle>
        </div>
        <BackButton variant="outlined" onClick={() => navigate("/categories")}>
          <ArrowBackIcon fontSize="small" /> Back to Categories
        </BackButton>
      </HeaderRow>

      <CardContainer>
        <form onSubmit={formik.handleSubmit}>
          <SectionTitle>Basic Category Information</SectionTitle>
          <SectionSub>Category name, main heading, and brief summary.</SectionSub>

          <FormGrid>
            <FormGroup>
              <Label>Category Name *</Label>
              <InputField
                name="name"
                placeholder="e.g. HR Technology & Trends"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Category Main Heading *</Label>
              <InputField
                name="mainHeading"
                placeholder="e.g. Modern HR Tech Insights for Indian Enterprises"
                value={values.mainHeading}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.mainHeading && errors.mainHeading && <ErrorText>{errors.mainHeading}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Short Description *</Label>
              <TextArea
                name="shortDescription"
                rows={3}
                placeholder="Short description of articles under this category..."
                value={values.shortDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.shortDescription && errors.shortDescription && <ErrorText>{errors.shortDescription}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Cover Image</Label>
              <UploadCard onClick={() => document.getElementById("coverImageInput").click()}>
                {coverPreview ? (
                  <PreviewImage src={coverPreview} alt="Cover Preview" />
                ) : (
                  <UploadPlaceholder>
                    <CloudUploadOutlinedIcon sx={{ fontSize: 36, color: "#7c3aed" }} />
                    <span>Click to upload Category Cover Image</span>
                  </UploadPlaceholder>
                )}
              </UploadCard>
              <input
                type="file"
                id="coverImageInput"
                name="coverImage"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <InputField
                name="coverAlt"
                placeholder="Cover image alt text..."
                value={values.coverAlt}
                onChange={handleChange}
                style={{ marginTop: "8px" }}
              />
            </FormGroup>

            <Divider />

            <SectionTitle>SEO Information</SectionTitle>
            <SectionSub>Optimize category search metadata.</SectionSub>

            <FormGroup>
              <Label>Meta Title (max 60 chars) *</Label>
              <InputField
                name="metaTitle"
                maxLength={60}
                placeholder="Meta title..."
                value={values.metaTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaTitle && errors.metaTitle && <ErrorText>{errors.metaTitle}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Meta Description (max 120 chars) *</Label>
              <TextArea
                name="metaDescription"
                rows={2}
                maxLength={120}
                placeholder="Meta description..."
                value={values.metaDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaDescription && errors.metaDescription && <ErrorText>{errors.metaDescription}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Meta Keywords *</Label>
              <InputField
                name="metaKeywords"
                placeholder="e.g. hr, tech, software..."
                value={values.metaKeywords}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaKeywords && errors.metaKeywords && <ErrorText>{errors.metaKeywords}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>URL Slug / Permalink *</Label>
              <InputField
                name="slug"
                ref={slugRef}
                value={values.slug}
                onChange={(e) => setFieldValue("slug", e.target.value.toLowerCase())}
                onBlur={(e) => {
                  handleBlur(e);
                  setFieldValue("slug", normalizeSlug(e.target.value));
                }}
                placeholder="hr-technology"
              />
              {touched.slug && errors.slug && <ErrorText>{errors.slug}</ErrorText>}
              {!slugChecking && !slugAvailable && (
                <ErrorText>Slug already in use. Please choose another one.</ErrorText>
              )}
            </FormGroup>
          </FormGrid>

          <ButtonRow>
            <BackButton variant="outlined" onClick={() => navigate("/categories")} type="button">
              Cancel
            </BackButton>
            <PrimarySubmitButton
              type="submit"
              disabled={isLoading || !slugAvailable || slugChecking}
            >
              {isLoading ? (
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <CircularProgress size={18} sx={{ color: "#ffffff" }} />
                  Saving Category...
                </div>
              ) : (
                "Save Category"
              )}
            </PrimarySubmitButton>
          </ButtonRow>
        </form>
      </CardContainer>
    </PageContainer>
  );
};

export default AddNewCategory;

const PageContainer = styled("div")`
  padding: 32px;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  min-height: calc(100vh - 72px);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const HeaderRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

const PageTitle = styled("h1")`
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 4px 0;
  letter-spacing: -0.5px;
`;

const PageSubtitle = styled("p")`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`;

const BackButton = styled(Button)`
  color: #475569;
  border-color: #cbd5e1;
  border-radius: 10px;
  text-transform: none;
  font-weight: 600;
  padding: 8px 18px;
  display: flex;
  gap: 6px;

  &:hover {
    border-color: #94a3b8;
    background-color: #f1f5f9;
  }
`;

const CardContainer = styled("div")`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const SectionTitle = styled("h3")`
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 2px 0;
`;

const SectionSub = styled("p")`
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 20px 0;
`;

const FormGrid = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled("label")`
  font-size: 0.85rem;
  font-weight: 700;
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
  background-color: #ffffff;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const TextArea = styled("textarea")`
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  padding: 12px 16px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  font-family: inherit;
  background-color: #ffffff;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const UploadCard = styled("div")`
  height: 160px;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: #7c3aed;
    background-color: #f3e8ff;
  }
`;

const UploadPlaceholder = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
`;

const PreviewImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Divider = styled("div")`
  height: 1px;
  background-color: #e2e8f0;
  margin: 16px 0;
`;

const ErrorText = styled("p")`
  font-size: 0.8rem;
  color: #ef4444;
  margin: 2px 0 0 0;
  font-weight: 600;
`;

const ButtonRow = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 32px;
`;

const PrimarySubmitButton = styled("button")`
  height: 48px;
  padding: 0 28px;
  border-radius: 10px;
  background-color: #7c3aed;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25);
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #6d28d9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
