import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';  // قم بإضافة هذا الاستيراد
import ContactPage from '../pages/ContactPage';  // قم بإضافة هذا الاستيراد
import HomePage from '../pages/HomePage'; // تأكد من المسار الصحيح لاستيراد HomePage


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: '/about', element: <AboutPage /> }, // أضف المسار الخاص بصفحة "نبذة"
  { path: '/contact', element: <ContactPage /> }, // أضف المسار الخاص بصفحة "التواصل"
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
