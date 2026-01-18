import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Products/Home";
import AddProduct from "../Pages/Products/AddProduct";
import EditProduct from "../Pages/Products/EditProduct";
import Form from "../components/Form";
import RequiredAuth from "./RequiredAuth";


const router = createBrowserRouter(
  [
    {
      element:<Layout />,
      children:[
        {path:'/Form',element:<Form />},
        {element:<RequiredAuth />, children:[
        {path:'/home',element:<Home />},
        {path:'/Add-Product',element:<AddProduct />},
        {path:'/edit/:id',element:<EditProduct />},]
        }
        
       
      ]
    }
  ]
)

export default router