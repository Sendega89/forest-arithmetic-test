import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { useEffect } from "react";
import s from "./OrdersList.module.css";
import { OrderType } from "../../mocks/handlers.ts";
import Order from "../Order/Order.tsx";
import { getOrders } from "../../redux/orderThunks.ts";
import TopOrdersNavigate from "../../components/TopOrdersNavigate/TopOrdersNavigate.tsx";
import { useTranslation } from "react-i18next";

const OrdersList: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const ordersData = useSelector(
		(state: RootState) => state.ordersInfo.ordersData
	);
	const loading = useSelector((state: RootState) => state.ordersInfo.loading);


	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);
	if (loading) {
		return <div>Loading</div>;
	} else
		return (
			<div className={s.container}>
				<TopOrdersNavigate type={"list"} title={t("Orders")}/>
				<ul className={s.listContainer}>
					{Array.isArray(ordersData.orders) &&
						ordersData.orders?.map((order: OrderType) => (
							<Order data={order} key={order.id} />
						))}
				</ul>
			</div>
		);
};

export default OrdersList;
