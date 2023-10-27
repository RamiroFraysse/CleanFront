import { configureStore } from "@reduxjs/toolkit";
import { IUser } from "../models";
import { userReducer } from "./slices";

export interface AppStore {
  user: IUser;
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});
