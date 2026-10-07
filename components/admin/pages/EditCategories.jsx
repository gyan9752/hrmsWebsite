import { CircularProgress, IconButton, styled, Tooltip, Button } from "@mui/material";
import React, { useEffect, useRef, useState, useMemo } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import useDarkMode from "../hooks/useDarkMode";

import {
  useGetCategoryByIdQuery,
  useUpdateCategiryByIdMutation,
  useCheckSlugQuery,
} from "../features/api/categoryApi";

import { IMAGE_END_POINT } from "../config/env";

const BASE_URL = IMAGE_END_POINT || "";

const EditCategories = () => {
  const { isDark } = useDarkMode();
  const { id } = useParams();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("authToken");

  const [updateCategiryById, { data, isLoading, isSuccess, error, isError }] =
    useUpdateCategiryByIdMutation();

  const {
    data: categoryDetails,
    isError: categoryDetailsIsError,
    error: categoryDetailsError,
  } = useGetCategoryByIdQuery({ id, token: userToken });

  const [coverPreview, setCoverPreview] = useState(null);

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
    try {
      const prepared = {
        ...values,
        slug: String(values.slug || "")
          .trim()
          .replace(/\s+/g, "-")
          .toLowerCase(),
      };
      const formData = buildFormData(prepared);
      await updateCategiryById({
        values: formData,
        token: userToken,
        slug: prepared.slug,
      }).unwrap();
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || "Category update failed");
    }
  };

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
      status: "show",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    setFieldValue,
    setValues,
  } = formik;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setCoverPreview(previewUrl);
    setFieldValue("coverImage", file);
  };

  function normalizeSlug(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  const normalizedSlug = useMemo(
    () => normalizeSlug(values.slug || ""),
    [values.slug]
  );

  const skipSlugCheck =
    !normalizedSlug ||
    (categoryDetails?.data?.slug &&
      categoryDetails.data.slug === normalizedSlug);

  const { data: slugCheckData, isFetching: slugChecking } =
    useCheckSlugQuery(normalizedSlug, { skip: skipSlugCheck });

  const [slugAvailable, setSlugAvailable] = useState(true);

  useEffect(() => {
    if (slugCheckData && typeof slugCheckData.available !== "undefined") {
      setSlugAvailable(Boolean(slugCheckData.available));
    } else if (skipSlugCheck) {
      setSlugAvailable(true);
    }
  }, [slugCheckData, skipSlugCheck]);

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
    if (isSuccess && data) {
      toast.success(data?.message || "Category updated successfully");
      navigate("/categories");
    }
  }, [isError, error, isSuccess, data, navigate]);

  useEffect(() => {
    if (categoryDetailsIsError && categoryDetailsError) {
      toast.error(
        categoryDetailsError?.data?.message || "Failed to load category details"
      );
    }
  }, [categoryDetailsIsError, categoryDetailsError]);

  useEffect(() => {
    if (categoryDetails?.data) {
      const cat = categoryDetails.data;
      setValues({
        name: cat.name || "",
        slug: cat.slug || "",
        mainHeading: cat.mainHeading || "",
        shortDescription: cat.shortDescription || "",
        metaTitle: cat.metaTitle || "",
        metaDescription: cat.metaDescription || "",
        metaKeywords: Array.isArray(cat.metaKeywords)
          ? cat.metaKeywords.join(", ")
          : cat.metaKeywords || "",
        coverAlt: cat.imageAlt || cat.coverAlt || "",
        coverImage: null,
        status: cat.status || "show",
      });

      const rawImagePath =
        cat.image ||
        cat.imageUrl ||
        cat.coverImage ||
        cat.coverImageUrl ||
        null;

      const imgUrl = rawImagePath
        ? rawImagePath.startsWith("http")
          ? rawImagePath
          : `${BASE_URL}${rawImagePath}`
        : null;

      setCoverPreview(imgUrl);
    }
  }, [categoryDetails, setValues]);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      <HeaderRow>
        <div>
          <PageTitle>Edit Category</PageTitle>
          <PageSubtitle>Update category details, images, and SEO configuration.</PageSubtitle>
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
              {touched.mainHeading && errors.mainHeading && (
                <ErrorText>{errors.mainHeading}</ErrorText>
              )}
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
              {touched.shortDescription && errors.shortDescription && (
                <ErrorText>{errors.shortDescription}</ErrorText>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Cover Image</Label>
              <UploadCard onClick={() => document.getElementById("coverImageInput").click()}>
                {coverPreview ? (
                  <PreviewImage src={coverPreview} alt="Cover Preview" />
                ) : (
                  <UploadPlaceholder>
                    <CloudUploadOutlinedIcon sx={{ fontSize: 32, color: "#7c3aed" }} />
                    <span>Click or drag image to upload</span>
                  </UploadPlaceholder>
                )}
              </UploadCard>
              <input
                type="file"
                id="coverImageInput"
                style={{ display: "none" }}
                name="coverImage"
                accept="image/*"
                onChange={handleFileChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Cover Image Alt Tag</Label>
              <InputField
                name="coverAlt"
                placeholder="Image alt description..."
                value={values.coverAlt}
                onChange={handleChange}
              />
            </FormGroup>

            <Divider />

            <SectionTitle>SEO &amp; URL Settings</SectionTitle>
            <SectionSub>Manage category slug, meta title, description, and keywords.</SectionSub>

            <FormGroup>
              <Label>Slug / URL *</Label>
              <InputField
                name="slug"
                placeholder="category-url-slug"
                value={values.slug}
                onChange={(e) => {
                  setFieldValue("slug", e.target.value);
                }}
                onBlur={handleBlur}
              />
              {slugChecking && (
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "2px 0 0" }}>
                  Checking slug availability...
                </p>
              )}
              {!slugChecking && !slugAvailable && (
                <ErrorText>This slug is already taken. Please enter a unique slug.</ErrorText>
              )}
              {touched.slug && errors.slug && <ErrorText>{errors.slug}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Meta Title * (Max 60 chars)</Label>
              <InputField
                name="metaTitle"
                maxLength={60}
                placeholder="Meta title for Google search..."
                value={values.metaTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaTitle && errors.metaTitle && (
                <ErrorText>{errors.metaTitle}</ErrorText>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Meta Description * (Max 120 chars)</Label>
              <TextArea
                name="metaDescription"
                maxLength={120}
                rows={2}
                placeholder="Meta description..."
                value={values.metaDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaDescription && errors.metaDescription && (
                <ErrorText>{errors.metaDescription}</ErrorText>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Meta Keywords * (Comma Separated)</Label>
              <InputField
                name="metaKeywords"
                placeholder="e.g. HR tech, payroll, attendance"
                value={values.metaKeywords}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.metaKeywords && errors.metaKeywords && (
                <ErrorText>{errors.metaKeywords}</ErrorText>
              )}
            </FormGroup>

            <ButtonRow>
              <PrimarySubmitButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={22} style={{ color: "#ffffff" }} />
                ) : (
                  "Update Category"
                )}
              </PrimarySubmitButton>
            </ButtonRow>
          </FormGrid>
        </form>
      </CardContainer>
    </PageContainer>
  );
};

export default EditCategories;

/* ─── STYLED COMPONENTS (MATCHED 100% WITH ADD NEW CATEGORY) ─── */
const PageContainer = styled("div")`
  padding: 32px 24px;
  background-color: ${(props) => (props.dark ? "#0f172a" : "#f8fafc")};
  min-height: 100vh;
`;

const HeaderRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PageTitle = styled("h1")`
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
`;

const PageSubtitle = styled("p")`
  font-size: 0.9rem;
  color: #64748b;
  margin: 4px 0 0 0;
`;

const BackButton = styled(Button)`
  border-color: #cbd5e1;
  color: #475569;
  font-weight: 600;
  text-transform: none;
  border-radius: 10px;

  &:hover {
    border-color: #94a3b8;
    background-color: #f1f5f9;
  }
`;

const CardContainer = styled("div")`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  width: 100%;
`;

const SectionTitle = styled("h2")`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
`;

const SectionSub = styled("p")`
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 24px 0;
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
