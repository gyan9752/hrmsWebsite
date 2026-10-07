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
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import ImageUploader from "../components/ImageUploader";
import {
  useDeleteImageMutation,
  useGetAllImagesQuery,
  useUpdateImageStatusMutation,
  useAddNewImageMutation,
  useUpdateImageByIdMutation,
} from "../features/api/dynamicImageApi";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const tableHeadItems = [
  "PREVIEW",
  "ALT TEXT / TITLE",
  "PLACEMENT",
  "RELATED LINK",
  "AUTHOR",
  "CREATED AT",
  "STATUS",
  "ACTIONS",
];

const INITIAL_FORM = {
  altText: "",
  placement: "sidebar",
  relatedLink: "",
  status: "show",
  image: "/assets/images/blogs_image_prev.webp",
};

const DynamicBlogImage = () => {
  const { isDark } = useDarkMode();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [promoToDelete, setPromoToDelete] = useState(null);

  // Add Promo Modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addForm, setAddForm] = useState(INITIAL_FORM);

  // Edit Promo Modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(INITIAL_FORM);

  const { data, isLoading, refetch } = useGetAllImagesQuery({
    page,
    search: searchTerm,
  });

  const [deleteImage, { isLoading: deleteLoading }] = useDeleteImageMutation();
  const [updateImageStatus] = useUpdateImageStatusMutation();
  const [addNewImage, { isLoading: addingImage }] = useAddNewImageMutation();
  const [updateImageById, { isLoading: updatingImage }] = useUpdateImageByIdMutation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // Add Handler
  const handleSaveAdd = async (e) => {
    e.preventDefault();
    if (!addForm.altText.trim()) {
      toast.error("Alt Text / Title is required");
      return;
    }
    try {
      await addNewImage({ formData: addForm });
      toast.success("Promotion image added successfully!");
      setOpenAddModal(false);
      setAddForm(INITIAL_FORM);
      refetch();
    } catch (err) {
      toast.error("Failed to add promotion image");
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (promo) => {
    setEditingId(promo._id || promo.id || promo.slug);
    setEditForm({
      altText: promo.altText || promo.featureAlt || "",
      placement: promo.placement || promo.promotion || "sidebar",
      relatedLink: promo.relatedLink || "",
      status: promo.status || "show",
      image: promo.image || promo.featureImage || "/assets/images/blogs_image_prev.webp",
    });
    setOpenEditModal(true);
  };

  // Save Edit
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editForm.altText.trim()) {
      toast.error("Alt Text is required");
      return;
    }
    try {
      await updateImageById({ id: editingId, formData: editForm });
      toast.success("Promotion image updated successfully!");
      setOpenEditModal(false);
      refetch();
    } catch (err) {
      toast.error("Failed to update promotion image");
    }
  };

  const handleOpenDelete = (id) => {
    setPromoToDelete(id);
    setOpenDialogBox(true);
  };

  const handleDelete = async () => {
    if (!promoToDelete) return;
    try {
      await deleteImage({ id: promoToDelete });
      toast.success("Promotion deleted successfully");
      setOpenDialogBox(false);
      refetch();
    } catch (err) {
      toast.error("Failed to delete promotion");
    }
  };

  const handleToggleStatus = async (promo) => {
    const newStatus = promo.status === "show" ? "hide" : "show";
    try {
      await updateImageStatus({ id: promo._id, status: newStatus });
      toast.success(`Status set to ${newStatus === "show" ? "Published" : "Draft"}`);
      refetch();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const [statusFilter, setStatusFilter] = useState("all");
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

  const rawPromotionsList = data?.data || [];
  const filteredPromotions = rawPromotionsList.filter((promo) => {
    const matchesSearch =
      (promo.altText || promo.featureAlt || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (promo.placement || promo.promotion || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "show" && promo.status === "show") ||
      (statusFilter === "hide" && promo.status === "hide");

    const matchesDateFilter = matchesDate(promo.createdAt || promo.updatedAt);

    return matchesSearch && matchesStatus && matchesDateFilter;
  });

  const totalCount = filteredPromotions.length;
  const paginatedPromotions = filteredPromotions.slice((page - 1) * 10, page * 10);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      {/* Header Row */}
      <HeaderRow>
        <div>
          <PageTitle>Promotions</PageTitle>
          <PageSubtitle>Manage promotional banners and dynamic sidebar images.</PageSubtitle>
        </div>
        <PrimaryButton variant="contained" component={NavLink} to="/add-blog-image">
          <AddIcon fontSize="small" />
          Add New Promotion
        </PrimaryButton>
      </HeaderRow>

      {/* Filter Row */}
      <FilterRow>
        <SearchWrapper>
          <SearchIcon className="search-icon" />
          <SearchInput
            placeholder="Search promotions..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchWrapper>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <FormControl size="small" style={{ minWidth: "140px" }}>
            <Select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              displayEmpty
              style={{ borderRadius: "10px", fontSize: "0.875rem", backgroundColor: "#ffffff" }}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="show">Published</MenuItem>
              <MenuItem value="hide">Draft</MenuItem>
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

          {(statusFilter !== "all" || dateFilter !== "all" || searchTerm) && (
            <Button
              variant="text"
              size="small"
              onClick={() => {
                setStatusFilter("all");
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
                {paginatedPromotions.length > 0 ? (
                  paginatedPromotions.map((promo) => (
                    <TableRow key={promo._id} hover sx={{ "&:hover": { bgcolor: "#f8fafc" } }}>
                      <TableCell>
                        <ThumbImg
                          src={promo.image || promo.featureImage || "/assets/images/blogs_image_prev.webp"}
                          alt={promo.altText || promo.featureAlt || "Promo"}
                          onError={(e) => {
                            e.target.src = "/assets/images/blogs_image_prev.webp";
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ fontWeight: 600, color: "#0f172a" }}>
                        {promo.altText || promo.featureAlt || "Untitled Promotion"}
                      </TableCell>
                      <TableCell style={{ color: "#64748b", textTransform: "capitalize" }}>
                        {promo.placement || promo.promotion || "Sidebar"}
                      </TableCell>
                      <TableCell style={{ color: "#2563eb", maxWidth: "200px" }} noWrap>
                        <a href={promo.relatedLink || "#"} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                          {promo.relatedLink || "-"}
                        </a>
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {promo.author || "Admin User"}
                      </TableCell>
                      <TableCell style={{ color: "#64748b", fontSize: "0.85rem" }}>
                        {promo.createdAt
                          ? new Date(promo.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "-"}
                      </TableCell>
                      <TableCell>
                        <StatusBadge
                          status={promo.status}
                          onClick={() => handleToggleStatus(promo)}
                          title="Click to toggle status"
                        >
                          {promo.status === "show" ? "Published" : "Draft"}
                        </StatusBadge>
                      </TableCell>
                      <TableCell align="center">
                        <ActionGroup>
                          <Tooltip title="Edit Promotion">
                            <IconButton size="small" component={NavLink} to={`/edit-blog-image/${promo._id}`}>
                              <ModeEditOutlineOutlinedIcon fontSize="small" style={{ color: "#ff5a1f" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Promotion">
                            <IconButton size="small" onClick={() => handleOpenDelete(promo._id)}>
                              <DeleteOutlinedIcon fontSize="small" style={{ color: "#ef4444" }} />
                            </IconButton>
                          </Tooltip>
                        </ActionGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} align="center" style={{ padding: "60px 20px" }}>
                      <EmptyStateBox>
                        <EmptyIconWrapper>
                          <ArticleOutlinedIcon sx={{ fontSize: 36, color: "#94a3b8" }} />
                        </EmptyIconWrapper>
                        <EmptyTitle>No promotion images found</EmptyTitle>
                        <EmptySub>Add promotional banners for your blog pages.</EmptySub>
                        <AddButtonOutline
                          variant="outlined"
                          onClick={() => setOpenAddModal(true)}
                          style={{ marginTop: "12px" }}
                        >
                          <AddIcon fontSize="small" /> Add New Image
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
              Showing {paginatedPromotions.length} of {totalCount} promotions
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

      {/* POPUP MODAL 1: ADD PROMOTION */}
      <Dialog
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Add Promotion Image</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Upload or drag & drop promotional image.
            </p>
          </div>
          <IconButton onClick={() => setOpenAddModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveAdd}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FormGroup>
              <FormLabel>Alt Text / Title *</FormLabel>
              <ModalInput
                placeholder="e.g. Summer HRMS Special Offer"
                value={addForm.altText}
                onChange={(e) => setAddForm((prev) => ({ ...prev, altText: e.target.value }))}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Placement Position</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={addForm.placement}
                    onChange={(e) => setAddForm((prev) => ({ ...prev, placement: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="sidebar">Sidebar Widget</MenuItem>
                    <MenuItem value="header">Top Header Banner</MenuItem>
                    <MenuItem value="footer">Footer Banner</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Status</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={addForm.status}
                    onChange={(e) => setAddForm((prev) => ({ ...prev, status: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="show">Published</MenuItem>
                    <MenuItem value="hide">Draft</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <ImageUploader
                label="Promotion Image (Drag & Drop or Click)"
                value={addForm.image}
                onChange={(url) => setAddForm((prev) => ({ ...prev, image: url }))}
                placeholder="Drag & drop promotional banner here or click to browse"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Target Related Link</FormLabel>
              <ModalInput
                placeholder="https://hrvico.com/pricing"
                value={addForm.relatedLink}
                onChange={(e) => setAddForm((prev) => ({ ...prev, relatedLink: e.target.value }))}
              />
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
              disabled={addingImage}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {addingImage ? "Adding..." : "Add Image"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* POPUP MODAL 2: EDIT PROMOTION */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Edit Promotion Image</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Update promotion details and upload new banner.
            </p>
          </div>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveEdit}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FormGroup>
              <FormLabel>Alt Text / Title *</FormLabel>
              <ModalInput
                placeholder="e.g. Summer HRMS Special Offer"
                value={editForm.altText}
                onChange={(e) => setEditForm((prev) => ({ ...prev, altText: e.target.value }))}
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Placement Position</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={editForm.placement}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, placement: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="sidebar">Sidebar Widget</MenuItem>
                    <MenuItem value="header">Top Header Banner</MenuItem>
                    <MenuItem value="footer">Footer Banner</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Status</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={editForm.status}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value }))}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="show">Published</MenuItem>
                    <MenuItem value="hide">Draft</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <ImageUploader
                label="Promotion Image (Drag & Drop or Click)"
                value={editForm.image}
                onChange={(url) => setEditForm((prev) => ({ ...prev, image: url }))}
                placeholder="Drag & drop promotional banner here or click to browse"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Target Related Link</FormLabel>
              <ModalInput
                placeholder="https://hrvico.com/pricing"
                value={editForm.relatedLink}
                onChange={(e) => setEditForm((prev) => ({ ...prev, relatedLink: e.target.value }))}
              />
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
              disabled={updatingImage}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {updatingImage ? "Updating..." : "Update Image"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={openDialogBox} onClose={() => setOpenDialogBox(false)} maxWidth="xs" fullWidth>
        <DialogPadding>
          <ErrorOutlineRoundedIcon sx={{ fontSize: 60, color: "#ef4444" }} />
          <h3 style={{ margin: "12px 0 4px", fontSize: "1.2rem", fontWeight: 700 }}>Delete Promotion?</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            This promotion image will be permanently removed.
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

export default DynamicBlogImage;

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

const ThumbImg = styled("img")`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #f1f5f9;
`;

const StatusBadge = styled("span")`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.status === "show" ? "#ecfdf5" : "#f1f5f9")};
  color: ${(props) => (props.status === "show" ? "#10b981" : "#64748b")};
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
