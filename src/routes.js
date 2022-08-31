import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Read from "./pages/Read";
import Search from "./pages/Search";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tim-kiem",
      element: <Search />,
    },
    {
      path: "/read/:id",
      element: <Read />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
