import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../containers/header";
import Footer from "../containers/footer";
import About from "../../pages/About";
import Works from "../../pages/Works";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { 
        path: "/works", 
        element: <Works /> 
      },
    ],
  },
]);

export default routes;
