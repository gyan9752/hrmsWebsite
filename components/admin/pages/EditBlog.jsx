import { CircularProgress, IconButton, styled, Tooltip, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useGetAllVisibleCategoriesListQuery } from "../features/api/categoryApi";
import { useFormik } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import JoditEditor from "jodit-react";
import { Jodit } from "jodit";
import * as Yup from "yup";
import useDarkMode from "../hooks/useDarkMode";

import {
  useGetSingleBlogBySlugQuery,
  useUpdateBlogByIdMutation,
} from "../features/api/blogApi";
import { useCheckSlugQuery } from "../features/api/blogApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_END_POINT } from "../config/env";

const BASE_URL = IMAGE_END_POINT;

const editorConfig = {
  readonly: false,
  enter: "p",
  shiftEnter: "br",
  useSplitMode: true,
  cleanHTML: { fillEmptyParagraph: true },
  popup: {
    a: Jodit.atom(
      Jodit.defaultOptions.popup.a.filter(
        (b) => b !== "brush" && b !== "file"
      )
    ),
  },
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
  defaultActionOnPaste: "insert_as_html",
  link: {
    noFollowCheckbox: false,
    openInNewTabCheckbox: false,
    modeClassName: "",
  },
  controls: {
    paragraph: {
      list: Jodit.atom({
        p: 'Paragraph',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
        h5: 'Heading 5',
        h6: 'Heading 6'
      })
    },
    ul: {
      list: Jodit.atom({
        default: 'Default',
        circle: 'Circle',
        square: 'Square'
      })
    },
    ol: {
      list: Jodit.atom({
        default: 'Default',
        'lower-alpha': 'Lower Alpha',
        'lower-roman': 'Lower Roman',
        'upper-alpha': 'Upper Alpha',
        'upper-roman': 'Upper Roman'
      })
    }
  },
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "ul",
    "ol",
    "|",
    "paragraph",
    "|",
    "link",
    "align",
    "undo",
    "redo",
  ],
  removeButtons: [
    "image",
    "video",
    "table",
    "source",
    "fullsize",
    "preview",
    "print",
    "findandreplace",
    "selectall",
    "copyformat",
    "hr",
    "eraser",
    "brush",
  ],
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  toolbarAdaptive: false,
  editorCssClass: "jodit-editor",
  height: 320,
  minHeight: 280,
  maxHeight: 500,
};

