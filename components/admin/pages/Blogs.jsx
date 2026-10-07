import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import ReactQuill from "react-quill-new";
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
  Fab,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ImageUploader from "../components/ImageUploader";
import {
  useDeleteBlogsMutation,
  useGetAllBlogsQuery,
  useUpdateBlogStatusMutation,
  useAddNewBlogMutation,
  useUpdateBlogByIdMutation,
} from "../features/api/blogApi";
import { useGetAllCategoriesListQuery } from "../features/api/categoryApi";
import toast from "react-hot-toast";


const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "color",
  "background",
  "align",
  "link",
  "image",
  "video",
];

const tableHeadItems = [
  "THUMBNAIL",
  "TITLE",
  "CATEGORY",
  "AUTHOR",
  "CREATED AT",
  "STATUS",
  "VIEWS",
  "ACTIONS",
];

const INITIAL_FORM_STATE = {
  title: "",
  shortDescription: "",
  content: "",
  category: "",
  coverImage: "/assets/images/blog_payroll_automation.webp",
  coverImageAlt: "",
  thumbnailImage: "/assets/images/blog_payroll_automation.webp",
  thumbnailImageAlt: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  slug: "",
  status: "show",
};

const Blogs = () => {
  const { isDark } = useDarkMode();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  // Filter state
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Check user role
  const userString = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const currentUser = userString ? JSON.parse(userString) : null;
  const isAuthor = (currentUser?.role || "admin").toLowerCase() === "author";

  const { data: categoriesData } = useGetAllCategoriesListQuery();
  const categoriesList = categoriesData?.data || [];

  // Add Blog Modal State
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addForm, setAddForm] = useState(INITIAL_FORM_STATE);

  // Edit Blog Modal State
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editForm, setEditForm] = useState(INITIAL_FORM_STATE);

  // Fullscreen Rich Text Editor Modal State
  const [editorFullscreen, setEditorFullscreen] = useState(false);
  const [fullscreenTarget, setFullscreenTarget] = useState("add"); // "add" or "edit"

  // Date Filter State
  const [dateFilter, setDateFilter] = useState("all");
  const [dateLabel, setDateLabel] = useState("Filter by Date");
  const [dateMenuAnchor, setDateMenuAnchor] = useState(null);
  const [openCustomDateDialog, setOpenCustomDateDialog] = useState(false);
  const [customFromDate, setCustomFromDate] = useState("");
  const [customToDate, setCustomToDate] = useState("");

  const { data, isLoading, refetch } = useGetAllBlogsQuery({
    page,
    search: searchTerm,
  });

  const [deleteBlogs, { isLoading: deleteLoading }] = useDeleteBlogsMutation();
  const [updateBlogStatus] = useUpdateBlogStatusMutation();
  const [addNewBlog, { isLoading: addingBlog }] = useAddNewBlogMutation();
  const [updateBlogById, { isLoading: updatingBlog }] = useUpdateBlogByIdMutation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // Add Form Handlers
  const handleOpenAddModal = () => {
    const cmsSettings = JSON.parse(localStorage.getItem("cms_settings") || "{}");
    setAddForm({
      ...INITIAL_FORM_STATE,
      status: cmsSettings.defaultStatus || "show",
    });
    setOpenAddModal(true);
  };

  const handleAddTitleChange = (e) => {
    const val = e.target.value;
    const cmsSettings = JSON.parse(localStorage.getItem("cms_settings") || "{}");
    const shouldAutoSlug = cmsSettings.autoSlug !== false;

    setAddForm((prev) => ({
      ...prev,
      title: val,
      slug: shouldAutoSlug ? val.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-") : prev.slug,
    }));
  };

  const handleAddFormChange = (field, val) => {
    setAddForm((prev) => ({ ...prev, [field]: val }));
  };

  // Open Edit Modal
  const handleOpenEditModal = (blog) => {
    setEditingBlogId(blog._id || blog.slug);
    setEditForm({
      title: blog.title || "",
      shortDescription: blog.shortDescription || "",
      content: blog.content || "",
      category: blog.category || "",
      coverImage: blog.coverImage || blog.featureImage || "/assets/images/blog_payroll_automation.webp",
      coverImageAlt: blog.coverImageAlt || "",
      thumbnailImage: blog.thumbnailImage || blog.featureImage || "/assets/images/blog_payroll_automation.webp",
      thumbnailImageAlt: blog.thumbnailImageAlt || "",
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      metaKeywords: blog.metaKeywords || "",
      slug: blog.slug || "",
      status: blog.status || "show",
    });
    setOpenEditModal(true);
  };

  const handleEditTitleChange = (e) => {
    const val = e.target.value;
    setEditForm((prev) => ({
      ...prev,
      title: val,
      slug: val.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-"),
    }));
  };

  const handleEditFormChange = (field, val) => {
    setEditForm((prev) => ({ ...prev, [field]: val }));
  };

  // Submit Add Blog
  const handleSaveAddBlog = async (e) => {
    e.preventDefault();
    if (!addForm.title.trim()) {
      toast.error("Blog Title is required");
      return;
    }
    if (!addForm.shortDescription.trim()) {
      toast.error("Short Description is required");
      return;
    }
    if (!addForm.content || addForm.content === "<p><br></p>") {
      toast.error("Blog Content is required");
      return;
    }
    if (!addForm.category) {
      toast.error("Please choose a category");
      return;
    }
    if (!addForm.metaKeywords.trim()) {
      toast.error("Meta Keywords are required");
      return;
    }

    try {
      await addNewBlog({ formData: addForm });
      toast.success("Blog post added successfully!");
      setOpenAddModal(false);
      setAddForm(INITIAL_FORM_STATE);
      refetch();
    } catch (err) {
      toast.error("Failed to add blog post");
    }
  };

  // Submit Edit Blog
  const handleSaveEditBlog = async (e) => {
    e.preventDefault();
    if (!editForm.title.trim()) {
      toast.error("Blog Title is required");
      return;
    }

    try {
      await updateBlogById({ id: editingBlogId, formData: editForm });
      toast.success("Blog post updated successfully!");
      setOpenEditModal(false);
      refetch();
    } catch (err) {
      toast.error("Failed to update blog post");
    }
  };

  const handleOpenDeleteDialog = (id) => {
    if (isAuthor) {
      toast.error("Authors are not authorized to delete blogs. Admin access required.");
      return;
    }
    setBlogToDelete(id);
    setOpenDialogBox(true);
  };

  const handleDelete = async () => {
    if (!blogToDelete) return;
    try {
      await deleteBlogs({ id: blogToDelete });
      toast.success("Blog post deleted successfully");
      setOpenDialogBox(false);
      refetch();
    } catch (err) {
      toast.error("Failed to delete blog post");
    }
  };

  const handleToggleStatus = async (blog) => {
    const newStatusVal = blog.status === "show" ? "hide" : "show";
    try {
      await updateBlogStatus({ id: blog._id, status: newStatusVal });
      toast.success(`Blog status set to ${newStatusVal === "show" ? "Published" : "Draft"}`);
      refetch();
    } catch (err) {
      toast.error("Failed to update blog status");
    }
  };

  const openFullscreenEditor = (target) => {
    setFullscreenTarget(target);
    setEditorFullscreen(true);
  };

  const blogsList = data?.data || [];

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

  const filteredBlogs = blogsList.filter((blog) => {
    const matchesSearch =
      (blog.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.category || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.author || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "show" && blog.status === "show") ||
      (statusFilter === "hide" && blog.status === "hide");

    const matchesCategory =
      categoryFilter === "all" ||
      (blog.category || "").toLowerCase() === categoryFilter.toLowerCase();

    const matchesDateFilter = matchesDate(blog.createdAt || blog.updatedAt);

    return matchesSearch && matchesStatus && matchesCategory && matchesDateFilter;
  });

  const totalCount = filteredBlogs.length;
  const paginatedBlogs = filteredBlogs.slice((page - 1) * 10, page * 10);

  return (
    <PageContainer dark={isDark ? 1 : 0}>
      {/* Header Row */}
      <HeaderRow>
        <div>
          <PageTitle>Blogs</PageTitle>
          <PageSubtitle>Manage and organize your blog posts.</PageSubtitle>
        </div>
        <PrimaryButton variant="contained" component={NavLink} to="/add-blogs">
          <AddIcon fontSize="small" />
          Add New Blog
        </PrimaryButton>
      </HeaderRow>

      {/* Search Bar & Filter Controls */}
      <FilterRow>
        <SearchWrapper>
          <SearchIcon className="search-icon" />
          <SearchInput
            placeholder="Search blogs by title, category, or author..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchWrapper>

        <FilterControlsGroup>
          {/* Category Filter */}
          <FormControl size="small" style={{ minWidth: "160px" }}>
            <Select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setPage(1);
              }}
              displayEmpty
              style={{ borderRadius: "10px", fontSize: "0.875rem", backgroundColor: "#ffffff" }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categoriesList.map((cat) => (
                <MenuItem key={cat._id} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Status Filter */}
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

          {(statusFilter !== "all" || categoryFilter !== "all" || dateFilter !== "all" || searchTerm) && (
            <Button
              variant="text"
              size="small"
              onClick={() => {
                setStatusFilter("all");
                setCategoryFilter("all");
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
        </FilterControlsGroup>
      </FilterRow>

      {/* Main Table Card */}
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
                {paginatedBlogs.length > 0 ? (
                  paginatedBlogs.map((blog) => (
                    <TableRow key={blog._id} hover sx={{ "&:hover": { bgcolor: "#f8fafc" } }}>
                      <TableCell>
                        <ThumbImg
                          src={blog.thumbnailImage || blog.featureImage || "/assets/images/blogs_image_prev.webp"}
                          alt={blog.title}
                          onError={(e) => {
                            e.target.src = "/assets/images/blogs_image_prev.webp";
                          }}
                        />
                      </TableCell>
                      <TableCell style={{ fontWeight: 600, color: "#0f172a", maxWidth: "240px" }}>
                        {blog.title}
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {blog.category || "General"}
                      </TableCell>
                      <TableCell style={{ color: "#64748b" }}>
                        {blog.author || "Admin User"}
                      </TableCell>
                      <TableCell style={{ color: "#64748b", fontSize: "0.85rem" }}>
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "-"}
                      </TableCell>
                      <TableCell>
                        <StatusBadge
                          status={blog.status}
                          onClick={() => handleToggleStatus(blog)}
                          title="Click to toggle status"
                        >
                          {blog.status === "show" ? "Published" : "Draft"}
                        </StatusBadge>
                      </TableCell>
                      <TableCell style={{ color: "#64748b", fontWeight: 600 }}>
                        {blog.viewCount ?? blog.views ?? 0}
                      </TableCell>
                      <TableCell align="center">
                        <ActionGroup>
                          <Tooltip title="Edit Post">
                            <IconButton size="small" component={NavLink} to={`/edit-blog/${blog.slug || blog._id}`}>
                              <ModeEditOutlineOutlinedIcon fontSize="small" style={{ color: "#ff5a1f" }} />
                            </IconButton>
                          </Tooltip>

                          {!isAuthor && (
                            <Tooltip title="Delete Post">
                              <IconButton size="small" onClick={() => handleOpenDeleteDialog(blog._id)}>
                                <DeleteOutlinedIcon fontSize="small" style={{ color: "#ef4444" }} />
                              </IconButton>
                            </Tooltip>
                          )}
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
                        <EmptyTitle>No blogs found</EmptyTitle>
                        <EmptySub>Get started by creating your first blog post.</EmptySub>
                        <AddButtonOutline
                          variant="outlined"
                          onClick={handleOpenAddModal}
                          style={{ marginTop: "12px" }}
                        >
                          <AddIcon fontSize="small" /> Add New Blog
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
              Showing {paginatedBlogs.length} of {totalCount} blogs
            </ShowingText>
            {totalCount > 10 && (
              <Pagination
                count={Math.ceil(totalCount / 10)}
                page={page}
                onChange={(_, val) => setPage(val)}
                sx={{
                  "& .Mui-selected": {
                    bgcolor: "#7c3aed !important",
                    color: "#ffffff",
                  },
                }}
              />
            )}
          </TableFooterRow>
        </CardContainer>
      )}

      {/* Mobile Floating Action Button (FAB) */}
      <MobileFab onClick={handleOpenAddModal} color="primary" aria-label="Add New Blog">
        <AddIcon />
      </MobileFab>

      {/* POPUP MODAL 1: ADD NEW BLOG */}
      <Dialog
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Add New Blog</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Upload images and fill in article metadata.
            </p>
          </div>
          <IconButton onClick={() => setOpenAddModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveAddBlog}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <FormGroup>
              <FormLabel>Blog Title *</FormLabel>
              <ModalInput
                placeholder="Enter blog title..."
                value={addForm.title}
                onChange={handleAddTitleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Short Description *</FormLabel>
              <ModalTextArea
                rows={3}
                placeholder="Enter brief short description..."
                value={addForm.shortDescription}
                onChange={(e) => handleAddFormChange("shortDescription", e.target.value)}
                required
              />
            </FormGroup>

            {/* WYSIWYG Rich Text Editor for Content with Expand Button */}
            <FormGroup>
              <EditorHeaderRow>
                <FormLabel>Blog Content (Rich Text Editor) *</FormLabel>
                <ExpandBtn size="small" onClick={() => openFullscreenEditor("add")}>
                  <OpenInFullIcon style={{ fontSize: 16 }} />
                  <span>Expand Editor</span>
                </ExpandBtn>
              </EditorHeaderRow>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "1px solid #cbd5e1" }}>
                <ReactQuill
                  theme="snow"
                  value={addForm.content}
                  onChange={(val) => handleAddFormChange("content", val)}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your article content with headings, lists, bold text, links..."
                  style={{ height: "200px", marginBottom: "42px" }}
                />
              </div>
            </FormGroup>

            <FormRow style={{ marginTop: "12px" }}>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Category *</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={addForm.category}
                    onChange={(e) => handleAddFormChange("category", e.target.value)}
                    displayEmpty
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="" disabled>
                      Choose category
                    </MenuItem>
                    <MenuItem value="HR Technology">HR Technology</MenuItem>
                    <MenuItem value="HR Operations">HR Operations</MenuItem>
                    <MenuItem value="Compliance">Compliance</MenuItem>
                    <MenuItem value="Development">Development</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Slug</FormLabel>
                <ModalInput
                  placeholder="enter-slug-here"
                  value={addForm.slug}
                  onChange={(e) => handleAddFormChange("slug", e.target.value)}
                />
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Status</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={addForm.status}
                    onChange={(e) => handleAddFormChange("status", e.target.value)}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="show">Published</MenuItem>
                    <MenuItem value="hide">Draft</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            {/* Images & Alt Texts Section with Drag & Drop */}
            <SectionHeaderTitle>Images & Alt Texts</SectionHeaderTitle>
            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <ImageUploader
                  label="Cover Image (Drag & Drop or Click)"
                  value={addForm.coverImage}
                  onChange={(url) => handleAddFormChange("coverImage", url)}
                  placeholder="Drag & drop cover image here or click to browse"
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Cover Image Alt Text</FormLabel>
                <ModalInput
                  placeholder="Cover image alt text..."
                  value={addForm.coverImageAlt}
                  onChange={(e) => handleAddFormChange("coverImageAlt", e.target.value)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <ImageUploader
                  label="Thumbnail Image (Drag & Drop or Click)"
                  value={addForm.thumbnailImage}
                  onChange={(url) => handleAddFormChange("thumbnailImage", url)}
                  placeholder="Drag & drop thumbnail image here or click to browse"
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Thumbnail Alt Text</FormLabel>
                <ModalInput
                  placeholder="Thumbnail alt text..."
                  value={addForm.thumbnailImageAlt}
                  onChange={(e) => handleAddFormChange("thumbnailImageAlt", e.target.value)}
                />
              </FormGroup>
            </FormRow>

            {/* SEO Meta Section */}
            <SectionHeaderTitle>SEO Meta Tags</SectionHeaderTitle>
            <FormGroup>
              <FormLabel>Meta Title (max 60 characters)</FormLabel>
              <ModalInput
                placeholder="Enter meta title (max 60 characters)"
                maxLength={60}
                value={addForm.metaTitle}
                onChange={(e) => handleAddFormChange("metaTitle", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Description (max 120 characters)</FormLabel>
              <ModalTextArea
                rows={2}
                maxLength={120}
                placeholder="Enter meta description (max 120 characters)"
                value={addForm.metaDescription}
                onChange={(e) => handleAddFormChange("metaDescription", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Keywords *</FormLabel>
              <ModalTextArea
                rows={3}
                placeholder="Enter meta keywords separated by commas (e.g. hr, software, payroll)..."
                value={addForm.metaKeywords}
                onChange={(e) => handleAddFormChange("metaKeywords", e.target.value)}
                required
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
              disabled={addingBlog}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {addingBlog ? "Adding..." : "Add New Blog"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* POPUP MODAL 2: EDIT BLOG */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ style: { borderRadius: "16px", padding: "4px" } }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>Edit Blog Post</span>
            <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#64748b" }}>
              Update blog images and content details.
            </p>
          </div>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSaveEditBlog}>
          <DialogContent dividers style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <FormGroup>
              <FormLabel>Blog Title *</FormLabel>
              <ModalInput
                placeholder="Enter blog title..."
                value={editForm.title}
                onChange={handleEditTitleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Short Description *</FormLabel>
              <ModalTextArea
                rows={3}
                placeholder="Enter brief short description..."
                value={editForm.shortDescription}
                onChange={(e) => handleEditFormChange("shortDescription", e.target.value)}
                required
              />
            </FormGroup>

            {/* WYSIWYG Rich Text Editor for Content with Expand Button */}
            <FormGroup>
              <EditorHeaderRow>
                <FormLabel>Blog Content (Rich Text Editor) *</FormLabel>
                <ExpandBtn size="small" onClick={() => openFullscreenEditor("edit")}>
                  <OpenInFullIcon style={{ fontSize: 16 }} />
                  <span>Expand Editor</span>
                </ExpandBtn>
              </EditorHeaderRow>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", border: "1px solid #cbd5e1" }}>
                <ReactQuill
                  theme="snow"
                  value={editForm.content}
                  onChange={(val) => handleEditFormChange("content", val)}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your article content with headings, lists, bold text, links..."
                  style={{ height: "200px", marginBottom: "42px" }}
                />
              </div>
            </FormGroup>

            <FormRow style={{ marginTop: "12px" }}>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Category *</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={editForm.category}
                    onChange={(e) => handleEditFormChange("category", e.target.value)}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="HR Technology">HR Technology</MenuItem>
                    <MenuItem value="HR Operations">HR Operations</MenuItem>
                    <MenuItem value="Compliance">Compliance</MenuItem>
                    <MenuItem value="Development">Development</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>

              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Slug</FormLabel>
                <ModalInput
                  placeholder="enter-slug-here"
                  value={editForm.slug}
                  onChange={(e) => handleEditFormChange("slug", e.target.value)}
                />
              </FormGroup>

              <FormGroup style={{ width: "130px" }}>
                <FormLabel>Status</FormLabel>
                <FormControl fullWidth size="small">
                  <Select
                    value={editForm.status}
                    onChange={(e) => handleEditFormChange("status", e.target.value)}
                    style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                  >
                    <MenuItem value="show">Published</MenuItem>
                    <MenuItem value="hide">Draft</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </FormRow>

            {/* Images & Alt Texts Section with Drag & Drop */}
            <SectionHeaderTitle>Images & Alt Texts</SectionHeaderTitle>
            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <ImageUploader
                  label="Cover Image (Drag & Drop or Click)"
                  value={editForm.coverImage}
                  onChange={(url) => handleEditFormChange("coverImage", url)}
                  placeholder="Drag & drop cover image here or click to browse"
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Cover Image Alt Text</FormLabel>
                <ModalInput
                  placeholder="Cover image alt text..."
                  value={editForm.coverImageAlt}
                  onChange={(e) => handleEditFormChange("coverImageAlt", e.target.value)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup style={{ flex: 1 }}>
                <ImageUploader
                  label="Thumbnail Image (Drag & Drop or Click)"
                  value={editForm.thumbnailImage}
                  onChange={(url) => handleEditFormChange("thumbnailImage", url)}
                  placeholder="Drag & drop thumbnail image here or click to browse"
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                <FormLabel>Thumbnail Alt Text</FormLabel>
                <ModalInput
                  placeholder="Thumbnail alt text..."
                  value={editForm.thumbnailImageAlt}
                  onChange={(e) => handleEditFormChange("thumbnailImageAlt", e.target.value)}
                />
              </FormGroup>
            </FormRow>

            {/* SEO Meta Section */}
            <SectionHeaderTitle>SEO Meta Tags</SectionHeaderTitle>
            <FormGroup>
              <FormLabel>Meta Title (max 60 characters)</FormLabel>
              <ModalInput
                placeholder="Enter meta title (max 60 characters)"
                maxLength={60}
                value={editForm.metaTitle}
                onChange={(e) => handleEditFormChange("metaTitle", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Description (max 120 characters)</FormLabel>
              <ModalTextArea
                rows={2}
                maxLength={120}
                placeholder="Enter meta description (max 120 characters)"
                value={editForm.metaDescription}
                onChange={(e) => handleEditFormChange("metaDescription", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Meta Keywords *</FormLabel>
              <ModalTextArea
                rows={3}
                placeholder="Enter meta keywords separated by commas (e.g. hr, software, payroll)..."
                value={editForm.metaKeywords}
                onChange={(e) => handleEditFormChange("metaKeywords", e.target.value)}
                required
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
              disabled={updatingBlog}
              sx={{
                bgcolor: "#ff5a1f",
                "&:hover": { bgcolor: "#e04b16" },
                textTransform: "none",
                fontWeight: 700,
                padding: "8px 24px",
                borderRadius: "8px",
              }}
            >
              {updatingBlog ? "Updating..." : "Update Blog"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* POPUP MODAL 3: FULLSCREEN RICH TEXT EDITOR */}
      <Dialog
        fullScreen
        open={editorFullscreen}
        onClose={() => setEditorFullscreen(false)}
        PaperProps={{ style: { backgroundColor: "#f8fafc" } }}
      >
        <FullscreenHeader>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/assets/images/hrvico-logo.svg" alt="HRVICO" style={{ height: "24px" }} />
            <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a" }}>
              Full-Screen Rich Text Article Editor ({fullscreenTarget === "add" ? addForm.title || "New Article" : editForm.title || "Editing Article"})
            </span>
          </div>
          <Button
            variant="contained"
            startIcon={<CloseFullscreenIcon />}
            onClick={() => setEditorFullscreen(false)}
            sx={{ bgcolor: "#ff5a1f", "&:hover": { bgcolor: "#e04b16" }, textTransform: "none", fontWeight: 700, borderRadius: "8px" }}
          >
            Done / Minimize Editor
          </Button>
        </FullscreenHeader>

        <FullscreenContent>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
            <ReactQuill
              theme="snow"
              value={fullscreenTarget === "add" ? addForm.content : editForm.content}
              onChange={(val) => {
                if (fullscreenTarget === "add") handleAddFormChange("content", val);
                else handleEditFormChange("content", val);
              }}
              modules={quillModules}
              formats={quillFormats}
              placeholder="Write your article content in full-screen distraction-free mode..."
              style={{ height: "calc(100vh - 220px)" }}
            />
          </div>
        </FullscreenContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialogBox} onClose={() => setOpenDialogBox(false)} maxWidth="xs" fullWidth>
        <DialogPadding>
          <ErrorOutlineRoundedIcon sx={{ fontSize: 60, color: "#ef4444" }} />
          <h3 style={{ margin: "12px 0 4px", fontSize: "1.2rem", fontWeight: 700 }}>Delete Blog Post?</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
            This action cannot be undone. This post will be permanently removed.
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

export default Blogs;

const PageContainer = styled("div")`
  padding: 32px;
  background-color: ${({ dark }) => (dark ? "#000000" : "#f8fafc")};
  min-height: calc(100vh - 72px);
  position: relative;
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

const FilterControlsGroup = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
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
  color: #7c3aed;
  border-color: #7c3aed;
  font-weight: 700;
  text-transform: none;
  border-radius: 10px;
  padding: 8px 18px;
  display: flex;
  gap: 6px;

  &:hover {
    border-color: #6d28d9;
    background-color: #f3e8ff;
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

const EditorHeaderRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpandBtn = styled(Button)`
  color: #7c3aed;
  text-transform: none;
  font-weight: 700;
  font-size: 0.78rem;
  display: flex;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 6px;

  &:hover {
    background-color: #f3e8ff;
  }
`;

const SectionHeaderTitle = styled("h4")`
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  margin: 12px 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid #e2e8f0;
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

const ModalTextArea = styled("textarea")`
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding: 10px 14px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #ff5a1f;
    box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.1);
  }
`;

const FullscreenHeader = styled("div")`
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const FullscreenContent = styled("div")`
  padding: 24px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

const MobileFab = styled(Fab)`
  display: none;
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #7c3aed;
  color: #ffffff;

  &:hover {
    background-color: #6d28d9;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
