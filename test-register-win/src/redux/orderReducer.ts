import { createSlice, } from "@reduxjs/toolkit";
import { OrderDataType} from "../mocks/handlers.ts";
import { getOrderInfo, getOrders } from "./orderThunks.ts";


interface ordersState {
	loading:boolean;
	ordersData: OrderDataType;
}


const initialState: ordersState = {
	loading:false,
	ordersData: {
		orders:null,
		totalInfo: null,
	},
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getOrderInfo.pending, (state) => {
				state.loading = true;
			})
			.addCase(getOrderInfo.fulfilled, (state, action) => {
				state.loading = false;

				state.ordersData = action.payload;
			})
			.addCase(getOrderInfo.rejected, (state) => {
				state.loading = false;
			})
			.addCase(getOrders.pending, (state) => {
				state.loading = true;
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.loading = false;
				state.ordersData.orders = action.payload;
			})
			.addCase(getOrders.rejected, (state) => {
				state.loading = false;

			});
	},
});


export default orderSlice.reducer;
