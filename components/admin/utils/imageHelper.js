import { IMAGE_END_POINT } from "../config/env";

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (typeof imagePath !== "string") return imagePath;
  if (
    imagePath.startsWith("http://") ||
    imagePath.startsWith("https://") ||
    imagePath.startsWith("data:") ||
    imagePath.startsWith("blob:")
  ) {
    return imagePath;
  }
  const base = (IMAGE_END_POINT || "https://blogb.hrvico.com").replace(/\/+$/, "");
  const cleanPath = imagePath.replace(/^\/+/, "");
  return `${base}/${cleanPath}`;
};
