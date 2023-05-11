import { Layout } from "@/styled-components";
import { HomeTitle } from "./styled-components";
import { useDispatch } from "react-redux";

/**
 * Conviene esta estructura porque si a home lo importamos de manera dinamica con lazy laoding.
 * Esto solamente se cargara cuando lo venga a utilizaarlo
 * De esa manera es mucho mas rapida.
 */

function Home() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <HomeTitle>Home</HomeTitle>
    </Layout>
  );
}
export default Home;
