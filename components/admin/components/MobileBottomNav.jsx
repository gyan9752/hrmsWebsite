import React from "react";
import { styled, Paper } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();
  const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = userStr ? JSON.parse(userStr) : null;
  const isAuthor = (user?.role || "admin").toLowerCase() === "author";

  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "")) {
      return true;
    }
    return location.pathname.endsWith(path);
  };

  return (
    <NavWrapper>
      <NavItem to="." end className={isActive("/") ? "active" : ""}>
        <ArticleOutlinedIcon fontSize="small" />
        <span>Blogs</span>
      </NavItem>

      <NavItem to="categories" className={isActive("categories") ? "active" : ""}>
        <FolderOutlinedIcon fontSize="small" />
        <span>Categories</span>
      </NavItem>

      {!isAuthor && (
        <>
          <NavItem to="dynamic-blog-image" className={isActive("dynamic-blog-image") ? "active" : ""}>
            <ImageOutlinedIcon fontSize="small" />
            <span>Promotions</span>
          </NavItem>

          <NavItem to="users" className={isActive("users") ? "active" : ""}>
            <PeopleOutlinedIcon fontSize="small" />
            <span>Users</span>
          </NavItem>
        </>
      )}

      <NavItem to="settings" className={isActive("settings") ? "active" : ""}>
        <SettingsOutlinedIcon fontSize="small" />
        <span>Settings</span>
      </NavItem>
    </NavWrapper>
  );
};

export default MobileBottomNav;

const NavWrapper = styled(Paper)`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  z-index: 1100;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 600;
  flex: 1;
  height: 100%;
  transition: color 0.2s ease;

  &.active {
    color: #7c3aed;
    font-weight: 800;
  }
`;
