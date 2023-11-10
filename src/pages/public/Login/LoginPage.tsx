/* eslint-disable @typescript-eslint/no-explicit-any */
import { PublicRoutes } from "@/routes";
import { AccessForm } from "rf-sb-components";
import { SpanStyled, LinkStyled } from "@/styled-components";
import { validationSchemaAccessForm } from "../utilities";
import useAuth from "@/hooks/useAuth";

function LoginPage() {
  const { login } = useAuth();

  return (
    <>
      <AccessForm
        formTitle="Login and Exploring Clean Architecture Principles and Best Practices"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onSubmit={login}
        validationSchema={validationSchemaAccessForm}
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
