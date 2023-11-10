import { configureStore } from "@reduxjs/toolkit";
import { IUser } from "../models";
import { userReducer } from "./slices";

export interface AppStore {
  user: IUser;
}

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});
