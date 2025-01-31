import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../components/VerifyUser/Register";
import Login from "../components/VerifyUser/Login";
import Categorys from "../pages/routepages/Categorys";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
              path:'/',
              element: <Home></Home>
            }, 
            {
              path:'category',
              element: <Categorys></Categorys>
            }, 
            {
              path:'register',
              element: <Register></Register>
            }, 
            {
              path:'login',
              element: <Login></Login>
            }, 
            {
              path:'blogs',
              element: <Blogs></Blogs>
            }, 
            {
              path:'about',
              element: <About></About>
            } 
        ]
    },
  ]);

export default router;