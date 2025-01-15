import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import ReactDOM from "react-dom/client";
import React from "react";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
