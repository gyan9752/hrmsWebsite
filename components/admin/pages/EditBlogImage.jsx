import { CircularProgress, Button, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  useGetImageByIdQuery,
  useUpdateImageByIdMutation,
} from "../features/api/dynamicImageApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import useDarkMode from "../hooks/useDarkMode";
import { IMAGE_END_POINT } from "../config/env";

const BASE_URL = IMAGE_END_POINT || "";

const EditBlogImage = () => {
  const { isDark } = useDarkMode();
  const { id } = useParams();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("authToken");

  const [featureImage, setFeatureImage] = useState(null);
  const [featurePreview, setFeaturePreview] = useState(null);
  const [promotion, setPromotion] = useState("Top Header");
  const [relatedLink, setRelatedLink] = useState("");
  const [heading, setHeading] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [featureAlt, setFeatureAlt] = useState("");
  const [status, setStatus] = useState("show");

  const { data: imageDetails, isError: detailsIsError, error: detailsError } =
    useGetImageByIdQuery(id, { skip: !id });

  const [updateImageById, { data: updateData, isLoading, isSuccess, error, isError }] =
    useUpdateImageByIdMutation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFeatureImage(file);
    setFeaturePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (featureImage) {
      formData.append("featureImage", featureImage);
    }
    formData.append("heading", String(heading || "").trim());
    formData.append("shortDescription", String(shortDescription || "").trim());
    formData.append("buttonText", String(buttonText || "").trim());
    formData.append("featureAlt", String(featureAlt || "").trim());
    formData.append("promotion", String(promotion || "").trim());
    formData.append("relatedLink", String(relatedLink || "").trim());
    formData.append("status", String(status || "show").trim());

    try {
      await updateImageById({
        id,
        formData,
        token: userToken,
      }).unwrap();
    } catch (err) {
      console.error("updateImageById error", err);
      toast.error(err?.data?.message || "Failed to update promotion");
    }
  };

  useEffect(() => {
    if (isError && error) {
      toast.error(error?.data?.message || "Something went wrong");
    }

    if (isSuccess && updateData) {
      toast.success(updateData.message || "Promotion updated successfully");
      navigate("/dynamic-blog-image");
    }
  }, [isError, error, isSuccess, updateData, navigate]);

  useEffect(() => {
    if (detailsIsError && detailsError) {
      toast.error(detailsError?.data?.message || "Failed to load promotion details");
    }
  }, [detailsIsError, detailsError]);

  useEffect(() => {
    if (imageDetails) {
      const data = imageDetails.data || imageDetails;
      setHeading(data.heading || data.title || "");
      setShortDescription(data.shortDescription || "");
      setButtonText(data.buttonText || "");
      setPromotion(data.promotion || data.placement || "Top Header");
      setRelatedLink(data.relatedLink || "");
      setFeatureAlt(data.featureAlt || data.altText || "");
      setStatus(data.status || "show");

      const raw = data.featureImage || data.image || data.imageUrl || null;
      if (raw) {
        setFeaturePreview(
          raw.startsWith("http")
            ? raw
            : `${BASE_URL.replace(/\/$/, "")}/${raw.replace(/^\//, "")}`
        );
      }
    }
  }, [imageDetails]);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      <HeaderRow>
        <div>
          <PageTitle>Edit Promotion</PageTitle>
          <PageSubtitle>Update promotional banner text, CTA links, placement, and images.</PageSubtitle>
        </div>
        <BackButton variant="outlined" onClick={() => navigate("/dynamic-blog-image")}>
          <ArrowBackIcon fontSize="small" /> Back to Promotions
        </BackButton>
      </HeaderRow>

      <CardContainer>
        <form onSubmit={handleSubmit}>
          <SectionTitle>Promotion Information</SectionTitle>
          <SectionSub>Banner heading, button text, placement, and target link.</SectionSub>

          <FormGrid>
            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <Label>Promotion Heading</Label>
                <InputField
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder="e.g. Special HR Automation Offer 2026"
                />
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>Button CTA Text</Label>
                <InputField
                  type="text"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="e.g. Claim Free Trial"
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Short Description / Subtitle</Label>
              <TextArea
                rows={3}
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Brief summary or description for the promotion banner..."
              />
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <Label>Placement Location *</Label>
                <SelectField
                  value={promotion}
                  onChange={(e) => setPromotion(e.target.value)}
                >
                  <option value="Top Header">Top Header</option>
                  <option value="Blog Details">Blog Details</option>
                  <option value="Sidebar">Sidebar</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Services Page">Services Page</option>
                </SelectField>
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <Label>Target / Related Link</Label>
                <InputField
                  type="text"
                  value={relatedLink}
                  onChange={(e) => setRelatedLink(e.target.value)}
                  placeholder="e.g. https://hrvico.com/pricing"
                />
              </FormGroup>

              <FormGroup style={{ width: "160px" }}>
                <Label>Status *</Label>
                <SelectField
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="show">Published</option>
                  <option value="hide">Draft</option>
                </SelectField>
              </FormGroup>
            </FormRow>

            <Divider />

            <SectionTitle>Banner Image &amp; Alt Tag</SectionTitle>
            <SectionSub>Update promotional graphic asset.</SectionSub>

            <FormGroup>
              <Label>Promotion Image</Label>
              <UploadCard onClick={() => document.getElementById("editFeatureImageInput").click()}>
                {featurePreview ? (
                  <PreviewImage src={featurePreview} alt="Promotion Preview" />
                ) : (
                  <UploadPlaceholder>
                    <CloudUploadOutlinedIcon sx={{ fontSize: 36, color: "#7c3aed" }} />
                    <span>Click or drag image file to update</span>
                  </UploadPlaceholder>
                )}
              </UploadCard>
              <input
                id="editFeatureImageInput"
                type="file"
                name="featureImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Image Alt Description Tag</Label>
              <InputField
                type="text"
                value={featureAlt}
                onChange={(e) => setFeatureAlt(e.target.value)}
                placeholder="Alt description for SEO accessibility..."
              />
            </FormGroup>

            <ButtonRow>
              <PrimarySubmitButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={22} style={{ color: "#ffffff" }} />
                ) : (
                  "Update Promotion"
                )}
              </PrimarySubmitButton>
            </ButtonRow>
          </FormGrid>
        </form>
      </CardContainer>
    </PageContainer>
  );
};

export default EditBlogImage;

/* ─── STYLED COMPONENTS (MATCHED FULL-PAGE THEME 100%) ─── */
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

const FormRow = styled("div")`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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

const UploadCard = styled("div")`
  height: 180px;
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
