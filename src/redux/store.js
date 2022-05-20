import { configureStore } from "@reduxjs/toolkit"
import markdown from "./markdown"

export const store = configureStore({
    reducer: {
        markdown: markdown
    }
})