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
        loader:()=>fetch("http://localhost:5000/articles")
         
      },
      {
        path:'/articleDetails/:id',
        element:<ArticleDetails></ArticleDetails>,
        loader:({params})=>fetch(`http://localhost:5000/articles/${params.id}`)
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
