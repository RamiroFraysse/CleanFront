import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../routes/routes";
import { Roles } from "../routes/roles";
import { AppStore } from "@/redux/store";

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.user);
  console.log({ userState });
  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
}
export default RoleGuard;
