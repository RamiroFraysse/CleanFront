import { IUser, IUserForm } from "@/models";
import { createUser, resetUser } from "@/redux/slices/userSlice";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { loginUser, logoutUser, registerUser } from "@/services";
import { SnackbarUtilities, getValidationError } from "@/utilities";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const createUserAndNavigate = ({ email, id, name }: IUser) => {
    dispatch(
      createUser({
        email: email,
        id: id,
        name: name,
      })
    );
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  const login = async <T extends IUserForm>({ email, password }: T) => {
    try {
      setIsLoading(true);
      const result = await loginUser(email, password);
      createUserAndNavigate({
        email: result?.user?.email || "",
        id: result.user.uid,
        name: result?.user?.displayName || "",
      });
      setIsLoading(false);
      // eslint-disable-next-line
    } catch (error: any) {
      setIsLoading(false);
      console.log({ code: error.code });
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  const register = async ({ email, password }: IUserForm) => {
    try {
      setIsLoading(true);
      const result = await registerUser(email, password);
      createUserAndNavigate({
        email: result?.user?.email || "",
        id: result.user.uid,
        name: result?.user?.displayName || "",
      });
      setIsLoading(false);
      // eslint-disable-next-line
    } catch (error: any) {
      console.log({ code: error.code });
      setIsLoading(false);
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await logoutUser();
      dispatch(resetUser());
      setIsLoading(false);
      navigate(`${PublicRoutes.LOGIN}`, { replace: true });
      // eslint-disable-next-line
    } catch (error: any) {
      console.log({ code: error.code });
      setIsLoading(false);
      SnackbarUtilities.error(getValidationError(error.code));
    }
  };

  return {
    isLoading,
    login,
    register,
    logout,
  };
}
export default useAuth;
