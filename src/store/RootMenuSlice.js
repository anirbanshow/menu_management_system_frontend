import { createSlice } from "@reduxjs/toolkit";

const RootMenuSlice = createSlice({
    name: 'rootMenu',
    initialState: "",
    reducers: {
        addRootMenu: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { addRootMenu } = RootMenuSlice.actions;

export default RootMenuSlice.reducer;