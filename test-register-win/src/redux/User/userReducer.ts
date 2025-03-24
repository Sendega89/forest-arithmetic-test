import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLoginUser, getRegisterUser } from "./userThunks.ts";
import {  UserType } from "../../mocks/handlers.ts";
import { toast } from "react-toastify";


interface userState {
	user: Omit<UserType, "password"> | null;
	loading: boolean;
	error: string | null;
	currency: string;

}


const initialState: userState = {
	user: null,
	loading: false,
	error: null,
	currency: "UAH",

};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			state.user = action.payload;
		},
		setCurrency: (state, action: PayloadAction<string>) => {
			state.currency = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLoginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getLoginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				toast.success("✅ Registered");
			})
			.addCase(getLoginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
				toast.error("❌ Error!");
			})
			.addCase(getRegisterUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(getRegisterUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				toast.success("✅ Registered");
			})
			.addCase(getRegisterUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
				toast.error("❌ Error!");
			})

	},
});

export const { setUser, setCurrency } = userSlice.actions;
export default userSlice.reducer;
