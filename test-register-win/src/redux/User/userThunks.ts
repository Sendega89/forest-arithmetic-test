import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/api.ts";
import { setLoginPopup } from "../popupsReducer.ts";

export const getLoginUser = createAsyncThunk(
	"auth",
	async ({ email, password,setStatus }: { email: string; password: string,setStatus:any }, thunkAPI) => {
		try {
			const dispatch = thunkAPI.dispatch;
			const response = await userAPI.login( email, password );
			const data = response.data;
			localStorage.setItem("tokenTest", JSON.stringify(data.token));
			if (!response) {
				throw new Error(data.message || "Failed to register");
			}
			dispatch(setLoginPopup({ open: false,}))
			return data.user;
		} catch (error: any) {
			setStatus(error.response.data.message)
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const getRegisterUser = createAsyncThunk(
	"register",
	async ({ email, password,confirmPassword,setStatus }: { email: string; password: string,confirmPassword:string,setStatus:any }, thunkAPI) => {
		try {
			const dispatch = thunkAPI.dispatch;
			const response = await userAPI.register( email, password,confirmPassword );
			const data = response.data;
			if (!response) {
				throw new Error(data.message || "Failed to register");
			}
			dispatch(setLoginPopup({ open: false,}))
			return data.user;
		} catch (error: any) {
			setStatus(error.response.data.message)
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
