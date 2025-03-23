import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../api/api.ts";



export const getOrderInfo = createAsyncThunk(
	"order",
	async ( id:string) => {
		try {
			const response = await userAPI.getOrderView(id);
			return response.data;

		} catch (error: any) {
			console.log(error);
		}
	}
);
export const getOrders = createAsyncThunk(
	"orders",
	async ( ) => {
		try {
			const response = await userAPI.getOrders();
			return response.data;

		} catch (error: any) {
			console.log(error);
		}
	}
);