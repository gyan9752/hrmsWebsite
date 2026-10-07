import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-quill-new/dist/quill.snow.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/store.js";

// Force default mock admin credentials and tokens to unlock all buttons/actions
localStorage.setItem("authToken", "mock-auth-token-123");
localStorage.setItem("user", JSON.stringify({
  name: "Admin User",
  email: "admin@example.com",
  role: "admin",
  gender: "male",
  phone: "1234567890"
}));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
