import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Detailes from "../pages/Detailes/Detailes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Sign In/SignIn";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
 {path:'/', element:<Main></Main>, children:[
 
    {path:'/',element:<Home></Home>},
    {path:'/contact', element:<Contact></Contact>},
    {path:'/about', element: <About></About> },
    {path:'/signIn', element: <SignIn></SignIn> },
    {path:'/signup', element: <Signup></Signup> },
    {path:'/detailes', element: <Detailes></Detailes> },
    
    
 ]}
])