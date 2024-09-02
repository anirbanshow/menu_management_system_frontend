import { configureStore } from "@reduxjs/toolkit";
import AddMenuReducer from "./AddMenuSlice";
import ExpandableMenuReducer from "./ExpandableMenuSlice";
import RootMenuReducer from "./RootMenuSlice";

const store = configureStore({
    reducer: {
        addMenu: AddMenuReducer,
        expandableMenu: ExpandableMenuReducer,
        RootMenu: RootMenuReducer
    }
});

export default store;