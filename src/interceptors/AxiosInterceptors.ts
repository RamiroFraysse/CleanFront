import { getValidationError } from "@/utilities";
import { SnackbarUtilities } from "@/utilities/snackbarManager";
import axios, { AxiosRequestConfig,AxiosResponse } from "axios";

export const AxiosInterceptor = () => {
  const updateHeader = (config: AxiosRequestConfig) => {
    const token = `Bearer ${localStorage.getItem("token") || '123'}`;
    config.headers = {
      ...config.headers,
      Authorization: token,
      "Content-Type": "application/json",
    };
    return config;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  axios.interceptors.request.use((config) => {
    const updatedConfig = updateHeader(config);
    return updatedConfig;
  });

  axios.interceptors.response.use(
    (response:AxiosResponse) => {return response;},
    (error)=>{
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  )
};
