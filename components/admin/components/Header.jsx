import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Avatar, styled } from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";

const Header = ({ openSidebar, setOpenSidebar, dark: propDark }) => {
  const { isDark: hookDark } = useDarkMode();
  const isDark = propDark !== undefined ? propDark : hookDark;

  const userString = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const currentUser = userString ? JSON.parse(userString) : null;
  const name = currentUser?.name || "Admin User";
  const email = currentUser?.email || "admin@hrvico.com";
  const firstLetter = name.charAt(0).toUpperCase();

  const handleEvents = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <HeaderContainer dark={isDark ? 1 : 0} className="cms-header">
      <MenuOutlinedIcon
        sx={{ cursor: "pointer", color: isDark ? "#94a3b8" : "#475569" }}
        fontSize="medium"
        onClick={handleEvents}
      />

      <RightContent>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: "#7c3aed",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(124, 58, 237, 0.25)",
          }}
        >
          {firstLetter}
        </Avatar>
        <BasicDetailsSection>
          <Name dark={isDark ? 1 : 0}>{name}</Name>
          <Email dark={isDark ? 1 : 0}>{email}</Email>
        </BasicDetailsSection>
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled("div")`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: ${({ dark }) => (dark ? "#000000" : "#ffffff")};
  border-bottom: 1px solid ${({ dark }) => (dark ? "#1e2430" : "#f1f5f9")};
  box-sizing: border-box;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

const RightContent = styled("div")`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const BasicDetailsSection = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Name = styled("h4")`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ dark }) => (dark ? "#f8fafc" : "#0f172a")};
  line-height: 1.2;
  transition: color 0.3s ease;
`;

const Email = styled("p")`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ dark }) => (dark ? "#94a3b8" : "#64748b")};
  line-height: 1.2;
  transition: color 0.3s ease;
`;
