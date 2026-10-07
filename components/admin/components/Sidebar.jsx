import React, { useEffect, useState } from "react";
import {
  Drawer,
  styled,
  useMediaQuery,
  Button,
  Dialog,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WestIcon from "@mui/icons-material/West";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";
import toast from "react-hot-toast";

const dashboardItems = [
  {
    title: "Blog",
    icon: <DescriptionOutlinedIcon fontSize="small" />,
    navigate: ".",
  },
  {
    title: "Categories",
    icon: <CategoryOutlinedIcon fontSize="small" />,
    navigate: "categories",
  },
  {
    title: "Promotions",
    icon: <CollectionsOutlinedIcon fontSize="small" />,
    navigate: "dynamic-blog-image",
    adminOnly: true,
  },
  {
    title: "Users",
    icon: <PeopleOutlineIcon fontSize="small" />,
    navigate: "users",
    adminOnly: true,
  },
  {
    title: "Settings",
    icon: <SettingsOutlinedIcon fontSize="small" />,
    navigate: "settings",
  },
];

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [, { data, isSuccess, isError, error }] = useLogoutMutation();
  const navigate = useNavigate();
  const [openConfirmLogout, setOpenConfirmLogout] = useState(false);

  const userString = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const currentUser = userString ? JSON.parse(userString) : null;
  const isAuthor = (currentUser?.role || "admin").toLowerCase() === "author";

  const visibleItems = dashboardItems.filter((item) => {
    if (isAuthor && item.adminOnly) {
      return false;
    }
    return true;
  });

  const handleDelete = async () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    if (isError && error) toast.error(error?.data?.message);
    if (isSuccess && data) toast.success(data?.message || "Logged out successfully");
  }, [isError, error, isSuccess, data]);

  return (
    <>
      <DrawerSidebar
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        sx={{
          width: openSidebar ? 240 : 68,
          flexShrink: 0,
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "& .MuiDrawer-paper": {
            width: openSidebar ? 240 : 68,
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            borderRight: "1px solid #f1f5f9",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <div>
          <LogoHeader className="LogoHeader">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
              <img
                src="/assets/images/hrvico-logo.svg"
                alt="HRVICO"
                style={{ height: "26px", maxWidth: "95px", objectFit: "contain" }}
              />
              {openSidebar && (
                <span
                  style={{
                    background: "#f3e8ff",
                    color: "#7c3aed",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  {isAuthor ? "Author Portal" : "Blog CMS"}
                </span>
              )}
            </div>
            {isMobile && openSidebar && (
              <WestIcon
                onClick={() => setOpenSidebar(false)}
                sx={{ cursor: "pointer", color: "#64748b" }}
              />
            )}
          </LogoHeader>

          <NavList>
            {visibleItems.map((item, index) => (
              <StyledNavLink
                key={index}
                to={item.navigate}
                end={item.navigate === "."}
                onClick={isMobile ? () => setOpenSidebar(false) : undefined}
                className="StyledNavLink"
              >
                <span className="nav-icon">{item.icon}</span>
                {openSidebar && <span className="nav-text">{item.title}</span>}
              </StyledNavLink>
            ))}
          </NavList>
        </div>

        <LogoutContainer className="LogoutContainer">
          <LogoutButton onClick={() => setOpenConfirmLogout(true)}>
            <LogoutOutlinedIcon fontSize="small" style={{ color: "#64748b" }} />
            {openSidebar && <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#64748b" }}>Logout</span>}
          </LogoutButton>
        </LogoutContainer>
      </DrawerSidebar>

      <Dialog onClose={() => setOpenConfirmLogout(false)} fullWidth open={openConfirmLogout} maxWidth="xs">
        <DialogContentContainer>
          <ErrorOutlineRoundedIcon sx={{ fontSize: "70px", color: "#7c3aed" }} />
          <SureText>Are you sure?</SureText>
          <WarnText>You will be signed out from your active dashboard session.</WarnText>
          <DialogSectionTwo>
            <Button
              onClick={handleDelete}
              variant="contained"
              sx={{ bgcolor: "#7c3aed", "&:hover": { bgcolor: "#6d28d9" }, textTransform: "none", fontWeight: 700, borderRadius: "8px" }}
            >
              Logout
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenConfirmLogout(false)}
              sx={{ color: "#475569", borderColor: "#cbd5e1", textTransform: "none", fontWeight: 600, borderRadius: "8px" }}
            >
              Cancel
            </Button>
          </DialogSectionTwo>
        </DialogContentContainer>
      </Dialog>
    </>
  );
};

export default Sidebar;

const DrawerSidebar = styled(Drawer)``;

const LogoHeader = styled("div")`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #f1f5f9;
  box-sizing: border-box;
`;

const NavList = styled("div")`
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;

  .nav-icon {
    display: flex;
    align-items: center;
    color: #64748b;
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: #f8fafc;
    color: #7c3aed;
    .nav-icon {
      color: #7c3aed;
    }
  }

  &.active {
    background-color: #f3e8ff;
    color: #7c3aed;
    font-weight: 700;
    .nav-icon {
      color: #7c3aed;
    }
  }
`;

const LogoutContainer = styled("div")`
  padding: 16px 12px;
  border-top: 1px solid #f1f5f9;
`;

const LogoutButton = styled("button")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #f8fafc;
  }
`;

const DialogContentContainer = styled("div")`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
`;

const DialogSectionTwo = styled("div")`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
`;

const SureText = styled("p")`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
`;

const WarnText = styled("p")`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`;
