import { createSlice } from "@reduxjs/toolkit";

const ExpandableMenuSlice = createSlice({
    name: 'addMenu',
    initialState: false,
    reducers: {
        expand: (state, action) => {
            state = action.payload;
            return state;
        },
        collapse: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { expand, collapse } = ExpandableMenuSlice.actions;

export default ExpandableMenuSlice.reducer;