import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileBottomNav from "./MobileBottomNav";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "@mui/material";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const syncTheme = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms_settings");
      if (saved) {
        const settings = JSON.parse(saved);
        const darkModeOn = settings.darkMode || false;
        setIsDark(darkModeOn);
        if (darkModeOn) {
          document.body.classList.add("dark-cms-theme");
        } else {
          document.body.classList.remove("dark-cms-theme");
        }
        if (settings.compactTables) {
          document.body.classList.add("compact-table");
        } else {
          document.body.classList.remove("compact-table");
        }
      }
    }
  };

  useEffect(() => {
    syncTheme();

    window.addEventListener("cms_settings_changed", syncTheme);
    return () => window.removeEventListener("cms_settings_changed", syncTheme);
  }, []);

  // Re-sync on route location change
  useEffect(() => {
    syncTheme();
  }, [location.pathname]);

  return (
    <DashboardMainContainer dark={isDark ? 1 : 0} className="cms-dashboard-container">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <ContentWrapper dark={isDark ? 1 : 0} className="cms-content-wrapper">
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} dark={isDark} />
        <OutletContainer dark={isDark ? 1 : 0} className="cms-outlet-container">
          <Outlet />
        </OutletContainer>
        <MobileBottomNav />
      </ContentWrapper>
    </DashboardMainContainer>
  );
};

export default Dashboard;

const DashboardMainContainer = styled("div")`
  display: flex;
  height: auto;
  min-height: 100vh;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  transition: background-color 0.3s ease;
`;

const ContentWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  transition: background-color 0.3s ease;
`;

const OutletContainer = styled("div")`
  flex: 1;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`;
