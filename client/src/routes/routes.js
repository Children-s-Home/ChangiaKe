import React from "react";
import AppLayout from "../Layout/Index";
import { redirect } from "react-router-dom";
import Home from "../views/Home/Index";
import AboutUs from "../views/AboutUs/Index";
import Discover from "../views/Discover/Index";
import Details from "../views/CenterDetails/Index";
import Services from "../views/Services/Index";
import Auth from "@/views/Auth/Index";
import Blog from "@/views/Blog/Index";
import UserLogIn from "@/views/User";

export const routes = [
  {
    path: "/",
    element: React.createElement(AppLayout),
    children: [
      {
        index: true,
        loader: async () => redirect("home"),
      },
      {
        path: "home",
        element: React.createElement(Home),
      },
      {
        path: "about-us",
        element: React.createElement(AboutUs),
      },
      {
        path: "discover",
        element: React.createElement(Discover),
      },
      {
        path: "details/:id",
        element: React.createElement(Details),
      },
      {
        path: "services",
        element: React.createElement(Services),
      },
      {
        path: "auth/:type",
        element: React.createElement(Auth),
      },
      {
        path: "blog",
        element: React.createElement(Blog),
      },
      {
        path: 'user',
        element: React.createElement(UserLogIn)
      }
    ],
  },
];
