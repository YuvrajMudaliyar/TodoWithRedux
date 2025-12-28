import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.jsx";
import themeReducer from "../features/theme/themeSlice.jsx";

export const store = configureStore({
  reducer: {
    app: todoReducer,
    theme: themeReducer,
  },
});
