import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer"
import chapters from "./chapters/chaptersReducer"
export const store = configureStore({
    reducer: {
        user,
        chapters
    }
})
