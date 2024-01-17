import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllArticle from "../Components/AllArticle";
import AddArticle from "../Components/AddArticle";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";

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
        path:"/allArticle",
        element:<AllArticle></AllArticle>,
        loader: () => fetch("https://fast-news-server.vercel.app/articles"),
      },
      {
        path:"/addArticle",
        element:<PrivateRoute><AddArticle></AddArticle></PrivateRoute>
      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/registration",
      element:<Registration></Registration>
     }
    ],
  },
]);

export default router;
