import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage";
import AddProduct from "../page/addProduct/AddProduct";
import Home from "../page/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);
