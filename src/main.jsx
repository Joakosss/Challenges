import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { SumaryComponent } from "./components/SumaryComponent/SumaryComponet";
import { BlogCard } from "./components/BlogCard/index";
import Botonera from "./components/Botonera/Botonera";

const router = createHashRouter([
  {
    path: "/",
    element: <Botonera />,
  },
  { path: "/blog-ard", element: <BlogCard /> },
  { path: "/sumary-component", element: <SumaryComponent /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
