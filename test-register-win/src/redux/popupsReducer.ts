import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface popupsState {
	openLoginPopup: LoginPopupType;

}

type LoginPopupType = {
	open: boolean;
	type?: "login" | "register";
};
const initialState: popupsState = {
	openLoginPopup: { open: false },
};

const popupsSlice = createSlice({
	name: "popups",
	initialState,
	reducers: {
		setLoginPopup: (state, action: PayloadAction<LoginPopupType>) => {
			state.openLoginPopup = action.payload;
		},
	},
});

export const { setLoginPopup } = popupsSlice.actions;
export default popupsSlice.reducer;
