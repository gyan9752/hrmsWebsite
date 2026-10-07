import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import Blogs from "../pages/Blogs";
import AddBlogs from "../pages/AddBlogs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { GuestOnly, RequireAuth, RequireAdmin } from "./protectedRoutes";
import EditBlog from "../pages/EditBlog";
import Categories from "../pages/Categories";
import AddNewCategory from "../pages/AddNewCategory";
import EditCategories from "../pages/EditCategories";
import ViewBlog from "../pages/ViewBlog";
import ContactList from "../pages/ContactList";
import Questions from "../pages/Questions";
import DynamicBlogImage from "../pages/DynamicBlogImage";
import EditBlogImage from "../pages/EditBlogImage";
import AddBlogImage from "../pages/AddBlogImage";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestOnly>
            <Login />
          </GuestOnly>
        }
      />
      <Route
        path="/register"
        element={
          <GuestOnly>
            <Register />
          </GuestOnly>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <AdminDashboard />
          </RequireAuth>
        }
      >
        <Route index element={<Blogs />} />
        <Route path="categories" element={<Categories />} />
        <Route path="dynamic-blog-image" element={<RequireAdmin><DynamicBlogImage /></RequireAdmin>} />
        <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
        <Route path="settings" element={<Settings />} />
        <Route path="users/add-user" element={<RequireAdmin><AddUser /></RequireAdmin>} />
        <Route path="users/edit-user/:id" element={<RequireAdmin><EditUser /></RequireAdmin>} />
        <Route path="contacts" element={<RequireAdmin><ContactList /></RequireAdmin>} />
        <Route path="questions" element={<RequireAdmin><Questions /></RequireAdmin>} />
        <Route path="add-blogs" element={<AddBlogs />} />
        <Route path="add-blog-image" element={<RequireAdmin><AddBlogImage /></RequireAdmin>} />
        <Route path="add-categories" element={<AddNewCategory />} />
        <Route path="edit-blog/:slug" element={<EditBlog />} />
        <Route path="edit-blog-image/:id" element={<RequireAdmin><EditBlogImage /></RequireAdmin>} />
        <Route path="blog/:slug" element={<ViewBlog />} />
        <Route path="edit-categories/:id" element={<EditCategories />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
