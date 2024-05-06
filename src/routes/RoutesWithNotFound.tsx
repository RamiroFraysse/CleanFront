import { H1, H2 } from "@/styled-components";
import { Route, Routes } from "react-router";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<H2 $color="red">Route not found</H2>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
