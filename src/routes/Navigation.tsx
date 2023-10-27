import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import AuthGuard from "../guards/AuthGuard";
import RoutesWithNotFound from "./RoutesWithNotFound";
import { lazy } from "react";
import { Logout } from "@/components";

const Login = lazy(() => import("../pages/public/Login/LoginPage"));
const Register = lazy(() => import("../pages/public/Register/RegisterPage"));

const Private = lazy(() => import("../pages/private/Private"));

export default function Navigation() {
  return (
    <BrowserRouter>
      {/* <Logout /> */}
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.REGISTER} element={<Register />} />

        <Route element={<AuthGuard privateValidation={true} />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}
