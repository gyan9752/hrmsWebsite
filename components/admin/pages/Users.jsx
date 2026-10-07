import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import {
  styled,
  Paper,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Pagination,
  Tooltip,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Menu,
  Select,
  FormControl,
  InputAdornment,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useAddNewUserMutation,
  useUpdateUserByIdMutation,
} from "../features/api/userApi";
import toast from "react-hot-toast";
import { getImageUrl } from "../utils/imageHelper";

const tableHeadItems = [
  "AVATAR",
  "FULL NAME",
  "EMAIL ADDRESS (USERNAME)",
  "PHONE NO.",
  "GENDER",
  "ROLE ACCESS",
  "ACTIONS",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "male",
  role: "author",
};

const Users = () => {
  const { isDark } = useDarkMode();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Add User Modal State
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addForm, setAddForm] = useState(INITIAL_FORM);
  const [showAddPassword, setShowAddPassword] = useState(false);

  // Edit User Modal State
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState(INITIAL_FORM);
  const [showEditPassword, setShowEditPassword] = useState(false);

  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  const { data, isLoading, refetch } = useGetAllUsersQuery({
    token,
    page,
    search: searchTerm,
  });

  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
  const [addNewUser, { isLoading: addingUser }] = useAddNewUserMutation();
  const [updateUserById, { isLoading: updatingUser }] = useUpdateUserByIdMutation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // Add Handler
  const handleSaveAdd = async (e) => {
    e.preventDefault();
    if (!addForm.name.trim()) {
      toast.error("Full Name is required");
      return;
    }
    if (!addForm.email.trim()) {
      toast.error("Email Address is required");
      return;
    }
    if (!addForm.password.trim()) {
      toast.error("Password is required for secure authentication");
      return;
    }

    try {
      await addNewUser({ formData: addForm });
      toast.success("User account created successfully!");
      setOpenAddModal(false);
      setAddForm(INITIAL_FORM);
      refetch();
    } catch (err) {
      toast.error("Failed to create user account");
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (user) => {
    setEditingUserId(user._id);
    setEditForm({
      name: user.name || "",
      email: user.email || "",
      password: user.password || "user123",
      phone: user.phone || user.phoneNo || "",
      gender: user.gender || "male",
      role: (user.role || "author").toLowerCase(),
    });
    setOpenEditModal(true);
  };

  // Save Edit
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      toast.error("Full Name is required");
      return;
    }
    if (!editForm.email.trim()) {
      toast.error("Email Address is required");
      return;
    }
    if (!editForm.password.trim()) {
      toast.error("Password cannot be empty");
      return;
    }

    try {
      await updateUserById({ id: editingUserId, formData: editForm });
      toast.success("User account updated successfully!");
      setOpenEditModal(false);
      refetch();
    } catch (err) {
      toast.error("Failed to update user account");
    }
  };

  const handleOpenDelete = (id) => {
    setUserToDelete(id);
    setOpenDialogBox(true);
  };

  const handleDelete = async () => {
    if (!userToDelete) return;
    try {
      await deleteUser({ id: userToDelete });
      toast.success("User account deleted successfully");
      setOpenDialogBox(false);
      refetch();
    } catch (err) {
      toast.error("Failed to delete user account");
    }
  };

  const [roleFilter, setRoleFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [dateLabel, setDateLabel] = useState("Filter by Date");
  const [dateMenuAnchor, setDateMenuAnchor] = useState(null);
  const [openCustomDateDialog, setOpenCustomDateDialog] = useState(false);
  const [customFromDate, setCustomFromDate] = useState("");
  const [customToDate, setCustomToDate] = useState("");

  const matchesDate = (itemDateStr) => {
    if (dateFilter === "all") return true;
    if (!itemDateStr) return true;
    const itemDate = new Date(itemDateStr);
    const now = new Date();

    if (dateFilter === "weekly") {
      const d = new Date();
      d.setDate(now.getDate() - 7);
      return itemDate >= d;
    }
    if (dateFilter === "15days") {
      const d = new Date();
      d.setDate(now.getDate() - 15);
      return itemDate >= d;
    }
    if (dateFilter === "monthly") {
      const d = new Date();
      d.setDate(now.getDate() - 30);
      return itemDate >= d;
    }
    if (dateFilter === "custom") {
      if (customFromDate && new Date(itemDateStr) < new Date(customFromDate + "T00:00:00")) return false;
      if (customToDate && new Date(itemDateStr) > new Date(customToDate + "T23:59:59")) return false;
      return true;
    }
    return true;
  };

  const usersList = data?.data || [];
  const filteredUsers = usersList.filter((user) => {
    const matchesSearch =
      (user.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.phone || user.phoneNo || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      roleFilter === "all" ||
      (user.role || "").toLowerCase() === roleFilter.toLowerCase();

    const matchesDateFilter = matchesDate(user.createdAt || user.updatedAt);

    return matchesSearch && matchesRole && matchesDateFilter;
  });

  const totalCount = filteredUsers.length;
  const paginatedUsers = filteredUsers.slice((page - 1) * 10, page * 10);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      {/* Header Row */}
      <HeaderRow>
        <div>
          <PageTitle>Users & Access Control</PageTitle>
          <PageSubtitle>Manage team accounts, login passwords, and role permissions.</PageSubtitle>
        </div>
        <PrimaryButton variant="contained" onClick={() => setOpenAddModal(true)}>
          <AddIcon fontSize="small" />
          Add New User
        </PrimaryButton>
      </HeaderRow>

      {/* Filter Row */}
      <FilterRow>
        <SearchWrapper>
          <SearchIcon className="search-icon" />
          <SearchInput
            placeholder="Search users by name, email, or phone..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchWrapper>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <FormControl size="small" style={{ minWidth: "140px" }}>
            <Select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setPage(1);
              }}
              displayEmpty
              style={{ borderRadius: "10px", fontSize: "0.875rem", backgroundColor: "#ffffff" }}
            >
              <MenuItem value="all">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="author">Author</MenuItem>
            </Select>
          </FormControl>

          {/* Date Range Filter Button & Menu */}
          <Button
            variant="outlined"
            onClick={(e) => setDateMenuAnchor(e.currentTarget)}
            style={{
              borderRadius: "10px",
              fontSize: "0.875rem",
              backgroundColor: "#ffffff",
              borderColor: dateFilter !== "all" ? "#7c3aed" : "#cbd5e1",
              color: dateFilter !== "all" ? "#7c3aed" : "#475569",
              textTransform: "none",
              fontWeight: 600,
              display: "flex",
              gap: "6px",
            }}
          >
            <FilterListIcon fontSize="small" />
            {dateLabel}
          </Button>

          <Menu
            anchorEl={dateMenuAnchor}
            open={Boolean(dateMenuAnchor)}
            onClose={() => setDateMenuAnchor(null)}
            PaperProps={{ style: { borderRadius: "12px", minWidth: "180px" } }}
          >
            <MenuItem onClick={() => { setDateFilter("all"); setDateLabel("Filter by Date"); setDateMenuAnchor(null); setPage(1); }}>
              All Time (Clear Date)
            </MenuItem>
            <MenuItem onClick={() => { setDateFilter("weekly"); setDateLabel("Weekly (Last 7 Days)"); setDateMenuAnchor(null); setPage(1); }}>
              Weekly (Last 7 Days)
            </MenuItem>
            <MenuItem onClick={() => { setDateFilter("15days"); setDateLabel("15 Days"); setDateMenuAnchor(null); setPage(1); }}>
              15 Days
            </MenuItem>
            <MenuItem onClick={() => { setDateFilter("monthly"); setDateLabel("Monthly (Last 30 Days)"); setDateMenuAnchor(null); setPage(1); }}>
              Monthly (Last 30 Days)
            </MenuItem>
            <MenuItem onClick={() => { setDateMenuAnchor(null); setOpenCustomDateDialog(true); }}>
              Custom Date...
            </MenuItem>
          </Menu>

          {(roleFilter !== "all" || dateFilter !== "all" || searchTerm) && (
            <Button
              variant="text"
              size="small"
              onClick={() => {
                setRoleFilter("all");
                setDateFilter("all");
                setDateLabel("Filter by Date");
                setSearchTerm("");
                setPage(1);
              }}
              style={{ color: "#ef4444", textTransform: "none", fontWeight: 600 }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      </FilterRow>

      {/* Table Section */}
      {isLoading ? (
        <LoadingBox>
          <CircularProgress sx={{ color: "#ff5a1f" }} />
        </LoadingBox>
      ) : (
        <CardContainer>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#fafafa" }}>
                  {tableHeadItems.map((head, idx) => (
                    <StyledTableCell key={idx} align={head === "ACTIONS" ? "center" : "left"}>
                      {head}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => (
                    <TableRow key={user._id} hover sx={{ "&:hover": { bgcolor: "#f8fafc" } }}>
                      <TableCell>
                        <AvatarBox>
                          {user.image ? (
                            <img
                              src={getImageUrl(user.image)}
                              alt={user.name}
                              style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
                            />
                          ) : (
                            <PersonOutlineIcon sx={{ color: "#ff5a1f", fontSize: 20 }} />
                          )}
                        </AvatarBox>
                      </TableCell>
                      <TableCell style={{ fontWeight: 600, color: "#0f172a" }}>
                        {user.name}
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {user.email}
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {user.phone || user.phoneNo || "-"}
                      </TableCell>
                      <TableCell style={{ color: "#64748b", textTransform: "capitalize" }}>
                        {user.gender || "-"}
                      </TableCell>
                      <TableCell>
                        <RoleBadge role={user.role}>
                          {(user.role || "author").toUpperCase()}
                        </RoleBadge>
                      </TableCell>
                      <TableCell align="center">
                        <ActionGroup>
                          <Tooltip title="Edit User Credentials">
                            <IconButton size="small" onClick={() => handleOpenEdit(user)}>
                              <ModeEditOutlineOutlinedIcon fontSize="small" style={{ color: "#ff5a1f" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete User Account">
                            <IconButton size="small" onClick={() => handleOpenDelete(user._id)}>
                              <DeleteOutlinedIcon fontSize="small" style={{ color: "#ef4444" }} />
                            </IconButton>
                          </Tooltip>
                        </ActionGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center" style={{ padding: "60px 20px" }}>
                      <EmptyStateBox>
                        <EmptyIconWrapper>
                          <ArticleOutlinedIcon sx={{ fontSize: 36, color: "#94a3b8" }} />
                        </EmptyIconWrapper>
                        <EmptyTitle>No users found</EmptyTitle>
                        <EmptySub>Create team members and assign role permissions.</EmptySub>
                        <AddButtonOutline
                          variant="outlined"
                          onClick={() => setOpenAddModal(true)}
                          style={{ marginTop: "12px" }}
                        >
                          <AddIcon fontSize="small" /> Add New User
                        </AddButtonOutline>
                      </EmptyStateBox>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TableFooterRow>
            <ShowingText>
              Showing {paginatedUsers.length} of {totalCount} users
            </ShowingText>
            {totalCount > 10 && (
              <Pagination
                count={Math.ceil(totalCount / 10)}
                page={page}
                onChange={(_, val) => setPage(val)}
                sx={{
                  "& .Mui-selected": {
                    bgcolor: "#ff5a1f !important",
                    color: "#ffffff",
                  },
                }}
              />
            )}
          </TableFooterRow>
        </CardContainer>
      )}

      {/* POPUP MODAL 1: ADD USER */}
      <Dialog
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Add New User Account</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Set user credentials and assign role permissions.
            </p>
          </div>
          <IconButton onClick={() => setOpenAddModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveAdd}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FormGroup>
              <FormLabel>Full Name *</FormLabel>
              <ModalInput
                placeholder="e.g. Rahul Sharma"
                value={addForm.name}
                onChange={(e) => setAddForm((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address / Username *</FormLabel>
              <ModalInput
                type="email"
                placeholder="author@hrvico.com"
                value={addForm.email}
                onChange={(e) => setAddForm((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Login Password *</FormLabel>
              <InputPasswordWrapper>
                <ModalInput
                  type={showAddPassword ? "text" : "password"}
                  placeholder="Set account password..."
                  value={addForm.password}
                  onChange={(e) => setAddForm((prev) => ({ ...prev, password: e.target.value }))}
                  required
                  style={{ width: "100%", paddingRight: "40px" }}
                />
                <IconButton
                  size="small"
                  onClick={() => setShowAddPassword(!showAddPassword)}
                  style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)" }}
                >
                  {showAddPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputPasswordWrapper>
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Phone Number</FormLabel>
                <ModalInput
                  placeholder="9876543210"
                  value={addForm.phone}
                  onChange={(e) => setAddForm((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Gender</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={addForm.gender}
                    onChange={(e) => setAddForm((prev) => ({ ...prev, gender: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>User Role Access *</FormLabel>
              <FormControl fullWidth size="small">
                <Select
                  value={addForm.role}
                  onChange={(e) => setAddForm((prev) => ({ ...prev, role: e.target.value }))}
                  style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                >
                  <MenuItem value="admin">Admin (Full Access: Blogs, Categories, Promotions, Users)</MenuItem>
                  <MenuItem value="author">Author (Restricted Access: Blogs ONLY)</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </DialogContent>

          <DialogActions style={{ padding: "16px 24px" }}>
            <Button
              onClick={() => setOpenAddModal(false)}
              variant="outlined"
              sx={{ color: "#475569", borderColor: "#cbd5e1", textTransform: "none", fontWeight: 600 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={addingUser}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {addingUser ? "Adding..." : "Add User Account"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* POPUP MODAL 2: EDIT USER */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Edit User Account</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Update credentials, login password, and role permissions.
            </p>
          </div>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveEdit}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FormGroup>
              <FormLabel>Full Name *</FormLabel>
              <ModalInput
                placeholder="e.g. Rahul Sharma"
                value={editForm.name}
                onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address / Username *</FormLabel>
              <ModalInput
                type="email"
                placeholder="author@hrvico.com"
                value={editForm.email}
                onChange={(e) => setEditForm((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Login Password *</FormLabel>
              <InputPasswordWrapper>
                <ModalInput
                  type={showEditPassword ? "text" : "password"}
                  placeholder="Update account password..."
                  value={editForm.password}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, password: e.target.value }))}
                  required
                  style={{ width: "100%", paddingRight: "40px" }}
                />
                <IconButton
                  size="small"
                  onClick={() => setShowEditPassword(!showEditPassword)}
                  style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)" }}
                >
                  {showEditPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputPasswordWrapper>
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Phone Number</FormLabel>
                <ModalInput
                  placeholder="9876543210"
                  value={editForm.phone}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Gender</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={editForm.gender}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, gender: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>User Role Access *</FormLabel>
              <FormControl fullWidth size="small">
                <Select
                  value={editForm.role}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, role: e.target.value }))}
                  style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                >
                  <MenuItem value="admin">Admin (Full Access: Blogs, Categories, Promotions, Users)</MenuItem>
                  <MenuItem value="author">Author (Restricted Access: Blogs ONLY)</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </DialogContent>

          <DialogActions style={{ padding: "16px 24px" }}>
            <Button
              onClick={() => setOpenEditModal(false)}
              variant="outlined"
              sx={{ color: "#475569", borderColor: "#cbd5e1", textTransform: "none", fontWeight: 600 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={updatingUser}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {updatingUser ? "Updating..." : "Update User Account"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={openDialogBox} onClose={() => setOpenDialogBox(false)} maxWidth="xs" fullWidth>
        <DialogPadding>
          <ErrorOutlineRoundedIcon sx={{ fontSize: 60, color: "#ef4444" }} />
          <h3 style={{ margin: "12px 0 4px", fontSize: "1.2rem", fontWeight: 700 }}>Delete User Account?</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            This action cannot be undone. User account will be permanently removed.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", width: "100%", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleDelete}
              disabled={deleteLoading}
              sx={{ bgcolor: "#ef4444", "&:hover": { bgcolor: "#dc2626" }, textTransform: "none", fontWeight: 700 }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              onClick={() => setOpenDialogBox(false)}
              sx={{ color: "#475569", borderColor: "#cbd5e1", textTransform: "none", fontWeight: 600 }}
            >
              Cancel
            </Button>
          </div>
        </DialogPadding>
      </Dialog>

      {/* Custom Date Range Dialog */}
      <Dialog open={openCustomDateDialog} onClose={() => setOpenCustomDateDialog(false)} maxWidth="xs" fullWidth PaperProps={{ style: { borderRadius: "16px", padding: "8px" } }}>
        <DialogTitle style={{ fontWeight: 800, color: "#0f172a" }}>Select Custom Date Range</DialogTitle>
        <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>From Date</label>
            <input
              type="date"
              value={customFromDate}
              onChange={(e) => setCustomFromDate(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", marginTop: "4px" }}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>To Date</label>
            <input
              type="date"
              value={customToDate}
              onChange={(e) => setCustomToDate(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", marginTop: "4px" }}
            />
          </div>
        </DialogContent>
        <DialogActions style={{ padding: "16px" }}>
          <Button onClick={() => setOpenCustomDateDialog(false)} variant="outlined" sx={{ color: "#475569", textTransform: "none", fontWeight: 600 }}>Cancel</Button>
          <Button
            onClick={() => {
              if (!customFromDate && !customToDate) {
                toast.error("Please select at least one date");
                return;
              }
              setDateFilter("custom");
              setDateLabel(`${customFromDate || "Start"} to ${customToDate || "End"}`);
              setOpenCustomDateDialog(false);
              setPage(1);
            }}
            variant="contained"
            sx={{ bgcolor: "#7c3aed", "&:hover": { bgcolor: "#6d28d9" }, textTransform: "none", fontWeight: 700 }}
          >
            Apply Filter
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default Users;

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

const FilterRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const SearchWrapper = styled("div")`
  position: relative;
  flex-grow: 1;
  max-width: 600px;

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 20px;
  }
`;

const SearchInput = styled("input")`
  width: 100%;
  padding: 12px 16px 12px 42px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #ff5a1f;
    box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.1);
  }
`;

const FilterButton = styled(Button)`
  background-color: #ffffff;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px 18px;
  text-transform: none;
  font-weight: 600;
  display: flex;
  gap: 8px;

  &:hover {
    background-color: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const CardContainer = styled(Paper)`
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  background-color: #ffffff;
`;

const StyledTableCell = styled(TableCell)`
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.5px;
  padding: 14px 16px;
`;

const AvatarBox = styled("div")`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff4f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoleBadge = styled("span")`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${(props) =>
    String(props.role).toLowerCase() === "admin" ? "#f3e8ff" : "#f1f5f9"};
  color: ${(props) =>
    String(props.role).toLowerCase() === "admin" ? "#7c3aed" : "#64748b"};
`;

const ActionGroup = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const EmptyStateBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px 0;
`;

const EmptyIconWrapper = styled("div")`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f1f5f9;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
`;

const EmptyTitle = styled("h3")`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
`;

const EmptySub = styled("p")`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const AddButtonOutline = styled(Button)`
  color: #ff5a1f;
  border-color: #ff5a1f;
  font-weight: 700;
  text-transform: none;
  border-radius: 10px;
  padding: 8px 18px;
  display: flex;
  gap: 6px;

  &:hover {
    border-color: #e04b16;
    background-color: #fff4f0;
  }
`;

const TableFooterRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #f1f5f9;
`;

const ShowingText = styled("span")`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;

const LoadingBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const DialogPadding = styled("div")`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FormRow = styled("div")`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormGroup = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FormLabel = styled("label")`
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
`;

const ModalInput = styled("input")`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding: 0 14px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;

  &:focus {
    border-color: #ff5a1f;
    box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.1);
  }
`;

const InputPasswordWrapper = styled("div")`
  position: relative;
  width: 100%;
`;
