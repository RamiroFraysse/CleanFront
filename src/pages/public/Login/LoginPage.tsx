/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser, resetUser } from "@/redux/slices/userSlice";
import { loginUser } from "@/services/authService";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Login } from "rf-sb-components";
import * as Yup from "yup";
import { SnackbarUtilities, getValidationError } from "@/utilities";
import { SpanStyled, LinkStyled } from "@/styled-components";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({ email, password }: any) => {
    try {
      const result = await loginUser(email, password);
      dispatch(
        createUser({
          email: result.user.email,
          id: result.user.uid,
          name: result.user.displayName,
        })
      );
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      console.log({ result });
    } catch (error: any) {
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };
  useEffect(() => {
    dispatch(resetUser());
  }, []);
  return (
    <>
      <Login
        formTitle="Login and Exploring Clean Architecture Principles and Best Practices"
        onSubmit={login}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must contain at least 6 characters")
            .required("Required"),
        })}
        initialValues={{ email: "", password: "" }}
        fields={[
          {
            label: "Email",
            name: "email",
            placeholder: "Email",
            autoComplete: "off",
            type: "email",
            id: "email",
          },
          {
            label: "Password",
            name: "password",
            placeholder: "Password",
            autoComplete: "off",
            type: "password",
            id: "password",
          },
        ]}
      />
      <SpanStyled>
        If you don't have an account, please{" "}
        <LinkStyled to={`/${PublicRoutes.REGISTER}`} replace={true}>
          register
        </LinkStyled>{" "}
        to get started.
      </SpanStyled>
    </>
  );
}
export default LoginPage;
