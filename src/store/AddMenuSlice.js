import { createSlice } from "@reduxjs/toolkit";

const AddMenuSlice = createSlice({
    name: 'addMenu',
    initialState: {},
    reducers: {
        addInfo: (state, action) => {
            state = action.payload;
            return state;
        },
        removeInfo: (state, action) => {
            state = {};
            return state;
        }
    }
});

export const { addInfo, removeInfo } = AddMenuSlice.actions;

export default AddMenuSlice.reducer;