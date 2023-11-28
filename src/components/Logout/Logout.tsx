import { useAuth } from "@/hooks";

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout}>Log Out</button>;
}
export default Logout;
