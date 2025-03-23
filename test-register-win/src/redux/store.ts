import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userReducer.ts";
import popupsReducer from "./popupsReducer.ts";
import orderReducer from "./orderReducer.ts";
export const store = configureStore({
	reducer: {
		user: userReducer,
		popups: popupsReducer,
		ordersInfo:orderReducer
	},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;