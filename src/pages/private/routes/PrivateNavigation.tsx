import { PrivateRoutes } from "@/routes";
import { Navigate, Route } from "react-router";
import RoutesWithNotFound from "@/routes/RoutesWithNotFound";
import { lazy } from "react";
import { Navbar } from "rf-sb-components";
import { useAuth } from "@/hooks";
import {
  MAIN_BLUE_COLOR,
  MAIN_GREEN_COLOR,
  SECONDARY_BLUE_COLOR,
} from "@/utilities";
import Logo from "@/assets/Logo";

const Home = lazy(() => import("../Home/HomePage"));

function Private() {
  const { logout } = useAuth();
  // const navLinks = [
  //   {
  //     label: "Clean architecture",
  //     toUrl: "",
  //   },
  // ];
  const navActions = [
    {
      label: "logout",
      onClick: () => {
        logout();
      },
    },
  ];
  return (
    <>
      <Navbar
        background={`linear-gradient(to right, ${MAIN_GREEN_COLOR}, ${SECONDARY_BLUE_COLOR})`}
        stylesNav={{ position: "sticky", zIndex: 1 }}
        stylesActions={{
          backgroundColor: `${MAIN_BLUE_COLOR}`,
          color: "#fff",
        }}
        logo={<a>{Logo({ width: "100", height: "50" })}</a>}
        navActions={navActions}
        // navLinks={navLinks}
      />
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
    </>
  );
}
export default Private;
