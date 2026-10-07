import React, { useState, useRef } from "react";
import { styled, Button } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const ImageUploader = ({ value, onChange, label, placeholder = "Drag & drop image file here or click to browse" }) => {
  const [dragActive, setDragActive] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target.result); // Base64 data URL for instant preview & persistence
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <Container>
      {label && <FormLabel>{label}</FormLabel>}

      {value ? (
        <PreviewCard>
          <ImageContainer>
            <PreviewImage
              src={value}
              alt="Uploaded Preview"
              onError={(e) => {
                e.target.src = "/assets/images/blogs_image_prev.webp";
              }}
            />
          </ImageContainer>

          <ButtonRow>
            <ReplaceBtn
              size="small"
              variant="contained"
              startIcon={<RefreshOutlinedIcon />}
              onClick={() => fileInputRef.current?.click()}
            >
              Replace Image
            </ReplaceBtn>

            <RemoveBtn
              size="small"
              variant="outlined"
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => onChange("")}
            >
              Remove Image
            </RemoveBtn>
          </ButtonRow>
        </PreviewCard>
      ) : (
        <DropzoneBox
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          active={dragActive ? 1 : 0}
        >
          <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: dragActive ? "#7c3aed" : "#94a3b8" }} />
          <DropzoneText>{placeholder}</DropzoneText>
          <DropzoneSub>Supports PNG, JPG, WEBP or GIF (Max 5MB)</DropzoneSub>

          <BrowseButton variant="outlined" size="small">
            Browse Image File
          </BrowseButton>
        </DropzoneBox>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />

      <UrlToggleRow onClick={() => setShowUrlInput(!showUrlInput)}>
        <InsertLinkOutlinedIcon fontSize="small" style={{ color: "#64748b" }} />
        <span>{showUrlInput ? "Hide image URL input" : "Or enter static image URL / asset path"}</span>
      </UrlToggleRow>

      {showUrlInput && (
        <UrlInput
          type="text"
          placeholder="/assets/images/blog_payroll_automation.webp or https://..."
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </Container>
  );
};

export default ImageUploader;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const FormLabel = styled("label")`
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
`;

const DropzoneBox = styled("div")`
  border: 2px dashed ${(props) => (props.active ? "#7c3aed" : "#cbd5e1")};
  background-color: ${(props) => (props.active ? "#f3e8ff" : "#f8fafc")};
  border-radius: 12px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7c3aed;
    background-color: #f3e8ff;
  }
`;

const DropzoneText = styled("p")`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  margin: 8px 0 2px 0;
`;

const DropzoneSub = styled("span")`
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 12px;
`;

const BrowseButton = styled(Button)`
  color: #7c3aed;
  border-color: #7c3aed;
  font-weight: 700;
  text-transform: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 4px 14px;

  &:hover {
    border-color: #6d28d9;
    background-color: #f3e8ff;
  }
`;

const PreviewCard = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

const ImageContainer = styled("div")`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  background-color: #f8fafc;
`;

const PreviewImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonRow = styled("div")`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ReplaceBtn = styled(Button)`
  flex: 1;
  background-color: #7c3aed;
  color: #ffffff;
  font-weight: 700;
  text-transform: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 6px 12px;

  &:hover {
    background-color: #6d28d9;
  }
`;

const RemoveBtn = styled(Button)`
  flex: 1;
  color: #ef4444;
  border-color: #fca5a5;
  font-weight: 700;
  text-transform: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 6px 12px;

  &:hover {
    border-color: #ef4444;
    background-color: #fef2f2;
  }
`;

const UrlToggleRow = styled("div")`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: #64748b;
  cursor: pointer;
  margin-top: 2px;
  user-select: none;

  &:hover {
    color: #ff5a1f;
  }
`;

const UrlInput = styled("input")`
  height: 38px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding: 0 12px;
  font-size: 0.85rem;
  color: #0f172a;
  outline: none;

  &:focus {
    border-color: #ff5a1f;
    box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.1);
  }
`;
