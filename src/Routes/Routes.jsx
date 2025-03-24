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
import Business from "../pages/Business/Business";
import Entertainment from "../pages/Entertainment/Entertainment";
import Medical from "../pages/Medical/Medical";
import Search from "../pages/Search/Search";
import Transport from "../pages/Transport/Transport";
import LiveClass from "../pages/LiveClass/LiveClass";
import Libray from "../pages/Libray/Libray";
import Calling from "../pages/Calling/Calling";

  
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
        {
            path:'/business',
            element: <Business></Business>
        },
        {
            path:'/entertainment',
            element: <Entertainment></Entertainment>
        },
        {
            path:'/medical',
            element: <Medical></Medical>
        },
        {
            path:'/search',
            element: <Search></Search>
        },
        {
            path:'/transport',
            element: <Transport></Transport>
        },
        {
            path:'/liveclass',
            element: <LiveClass></LiveClass>
        },
        {
            path:'/libray',
            element: <Libray></Libray>
        },
        {
            path:'/call',
            element: <Calling></Calling>
        },

      ]
    },
  ]);