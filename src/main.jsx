// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from './App.jsx'
// import HomeLayout from './Layout/HomeLayout.jsx';
// import About from './Home/About.jsx';
// import Resume from './Home/Resume.jsx';
// import HeroBanner from './Home/Banner.jsx';
// import Contact from './Home/Contact.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HeroBanner />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/resume",
//     element: <Resume />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/projects",
//     element: <div className="text-white text-3xl p-10">Projects Page Coming Soon!</div>, // temporary projects page
//   },
// ]);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <RouterProvider router={router} />
//   </StrictMode>,
// )


// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HeroBanner from './Home/Banner';
import About from './Home/About';
import Resume from './Home/Resume';
import Contact from './Home/Contact';
import FeaturedProjects from './Home/Project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroBanner />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/projects',
    element: <FeaturedProjects></FeaturedProjects>
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
