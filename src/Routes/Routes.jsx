import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllArticle from "../Components/AllArticle";
import AddArticle from "../Components/AddArticle";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import ArticleDetails from "../Components/ArticleDetails";
import MyArticle from "../Components/MyArticle";
import MyArticleDetails from "../Components/MyArticleDetails";
import UpdateArticle from "../Components/UpdateArticle";
import Subcription from "../Pages/Subcription";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../Dashboard/DashHome";
import AllUsers from "../Dashboard/AllUsers";
import MyProfile from "../Pages/MyProfile";
import AddPublisher from "../Dashboard/AddPublisher";
import AdminRoute from "./AdminRoute";
import AllArticleAdmin from "../Dashboard/AllArticleAdmin";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArticle",
        element: (
          <PrivateRoute>
            <AllArticle></AllArticle>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/articles"),
      },
      {
        path: "/articleDetails/:id",
        element: (
          <PrivateRoute>
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/${params.id}`),
      },
      {
        path: "/addArticle",
        element: (
          <PrivateRoute>
            <AddArticle></AddArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArticle",
        element: (
          <PrivateRoute>
            <MyArticle></MyArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <MyArticleDetails></MyArticleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/updateArticle/:id",
        element: (
          <PrivateRoute>
            <UpdateArticle></UpdateArticle>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allArticles/${params.id}`),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subcription></Subcription>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile/updateProfile/:id",
        element: (
          <PrivateRoute>
        
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:5000/personalUsers/${params.id}`)
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: (
          <AdminRoute>
            <DashHome></DashHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allArticle",
        element: (
          <AdminRoute>
            <AllArticleAdmin></AllArticleAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addPublisher",
        element: (
          <AdminRoute>
            <AddPublisher></AddPublisher>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
