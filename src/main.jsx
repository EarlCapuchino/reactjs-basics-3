import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';  // Adjust the path as necessary depending on your project structure


import Root from './pages/Root';
import Subjects from './pages/Subjects';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';

const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <Home /> },
    { path: 'subjects', element: <Subjects /> },
    { path: 'subjects/:code', element: <SubjectDetail /> }
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);