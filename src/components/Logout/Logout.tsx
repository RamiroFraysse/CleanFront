import { resetUser } from "@/redux/slices/userSlice";
import { PublicRoutes } from "@/routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(resetUser());
    navigate(`${PublicRoutes.LOGIN}`, { replace: true });
  };
  return <button onClick={logOut}>Log Out</button>;
}
export default Logout;
