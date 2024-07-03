import React from 'react';
import AppLayout from '../Layout/Index';
import { redirect } from 'react-router-dom';
import Home from '../views/Home/Index';
import { element } from 'prop-types';
import AboutUs from '../views/AboutUs/Index';

export const routes = [
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      {
        index: true,
        loader: async () => redirect('home') 
      },
      {
        path: 'home',
        element: React.createElement(Home)
      },
      {
        path: 'about-us',
        element: React.createElement(AboutUs)
      }
    ]
  },
];
