import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Tech from "../pages/Tech/Tech";
import Responsibiliti from "../pages/Responsibiliti/Responsibiliti";
import News from "../pages/News/News";
import Communication from "../pages/Communication/Communication";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/service',
            element: <Service></Service>
        },
        {
            path:'/tech',
            element: <Tech></Tech>
        },
        {
            path:'/responsibility',
            element: <Responsibiliti></Responsibiliti>
        },
        {
            path:'/news',
            element: <News></News>
        },
        {
            path:'/communication',
            element: <Communication></Communication>
        },

      ]
    },
  ]);