import React, { useState, useEffect } from "react";
import {
  styled,
  Paper,
  Button,
  Switch,
  MenuItem,
  Select,
  FormControl,
  Divider,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import toast from "react-hot-toast";

const DEFAULT_SETTINGS = {
  darkMode: false,
  compactTables: false,
  postsPerPage: 10,
  defaultStatus: "show",
  autoSlug: true,
  emailNotifs: true,
};

const Settings = () => {
  const [settings, setSettings] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms_settings");
      if (saved) return JSON.parse(saved);
    }
    return DEFAULT_SETTINGS;
  });

  const [isDark, setIsDark] = useState(() => settings.darkMode || false);

  const handleChange = (key, val) => {
    const updated = { ...settings, [key]: val };
    setSettings(updated);

    if (key === "darkMode") {
      setIsDark(val);
      if (val) {
        document.body.classList.add("dark-cms-theme");
      } else {
        document.body.classList.remove("dark-cms-theme");
      }
      window.dispatchEvent(new Event("cms_settings_changed"));
    }

    if (key === "compactTables") {
      if (val) {
        document.body.classList.add("compact-table");
      } else {
        document.body.classList.remove("compact-table");
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("cms_settings", JSON.stringify(settings));

    if (settings.darkMode) {
      document.body.classList.add("dark-cms-theme");
    } else {
      document.body.classList.remove("dark-cms-theme");
    }

    if (settings.compactTables) {
      document.body.classList.add("compact-table");
    } else {
      document.body.classList.remove("compact-table");
    }

    setIsDark(settings.darkMode);
    window.dispatchEvent(new Event("cms_settings_changed"));
    toast.success("CMS settings & preferences saved successfully!");
  };

  useEffect(() => {
    if (settings.darkMode) {
      document.body.classList.add("dark-cms-theme");
    } else {
      document.body.classList.remove("dark-cms-theme");
    }

    if (settings.compactTables) {
      document.body.classList.add("compact-table");
    } else {
      document.body.classList.remove("compact-table");
    }
  }, [settings.darkMode, settings.compactTables]);

  return (
    <PageContainer dark={isDark ? 1 : 0} className="cms-page-container">
      <HeaderRow>
        <div>
          <PageTitle>CMS Settings & Preferences</PageTitle>
          <PageSubtitle>Configure theme appearance, layout density, and publishing defaults.</PageSubtitle>
        </div>
        <PrimaryButton variant="contained" onClick={handleSave}>
          <SaveOutlinedIcon fontSize="small" />
          Save Preferences
        </PrimaryButton>
      </HeaderRow>

      <SettingsGridContainer>
        {/* TOP ROW: INLINED SIDE-BY-SIDE (Appearance & Theme + Publishing Preferences) */}
        <InlineGridRow>
          {/* Section 1: Appearance & Theme */}
          <SettingSection>
            <SectionHeader>
              <DarkModeOutlinedIcon style={{ color: "#7c3aed" }} />
              <div>
                <SectionTitle>1. Appearance & Theme</SectionTitle>
                <SectionSubtitle>Manage visual theme and layout density.</SectionSubtitle>
              </div>
            </SectionHeader>

            <SettingItemRow>
              <div>
                <ItemLabel>Dark Mode Theme</ItemLabel>
                <ItemDescription>Switch CMS to sleek dark Slate background mode.</ItemDescription>
              </div>
              <Switch
                checked={settings.darkMode}
                onChange={(e) => handleChange("darkMode", e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#7c3aed" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#7c3aed" },
                }}
              />
            </SettingItemRow>

            <Divider sx={{ my: 2, borderColor: "#f1f5f9" }} />

            <SettingItemRow>
              <div>
                <ItemLabel>Compact Table Density</ItemLabel>
                <ItemDescription>Reduce table cell padding to show more rows per screen.</ItemDescription>
              </div>
              <Switch
                checked={settings.compactTables}
                onChange={(e) => handleChange("compactTables", e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#7c3aed" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#7c3aed" },
                }}
              />
            </SettingItemRow>
          </SettingSection>

          {/* Section 2: Publishing Preferences */}
          <SettingSection>
            <SectionHeader>
              <TuneOutlinedIcon style={{ color: "#7c3aed" }} />
              <div>
                <SectionTitle>2. Publishing Preferences</SectionTitle>
                <SectionSubtitle>Configure post defaults and URL slug behavior.</SectionSubtitle>
              </div>
            </SectionHeader>

            <SettingItemRow>
              <div>
                <ItemLabel>Default Post Status</ItemLabel>
                <ItemDescription>Initial state when opening Add Blog modal.</ItemDescription>
              </div>
              <FormControl size="small" style={{ width: "150px" }}>
                <Select
                  value={settings.defaultStatus}
                  onChange={(e) => handleChange("defaultStatus", e.target.value)}
                  style={{ borderRadius: "8px", fontSize: "0.85rem" }}
                >
                  <MenuItem value="show">Published (Show)</MenuItem>
                  <MenuItem value="hide">Draft (Hide)</MenuItem>
                </Select>
              </FormControl>
            </SettingItemRow>

            <Divider sx={{ my: 1.5, borderColor: "#f1f5f9" }} />

            <SettingItemRow>
              <div>
                <ItemLabel>Default Items Per Page</ItemLabel>
                <ItemDescription>Items displayed per page in list tables.</ItemDescription>
              </div>
              <FormControl size="small" style={{ width: "150px" }}>
                <Select
                  value={settings.postsPerPage}
                  onChange={(e) => handleChange("postsPerPage", e.target.value)}
                  style={{ borderRadius: "8px", fontSize: "0.85rem" }}
                >
                  <MenuItem value={10}>10 items</MenuItem>
                  <MenuItem value={20}>20 items</MenuItem>
                  <MenuItem value={50}>50 items</MenuItem>
                </Select>
              </FormControl>
            </SettingItemRow>

            <Divider sx={{ my: 1.5, borderColor: "#f1f5f9" }} />

            <SettingItemRow>
              <div>
                <ItemLabel>Auto-Generate URL Slugs</ItemLabel>
                <ItemDescription>Automatically format titles into URL slugs.</ItemDescription>
              </div>
              <Switch
                checked={settings.autoSlug}
                onChange={(e) => handleChange("autoSlug", e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#7c3aed" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#7c3aed" },
                }}
              />
            </SettingItemRow>
          </SettingSection>
        </InlineGridRow>

        {/* BOTTOM ROW: FULL WIDTH (Notification Preferences) */}
        <SettingSection style={{ width: "100%" }}>
          <SectionHeader>
            <NotificationsNoneOutlinedIcon style={{ color: "#7c3aed" }} />
            <div>
              <SectionTitle>3. Notification Preferences</SectionTitle>
              <SectionSubtitle>Manage system activity alerts and email digests.</SectionSubtitle>
            </div>
          </SectionHeader>

          <SettingItemRow>
            <div>
              <ItemLabel>Email Alerts on New Article Creation</ItemLabel>
              <ItemDescription>Receive automated notification digests when authors publish new blog posts.</ItemDescription>
            </div>
            <Switch
              checked={settings.emailNotifs}
              onChange={(e) => handleChange("emailNotifs", e.target.checked)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": { color: "#7c3aed" },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#7c3aed" },
              }}
            />
          </SettingItemRow>
        </SettingSection>
      </SettingsGridContainer>
    </PageContainer>
  );
};

export default Settings;

const PageContainer = styled("div")`
  padding: 32px;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  min-height: calc(100vh - 72px);
  transition: background-color 0.3s ease;

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

const PrimaryButton = styled(Button)`
  background-color: #7c3aed;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: none;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);

  &:hover {
    background-color: #6d28d9;
  }
`;

const SettingsGridContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1100px;
`;

const InlineGridRow = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SettingSection = styled(Paper)`
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
`;

const SectionHeader = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SectionTitle = styled("h3")`
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 2px 0;
`;

const SectionSubtitle = styled("p")`
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
`;

const SettingItemRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const ItemLabel = styled("h4")`
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 2px 0;
`;

const ItemDescription = styled("p")`
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
`;
