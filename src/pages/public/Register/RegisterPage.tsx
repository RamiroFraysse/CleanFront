/* eslint-disable @typescript-eslint/no-explicit-any */
import { PublicRoutes } from "@/routes";
import { AccessForm } from "rf-sb-components";
import { LinkStyled, Span } from "@/styled-components";
import { validationSchemaAccessForm } from "../utilities";
import useAuth from "@/hooks/useAuth";
import { Spinner } from "@/components/icons";

function RegisterPage() {
  const { register, isLoading } = useAuth();

  return (
    <>
      <AccessForm
        formTitle="Register and Exploring Clean Architecture Principles and Best Practices"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onSubmit={register}
        labelBtnSubmit={isLoading ? <Spinner /> : "Submit"}
        btnSubmitProps={{ disabled: isLoading }}
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
      <Span>
        Do you have an account already? Please{" "}
        <LinkStyled to={`/${PublicRoutes.LOGIN}`} replace={true}>
          login
        </LinkStyled>{" "}
        to get started.
      </Span>
    </>
  );
}
export default RegisterPage;
