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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesListQuery,
  useUpdateCategoryStatusMutation,
  useAddNewCategoryMutation,
  useUpdateCategiryByIdMutation,
} from "../features/api/categoryApi";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../utils/imageHelper";
import { useGetAllBlogsQuery } from "../features/api/blogApi";

const tableHeadItems = [
  "ICON",
  "CATEGORY NAME",
  "SLUG",
  "MAIN HEADING",
  "POSTS COUNT",
  "CREATED AT",
  "STATUS",
  "ACTIONS",
];

const INITIAL_FORM = {
  name: "",
  slug: "",
  mainHeading: "",
  shortDescription: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  coverAlt: "",
  coverImage: null,
  coverImageFile: null,
  status: "active",
};

const Categories = () => {
  const { isDark } = useDarkMode();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Check user role
  const userString = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const currentUser = userString ? JSON.parse(userString) : null;
  const isAuthor = (currentUser?.role || "admin").toLowerCase() === "author";

  // Add Category Modal State
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addForm, setAddForm] = useState(INITIAL_FORM);

  // Edit Category Modal State
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingCategorySlug, setEditingCategorySlug] = useState(null);
  const [editForm, setEditForm] = useState(INITIAL_FORM);

  // Date Filter State
  const [dateFilter, setDateFilter] = useState("all");
  const [dateLabel, setDateLabel] = useState("Filter by Date");
  const [dateMenuAnchor, setDateMenuAnchor] = useState(null);
  const [openCustomDateDialog, setOpenCustomDateDialog] = useState(false);
  const [customFromDate, setCustomFromDate] = useState("");
  const [customToDate, setCustomToDate] = useState("");

  const { data, isLoading, refetch } = useGetAllCategoriesListQuery();
  const { data: blogsData } = useGetAllBlogsQuery();
  const [deleteCategory, { isLoading: deleteLoading }] = useDeleteCategoryMutation();
  const [updateCategoryStatus] = useUpdateCategoryStatusMutation();
  const [addNewCategory, { isLoading: addingCategory }] = useAddNewCategoryMutation();
  const [updateCategoryById, { isLoading: updatingCategory }] = useUpdateCategiryByIdMutation();

  const allBlogsList = Array.isArray(blogsData)
    ? blogsData
    : blogsData?.data || blogsData?.blogs || [];

  const getPostCount = (category) => {
    if (typeof category?.postsCount === "number" && category.postsCount > 0) {
      return category.postsCount;
    }
    if (!allBlogsList || !Array.isArray(allBlogsList) || allBlogsList.length === 0) return 0;
    const catIdStr = String(category?._id || category?.id || "").toLowerCase().trim();
    const catNameStr = String(category?.name || "").toLowerCase().trim();
    const catSlugStr = String(category?.slug || "").toLowerCase().trim();

    return allBlogsList.filter((b) => {
      const bCat = b.categoryId || b.category || b.Category;
      if (!bCat) return false;

      if (typeof bCat === "object") {
        const bId = String(bCat._id || bCat.id || "").toLowerCase().trim();
        const bName = String(bCat.name || bCat.title || "").toLowerCase().trim();
        const bSlug = String(bCat.slug || "").toLowerCase().trim();
        return (
          (catIdStr && bId === catIdStr) ||
          (catNameStr && bName === catNameStr) ||
          (catSlugStr && bSlug === catSlugStr)
        );
      }

      const bStr = String(bCat).toLowerCase().trim();
      return bStr === catIdStr || bStr === catNameStr || bStr === catSlugStr;
    }).length;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // Add Form Title Change
  const handleAddNameChange = (e) => {
    const nameVal = e.target.value;
    setAddForm((prev) => ({
      ...prev,
      name: nameVal,
      slug: nameVal.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-"),
    }));
  };

  const handleSaveAdd = async (e) => {
    e.preventDefault();
    if (!addForm.name.trim()) {
      toast.error("Category Name is required");
      return;
    }
    const token = localStorage.getItem("authToken");

    try {
      const formData = new FormData();
      formData.append("name", addForm.name);
      formData.append("slug", addForm.slug);
      formData.append("mainHeading", addForm.mainHeading || "");
      formData.append("shortDescription", addForm.shortDescription || "");
      formData.append("metaTitle", addForm.metaTitle || "");
      formData.append("metaDescription", addForm.metaDescription || "");
      formData.append("metaKeywords", addForm.metaKeywords || "");
      formData.append("coverAlt", addForm.coverAlt || "");
      formData.append("status", addForm.status || "active");

      if (addForm.coverImageFile instanceof File) {
        formData.append("image", addForm.coverImageFile);
      }

      await addNewCategory({ values: formData, token, slug: addForm.slug }).unwrap();
      toast.success("Category added successfully!");
      setOpenAddModal(false);
      setAddForm(INITIAL_FORM);
      refetch();
    } catch (err) {
      toast.error("Failed to add category");
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (category) => {
    setEditingCategorySlug(category.slug || category._id);
    setEditForm({
      name: category.name || "",
      slug: category.slug || "",
      mainHeading: category.mainHeading || "",
      shortDescription: category.shortDescription || "",
      metaTitle: category.metaTitle || "",
      metaDescription: category.metaDescription || "",
      metaKeywords: Array.isArray(category.metaKeywords)
        ? category.metaKeywords.join(", ")
        : category.metaKeywords || "",
      coverAlt: category.coverAlt || category.imageAlt || "",
      coverImage: category.coverImageUrl || category.coverImage || category.imageUrl || category.image || null,
      coverImageFile: null,
      status: category.status || "active",
    });
    setOpenEditModal(true);
  };

  const handleEditNameChange = (e) => {
    const nameVal = e.target.value;
    setEditForm((prev) => ({
      ...prev,
      name: nameVal,
      slug: nameVal.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-"),
    }));
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      toast.error("Category Name is required");
      return;
    }
    const token = localStorage.getItem("authToken");

    try {
      const formData = new FormData();
      formData.append("name", editForm.name);
      formData.append("slug", editForm.slug);
      formData.append("mainHeading", editForm.mainHeading || "");
      formData.append("shortDescription", editForm.shortDescription || "");
      formData.append("metaTitle", editForm.metaTitle || "");
      formData.append("metaDescription", editForm.metaDescription || "");
      formData.append("metaKeywords", editForm.metaKeywords || "");
      formData.append("coverAlt", editForm.coverAlt || "");
      formData.append("status", editForm.status || "active");

      if (editForm.coverImageFile instanceof File) {
        formData.append("image", editForm.coverImageFile);
        formData.append("coverImage", editForm.coverImageFile);
      }

      await updateCategoryById({ slug: editingCategorySlug, token, values: formData }).unwrap();
      toast.success("Category updated successfully!");
      setOpenEditModal(false);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update category");
    }
  };

  const handleOpenDelete = (slug) => {
    if (isAuthor) {
      toast.error("Authors are not authorized to delete categories. Admin access required.");
      return;
    }
    setCategoryToDelete(slug);
    setOpenDialogBox(true);
  };

  const handleDelete = async () => {
    if (!categoryToDelete) return;
    try {
      await deleteCategory({ slug: categoryToDelete });
      toast.success("Category deleted successfully");
      setOpenDialogBox(false);
      refetch();
    } catch (err) {
      toast.error("Failed to delete category");
    }
  };

  const handleToggleStatus = async (category) => {
    const newStatusVal = category.status === "active" ? "inactive" : "active";
    try {
      await updateCategoryStatus({ id: category._id, status: newStatusVal });
      toast.success(`Category set to ${newStatusVal === "active" ? "Active" : "Inactive"}`);
      refetch();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

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

  const allCategories = data?.data || [];
  const filteredCategories = allCategories.filter((c) => {
    const matchesSearch = (c.name || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && c.status === "active") ||
      (statusFilter === "inactive" && c.status === "inactive");

    const matchesDateFilter = matchesDate(c.createdAt || c.updatedAt);

    return matchesSearch && matchesStatus && matchesDateFilter;
  });
  const totalCount = filteredCategories.length;
  const paginatedCategories = filteredCategories.slice((page - 1) * 10, page * 10);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      {/* Header Row */}
      <HeaderRow>
        <div>
          <PageTitle>Categories</PageTitle>
          <PageSubtitle>Organize your articles into structured blog categories.</PageSubtitle>
        </div>
        <PrimaryButton variant="contained" component={NavLink} to="/add-categories">
          <AddIcon fontSize="small" />
          Add New Category
        </PrimaryButton>
      </HeaderRow>

      {/* Filter Row */}
      <FilterRow>
        <SearchWrapper>
          <SearchIcon className="search-icon" />
          <SearchInput
            placeholder="Search categories by name..."
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
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
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
                {paginatedCategories.length > 0 ? (
                  paginatedCategories.map((category) => {
                    const catImageRaw =
                      category?.coverImageUrl ||
                      category?.coverImage ||
                      category?.imageUrl ||
                      category?.image ||
                      null;
                    const catImage = catImageRaw ? getImageUrl(catImageRaw) : null;

                    return (
                      <TableRow key={category._id || category.slug} hover sx={{ "&:hover": { bgcolor: "#f8fafc" } }}>
                        <TableCell>
                          <FolderBox>
                            {catImage ? (
                              <img
                                src={catImage}
                                alt={category.name || "Category Image"}
                                style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
                              />
                            ) : (
                              <FolderOutlinedIcon sx={{ color: "#ff5a1f", fontSize: 20 }} />
                            )}
                          </FolderBox>
                        </TableCell>
                        <TableCell style={{ fontWeight: 600, color: "#0f172a" }}>
                          {category.name}
                        </TableCell>
                      <TableCell style={{ color: "#64748b", fontFamily: "monospace" }}>
                        {category.slug}
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {category.mainHeading || "-"}
                      </TableCell>
                      <TableCell style={{ fontWeight: 600, color: "#0f172a" }}>
                        {getPostCount(category)}
                      </TableCell>
                      <TableCell style={{ color: "#64748b", fontSize: "0.85rem" }}>
                        {category.createdAt
                          ? new Date(category.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "-"}
                      </TableCell>
                      <TableCell>
                        <StatusBadge
                          status={category.status}
                          onClick={() => handleToggleStatus(category)}
                          title="Click to toggle status"
                        >
                          {category.status === "active" ? "Active" : "Inactive"}
                        </StatusBadge>
                      </TableCell>
                      <TableCell align="center">
                        <ActionGroup>
                          <Tooltip title="Edit Category">
                            <IconButton size="small" component={NavLink} to={`/edit-categories/${category._id}`}>
                              <ModeEditOutlineOutlinedIcon fontSize="small" style={{ color: "#ff5a1f" }} />
                            </IconButton>
                          </Tooltip>
                          {!isAuthor && (
                            <Tooltip title="Delete Category">
                              <IconButton size="small" onClick={() => handleOpenDelete(category.slug)}>
                                <DeleteOutlinedIcon fontSize="small" style={{ color: "#ef4444" }} />
                              </IconButton>
                            </Tooltip>
                          )}
                        </ActionGroup>
                      </TableCell>
                    </TableRow>
                  );
                })
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} align="center" style={{ padding: "60px 20px" }}>
                      <EmptyStateBox>
                        <EmptyIconWrapper>
                          <ArticleOutlinedIcon sx={{ fontSize: 36, color: "#94a3b8" }} />
                        </EmptyIconWrapper>
                        <EmptyTitle>No categories found</EmptyTitle>
                        <EmptySub>Create categories to group your blog articles.</EmptySub>
                        <AddButtonOutline
                          variant="outlined"
                          onClick={() => setOpenAddModal(true)}
                          style={{ marginTop: "12px" }}
                        >
                          <AddIcon fontSize="small" /> Add New Category
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
              Showing {paginatedCategories.length} of {totalCount} categories
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

      {/* POPUP MODAL 1: ADD CATEGORY */}
      <Dialog
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Add New Category</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Provide category name and heading.
            </p>
          </div>
          <IconButton onClick={() => setOpenAddModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveAdd}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <FormGroup>
              <FormLabel>Category Name *</FormLabel>
              <ModalInput
                placeholder="e.g. HR Technology"
                value={addForm.name}
                onChange={handleAddNameChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>URL Slug</FormLabel>
              <ModalInput
                placeholder="hr-technology"
                value={addForm.slug}
                onChange={(e) => setAddForm((prev) => ({ ...prev, slug: e.target.value }))}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Main Heading</FormLabel>
              <ModalInput
                placeholder="e.g. Latest HR Tech Insights and Automation Systems"
                value={addForm.mainHeading}
                onChange={(e) => setAddForm((prev) => ({ ...prev, mainHeading: e.target.value }))}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Status</FormLabel>
              <FormControl fullWidth size="small">
                <Select
                  value={addForm.status}
                  onChange={(e) => setAddForm((prev) => ({ ...prev, status: e.target.value }))}
                  style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
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
              disabled={addingCategory}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {addingCategory ? "Adding..." : "Add Category"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* POPUP MODAL 2: EDIT CATEGORY */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Edit Category</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Update category details and save.
            </p>
          </div>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveEdit}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "70vh", overflowY: "auto" }}>
            <FormGroup>
              <FormLabel>Category Name *</FormLabel>
              <ModalInput
                placeholder="e.g. HR Technology"
                value={editForm.name}
                onChange={handleEditNameChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Main Heading *</FormLabel>
              <ModalInput
                placeholder="e.g. Latest HR Tech Insights and Automation Systems"
                value={editForm.mainHeading}
                onChange={(e) => setEditForm((prev) => ({ ...prev, mainHeading: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Short Description *</FormLabel>
              <textarea
                placeholder="Brief description of category..."
                value={editForm.shortDescription}
                onChange={(e) => setEditForm((prev) => ({ ...prev, shortDescription: e.target.value }))}
                rows={3}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  outline: "none",
                }}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Cover Image</FormLabel>
              <div
                style={{
                  height: "120px",
                  border: "2px dashed #cbd5e1",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  overflow: "hidden",
                  backgroundColor: "#f8fafc",
                }}
                onClick={() => document.getElementById("editCategoryCoverInput").click()}
              >
                {editForm.coverImage ? (
                  <img
                    src={editForm.coverImageFile ? URL.createObjectURL(editForm.coverImageFile) : getImageUrl(editForm.coverImage)}
                    alt="Cover Preview"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#64748b", fontSize: "0.85rem" }}>
                    <CloudUploadOutlinedIcon sx={{ fontSize: 32, color: "#7c3aed" }} />
                    <span>Click to upload / replace Cover Image</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                id="editCategoryCoverInput"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setEditForm((prev) => ({
                      ...prev,
                      coverImageFile: file,
                      coverImage: URL.createObjectURL(file),
                    }));
                  }
                }}
              />
              <ModalInput
                placeholder="Cover image alt text..."
                value={editForm.coverAlt}
                onChange={(e) => setEditForm((prev) => ({ ...prev, coverAlt: e.target.value }))}
                style={{ marginTop: "6px" }}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Title (max 60 chars) *</FormLabel>
              <ModalInput
                placeholder="Meta title..."
                value={editForm.metaTitle}
                maxLength={60}
                onChange={(e) => setEditForm((prev) => ({ ...prev, metaTitle: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Description (max 120 chars) *</FormLabel>
              <textarea
                placeholder="Meta description..."
                value={editForm.metaDescription}
                maxLength={120}
                onChange={(e) => setEditForm((prev) => ({ ...prev, metaDescription: e.target.value }))}
                rows={2}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                  outline: "none",
                }}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Keywords *</FormLabel>
              <ModalInput
                placeholder="hr, tech, payroll..."
                value={editForm.metaKeywords}
                onChange={(e) => setEditForm((prev) => ({ ...prev, metaKeywords: e.target.value }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>URL Slug *</FormLabel>
              <ModalInput
                placeholder="hr-technology"
                value={editForm.slug}
                onChange={(e) => setEditForm((prev) => ({ ...prev, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") }))}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Status *</FormLabel>
              <FormControl fullWidth size="small">
                <Select
                  value={editForm.status}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value }))}
                  style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
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
              disabled={updatingCategory}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {updatingCategory ? "Updating..." : "Update Category"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={openDialogBox} onClose={() => setOpenDialogBox(false)} maxWidth="xs" fullWidth>
        <DialogPadding>
          <ErrorOutlineRoundedIcon sx={{ fontSize: 60, color: "#ef4444" }} />
          <h3 style={{ margin: "12px 0 4px", fontSize: "1.2rem", fontWeight: 700 }}>Delete Category?</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            This category will be permanently removed.
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

export default Categories;

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

const FolderBox = styled("div")`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f3e8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusBadge = styled("span")`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.status === "active" ? "#ecfdf5" : "#f1f5f9")};
  color: ${(props) => (props.status === "active" ? "#10b981" : "#64748b")};
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
