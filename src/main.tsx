import React from "react";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.tsx";
import { AxiosInterceptor } from "./interceptors/AxiosInterceptors.ts";

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
