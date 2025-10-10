import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./shell/AppLayout.tsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  { element: <AppLayout />, children: [
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:slug", element: <ProjectDetail /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
