export const IMAGE_END_POINT =
  (typeof process !== "undefined" && process.env && (process.env.NEXT_PUBLIC_IMAGE_END_POINT || process.env.VITE_REACT_APP_IMAGE_END_POINT)) ||
  "https://blogb.hrvico.com";

export const API_END_POINT =
  (typeof process !== "undefined" && process.env && (process.env.NEXT_PUBLIC_END_POINT || process.env.VITE_REACT_APP_END_POINT)) ||
  "https://blogb.hrvico.com/hrms-blogs/api/";
