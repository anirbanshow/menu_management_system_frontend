import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./SidebarSlice";
import AddMenuReducer from "./AddMenuSlice";
import ExpandableMenuReducer from "./ExpandableMenuSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        addMenu: AddMenuReducer,
        expandableMenu: ExpandableMenuReducer,
    }
});

export default store;