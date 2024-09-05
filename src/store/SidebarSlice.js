import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: "systems",
    reducers: {
        changesidebar(state, action) {
            state = action.payload;
            return state;
        },
    },
});

export default sidebarSlice.reducer;
export const { changesidebar } = sidebarSlice.actions;