const EditBlog = () => {
  const { isDark } = useDarkMode();
  const [slug, setSlug] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState("");
  const editor = useRef(null);
  const slugRef = useRef(null);

  const { slug: singleBlogSlug } = useParams();
  const navigate = useNavigate();

  const [
    updateBlogById,
    { data: updateBlogData, isLoading, isSuccess, error, isError },
  ] = useUpdateBlogByIdMutation();

  const { data: getBlogBySlugData } = useGetSingleBlogBySlugQuery(singleBlogSlug);

  const { data: slugCheckData } = useCheckSlugQuery(
    { slug: slug, id: getBlogBySlugData?._id },
    { skip: !slug || String(slug).trim() === "" }
  );

  const { data: categoriesData } = useGetAllVisibleCategoriesListQuery();

  const handleSubmit = async (values) => {
    const userToken = localStorage.getItem("authToken");
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("shortDescription", values.shortDescription);
    formData.append("slug", slug);
    formData.append("content", values.content);
    formData.append("categoryId", values.category);
    formData.append("status", values.status || "show");
    formData.append("metaTitle", values.metaTitle || "");
    formData.append("metaDescription", values.metaDescription || "");
    formData.append("metaKeywords", values.metaKeywords || "");
    formData.append("coverAlt", values.coverAlt || "");
    formData.append("featureAlt", values.featureAlt || "");

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    if (featureImage) {
      formData.append("featureImage", featureImage);
    }

    try {
      await updateBlogById({
        id: getBlogBySlugData?._id,
        formData,
        token: userToken,
      }).unwrap();
    } catch (err) {
      console.error("updateBlogById error", err);
      toast.error(err?.data?.message || err?.message || "Update failed");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    if (!file) return;
    if (name === "featureImage") {
      setFeatureImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else if (name === "coverImage") {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      shortDescription: "",
      slug: "",
      category: "",
      status: "show",
      coverAlt: "",
      featureAlt: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .min(3, "Blog Title must be at least 3 characters"),
      shortDescription: Yup.string().required("Short description is required"),
      content: Yup.string()
        .required("Content is required")
        .min(8, "Content must be at least 8 characters"),
      category: Yup.string().required("Category is required"),
      metaTitle: Yup.string().max(60, "Meta title must be <= 60 characters").nullable(),
      metaDescription: Yup.string().max(120, "Meta description must be <= 120 characters").nullable(),
      metaKeywords: Yup.string().nullable(),
    }),
    onSubmit: handleSubmit,
  });

  const { values, handleBlur, handleChange, resetForm, setFieldValue, errors, touched } = formik;

  const normalizeSlug = (text) =>
    String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
    if (isSuccess && updateBlogData) {
      toast.success(updateBlogData?.message || "Your blog has been updated");
      resetForm();
      navigate("/");
    }
  }, [isError, error, isSuccess, updateBlogData]);

  useEffect(() => {
    if (getBlogBySlugData) {
      const deriveShort = (b) => {
        if (!b) return "";
        if (b.shortDescription) return b.shortDescription;
        if (b.metaDescription) return b.metaDescription;
        const tmp = String(b.content || "").replace(/<[^>]*>/g, "").trim();
        return tmp.length > 160 ? tmp.slice(0, 157) + "..." : tmp;
      };

      formik.setValues({
        title: getBlogBySlugData?.title || "",
        shortDescription: deriveShort(getBlogBySlugData),
        content: getBlogBySlugData?.content || "",
        slug: getBlogBySlugData?.slug || "",
        category: getBlogBySlugData?.categoryId || getBlogBySlugData?.category || "",
        status: getBlogBySlugData?.status || "show",
        metaTitle: getBlogBySlugData?.metaTitle || "",
        metaDescription: getBlogBySlugData?.metaDescription || "",
        metaKeywords: Array.isArray(getBlogBySlugData?.metaKeywords)
          ? getBlogBySlugData.metaKeywords.join(", ")
          : getBlogBySlugData?.metaKeywords || "",
        coverAlt: getBlogBySlugData?.coverAlt || "",
        featureAlt: getBlogBySlugData?.featureAlt || "",
      });

      setSlug(getBlogBySlugData?.slug || "");

      if (getBlogBySlugData?.featureImage) {
        const raw = getBlogBySlugData.featureImage;
        setPreviewImage(raw.startsWith("http") ? raw : `${BASE_URL.replace(/\/$/, "")}/${raw.replace(/^\//, "")}`);
      }

      if (getBlogBySlugData?.coverImage) {
        const raw = getBlogBySlugData.coverImage;
        setCoverPreview(raw.startsWith("http") ? raw : `${BASE_URL.replace(/\/$/, "")}/${raw.replace(/^\//, "")}`);
      }
    }
  }, [getBlogBySlugData]);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      <HeaderRow>
        <div>
          <PageTitle>Edit Blog Post</PageTitle>
          <PageSubtitle>Update blog information, images, and SEO configuration.</PageSubtitle>
        </div>
        <BackButton variant="outlined" onClick={() => navigate("/")}>
          <ArrowBackIcon fontSize="small" /> Back to Blogs
        </BackButton>
      </HeaderRow>

      <CardContainer>
        <form onSubmit={formik.handleSubmit}>
          <SectionTitle>Basic Blog Information</SectionTitle>
          <SectionSub>Update title, description, and rich content.</SectionSub>

          <FormGrid>
            <FormGroup>
              <Label>Blog Title *</Label>
              <InputField
                name="title"
                placeholder="Enter title..."
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.title && errors.title && <ErrorText>{errors.title}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Short Description *</Label>
              <TextArea
                name="shortDescription"
                rows={3}
                placeholder="Enter short description..."
                value={values.shortDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.shortDescription && errors.shortDescription && <ErrorText>{errors.shortDescription}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Blog Content (Rich Text Editor) *</Label>
              <EditorWrapper>
                <JoditEditor
                  ref={editor}
                  value={values.content}
                  config={editorConfig}
                  onBlur={(newContent) => setFieldValue("content", newContent)}
                  onChange={() => {}}
                />
              </EditorWrapper>
              {touched.content && errors.content && <ErrorText>{errors.content}</ErrorText>}
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <Label>Blog Category *</Label>
                <SelectField
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" disabled>Select Category</option>
                  {categoriesData?.data?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </SelectField>
                {touched.category && errors.category && <ErrorText>{errors.category}</ErrorText>}
              </FormGroup>

              <FormGroup style={{ width: "160px" }}>
                <Label>Status *</Label>
                <SelectField
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                >
                  <option value="show">Published</option>
                  <option value="hide">Draft</option>
                </SelectField>
              </FormGroup>
            </FormRow>

            <Divider />

            <SectionTitle>Featured Images & Alt Tags</SectionTitle>
            <SectionSub>Update cover and thumbnail preview images.</SectionSub>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <Label>Cover Image</Label>
                <UploadCard onClick={() => document.getElementById("coverImageInput").click()}>
                  {coverPreview ? (
                    <PreviewImage src={coverPreview} alt="Cover Preview" />
                  ) : (
                    <UploadPlaceholder>
                      <CloudUploadOutlinedIcon sx={{ fontSize: 36, color: "#7c3aed" }} />
                      <span>Click to replace Cover Image</span>
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

              <FormGroup style={{ flex: 1 }}>
                <Label>Thumbnail Image</Label>
                <UploadCard onClick={() => document.getElementById("featureImageInput").click()}>
                  {previewImage ? (
                    <PreviewImage src={previewImage} alt="Thumbnail Preview" />
                  ) : (
                    <UploadPlaceholder>
                      <CloudUploadOutlinedIcon sx={{ fontSize: 36, color: "#ff5a1f" }} />
                      <span>Click to replace Thumbnail Image</span>
                    </UploadPlaceholder>
                  )}
                </UploadCard>
                <input
                  type="file"
                  id="featureImageInput"
                  name="featureImage"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <InputField
                  name="featureAlt"
                  placeholder="Thumbnail image alt text..."
                  value={values.featureAlt}
                  onChange={handleChange}
                  style={{ marginTop: "8px" }}
                />
              </FormGroup>
            </FormRow>

            <Divider />

            <SectionTitle>SEO & Search Engine Optimization</SectionTitle>
            <SectionSub>Update meta titles, descriptions, and URL slug.</SectionSub>

            <FormGroup>
              <Label>Meta Title (max 60 chars)</Label>
              <InputField
                name="metaTitle"
                maxLength={60}
                placeholder="Meta title..."
                value={values.metaTitle}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Meta Description (max 120 chars)</Label>
              <TextArea
                name="metaDescription"
                rows={2}
                maxLength={120}
                placeholder="Meta description..."
                value={values.metaDescription}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Meta Keywords (Comma separated)</Label>
              <InputField
                name="metaKeywords"
                placeholder="Keywords..."
                value={values.metaKeywords}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>URL Slug / Permalink</Label>
              <InputField
                name="slug"
                ref={slugRef}
                value={slug}
                onChange={(e) => {
                  const val = e.target.value;
                  setSlug(val);
                  setFieldValue("slug", val);
                }}
                onBlur={(e) => {
                  const normalized = normalizeSlug(e.target.value);
                  setSlug(normalized);
                  setFieldValue("slug", normalized);
                }}
                placeholder="url-slug"
              />
              {slugCheckData && slugCheckData.available === false && (
                <ErrorText>Slug already in use, please choose another.</ErrorText>
              )}
            </FormGroup>
          </FormGrid>

          <ButtonRow>
            <BackButton variant="outlined" onClick={() => navigate("/")} type="button">
              Cancel
            </BackButton>
            <PrimarySubmitButton
              type="submit"
              disabled={isLoading || (slugCheckData && slugCheckData.available === false)}
            >
              {isLoading ? (
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <CircularProgress size={18} sx={{ color: "#ffffff" }} />
                  Updating Blog...
                </div>
              ) : (
                "Update Blog Post"
              )}
            </PrimarySubmitButton>
          </ButtonRow>
        </form>
      </CardContainer>
    </PageContainer>
  );
};

export default EditBlog;

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

const FormRow = styled("div")`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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

const SelectField = styled("select")`
  height: 48px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  padding: 0 16px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;

  &:focus {
    border-color: #7c3aed;
  }
`;

const EditorWrapper = styled("div")`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #cbd5e1;

  .jodit-wysiwyg a,
  .jodit-container a,
  .jodit-workplace a,
  .jodit-wysiwyg p a,
  a {
    color: #2563eb !important;
    text-decoration: underline !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    pointer-events: auto !important;
  }

  .jodit-wysiwyg a:hover,
  .jodit-container a:hover,
  .jodit-workplace a:hover,
  a:hover {
    color: #1d4ed8 !important;
    text-decoration: underline !important;
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
