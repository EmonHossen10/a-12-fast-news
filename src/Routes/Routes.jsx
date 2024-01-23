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
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: (
          <PrivateRoute>
            <DashHome></DashHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
