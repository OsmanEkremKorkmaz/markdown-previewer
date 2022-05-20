import { createSlice } from "@reduxjs/toolkit";


const markdown = createSlice({
    name: "markdown",
    initialState: {
        text: "# Markdown *Previewer*"
    },
    reducers: {
        setMarkdownText: (state, action) => {
            state.text = action.payload
        }
    }

})

export const {setMarkdownText} = markdown.actions

export default markdown.reducer