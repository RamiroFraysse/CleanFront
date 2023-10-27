import { PrivateRoutes } from "@/routes";
import { Navigate, Route } from "react-router";
import RoutesWithNotFound from "@/routes/RoutesWithNotFound";
import { lazy } from "react";
import { Navbar } from "rf-sb-components";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

function Private() {
  const navLinks = [
    {
      label: "Home",
      toUrl: "",
    },
    {
      label: "About",
      toUrl: "",
    },
    {
      label: "Gallery",
      toUrl: "",
    },
    {
      label: "Services",
      toUrl: "",
    },
    {
      label: "Contact",
      toUrl: "",
    },
  ];

  return (
    <>
      <Navbar
        background="linear-gradient(to right, #6EE7B7, #1d4e89)"
        linksColor="#fff"
        logo={<>logo</>}
        navLinks={navLinks}
      />
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
    </>
  );
}
export default Private;
