import React, { useEffect } from "react";
import { useGetSingleBlogBySlugQuery } from "../features/api/blogApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { CircularProgress, styled, Tooltip } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DOMPurify from "dompurify";

import { IMAGE_END_POINT } from "../config/env";

const BASE_URL = IMAGE_END_POINT;

const ViewBlog = () => {
  const { slug } = useParams();
  const { data, isLoading, isError, error } = useGetSingleBlogBySlugQuery(slug);


  useEffect(() => {
    if (error && isError) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  }, [error, isError]);

  if (isLoading) {
    return (
      <div className="loader">
        <CircularProgress size={50} sx={{ color: "black" }} />
      </div>
    );
  }

  // ✅ CLEAN CONTENT (REMOVES EXTRA GAPS)
  const cleanContent = DOMPurify.sanitize(data?.content || "")
    .replace(/<p><br><\/p>/g, "")
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/<br>\s*<br>/g, "<br>");

  return (
    <BlogMainContainer>
      <Blog>
        <Tooltip title="Back to blogs">
          <a style={{ textDecoration: "none" }} href="/dashboard">
            Blog /
          </a>
        </Tooltip>{" "}
        <BlogSpan>{data?.title}</BlogSpan>
      </Blog>

      {data?.featureImage && (
        <BlogImage src={`${BASE_URL}${data?.featureImage}`} alt={data?.title} />
      )}

      <BlogSectionOne>
        <BlogSectionOneContainer>
          <CalendarMonthOutlinedIcon />
          <CratedAt>{new Date(data?.createdAt).toLocaleDateString()}</CratedAt>
        </BlogSectionOneContainer>

        <BlogSectionOneContainer>
          <PersonOutlineOutlinedIcon />
          <AuthorName>{data?.author}</AuthorName>
        </BlogSectionOneContainer>

        <BlogSectionOneContainer>
          <AutoStoriesOutlinedIcon />
          <Category>{data?.category}</Category>
        </BlogSectionOneContainer>

        <BlogSectionOneContainer>
          <VisibilityOutlinedIcon />
          <AuthorName>{Number(data?.viewCount || 0).toLocaleString()} views</AuthorName>
        </BlogSectionOneContainer>
      </BlogSectionOne>

      <BlogDetails>
        {data?.coverImage && (
          <CoverImage src={`${BASE_URL}${data?.coverImage}`} alt={`${data?.title} cover`} />
        )}

        <DetailsGrid>
          <DetailItem>
            <DetailLabel>Slug:</DetailLabel>
            <DetailValue>{data?.slug}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Tags:</DetailLabel>
            <DetailValue>{Array.isArray(data?.tags) ? data.tags.join(", ") : data?.tags}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Status:</DetailLabel>
            <DetailValue>{data?.status}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Meta Title:</DetailLabel>
            <DetailValue>{data?.metaTitle}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Meta Description:</DetailLabel>
            <DetailValue>{data?.metaDescription}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Meta Keywords:</DetailLabel>
            <DetailValue>{Array.isArray(data?.metaKeywords) ? data.metaKeywords.join(", ") : data?.metaKeywords}</DetailValue>
          </DetailItem>

          <DetailItem>
            <DetailLabel>Created By:</DetailLabel>
            <DetailValue>{data?.createdBy || data?.author}</DetailValue>
          </DetailItem>
        </DetailsGrid>
      </BlogDetails>

      <BlogContent>
        <Content
          dangerouslySetInnerHTML={{
            __html: cleanContent,
          }}
        />
      </BlogContent>
    </BlogMainContainer>
  );
};

export default ViewBlog;

const BlogMainContainer = styled("div")`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Blog = styled("p")`
  font: 600 17px Montserrat;
  color: blue;
`;

const BlogSpan = styled("span")`
  font: 400 16px Montserrat;
  color: gray;
`;

const CratedAt = styled("p")`
  font: 400 16px Montserrat;
  color: gray;
`;

const AuthorName = styled("p")`
  font: 400 16px Montserrat;
  color: gray;
`;

const Category = styled("p")`
  font: 400 16px Montserrat;
  color: gray;
`;

const Content = styled("div")`
  font: 400 16px Montserrat;
  color: rgb(124, 112, 112);
  line-height: 1.4;
  word-spacing: normal;
  letter-spacing: normal;

  p {
    margin: 4px 0;
  }

  br {
    line-height: 0.5;
  }

  ol,
  ul {
    padding-left: 20px;
    margin: 6px 0;
  }

  li {
    margin: 4px 0;
  }

  img {
    max-width: 100%;
  }
`;

const BlogImage = styled("img")`
  width: 100%;
  height: 500px;
  border-radius: 6px;
`;

const BlogSectionOne = styled("div")`
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BlogContent = styled("div")`
  width: 90%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BlogSectionOneContainer = styled("div")`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BlogDetails = styled("div")`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
`;

const CoverImage = styled("img")`
  width: 220px;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
`;

const DetailsGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 20px;
  width: 100%;
`;

const DetailItem = styled("div")`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled("span")`
  font: 600 13px Montserrat;
  color: gray;
`;

const DetailValue = styled("span")`
  font: 400 14px Montserrat;
  color: rgb(80, 80, 80);
`;
