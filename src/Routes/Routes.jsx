import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllArticle from "../Components/AllArticle";
import AddArticle from "../Components/AddArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/articles"),
      },
      {
        path:"/allArticle",
        element:<AllArticle></AllArticle>,
        loader: () => fetch("http://localhost:5000/articles"),
      },
      {
        path:"/addArticle",
        element:<AddArticle></AddArticle>
      }
    ],
  },
]);

export default router;
