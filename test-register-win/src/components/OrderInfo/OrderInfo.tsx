import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { getOrderInfo } from "../../redux/orderThunks.ts";
import Order from "../../pages/Order/Order.tsx";
import TopOrdersNavigate from "../TopOrdersNavigate/TopOrdersNavigate.tsx";
import s from "./OrderInfo.module.css";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button.tsx";

const OrderInfo: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const params = useParams();
	const ordersData = useSelector(
		(state: RootState) => state.ordersInfo.ordersData
	);

	console.log(ordersData);
	useEffect(() => {
		if (params.orderId) dispatch(getOrderInfo(params.orderId));
	}, [params.orderId, dispatch]);

	return (
		<div>
			{ordersData.orders && !Array.isArray(ordersData.orders) && (
				<>
					<TopOrdersNavigate
						type={"info"}
						title={`#${ordersData.orders.transactionId.toString()}`}
					/>
					<Order data={ordersData.orders} />
				</>
			)}
			<div className={s.infoContainer}>
				<div className={s.title}>
					<div>
						{t("Your Goods")}:
					</div>
					 <div>{ordersData?.totalInfo?.totalGoods} - {ordersData?.totalInfo?.totalPrice}$</div>
				</div>
				<div className={s.infoCardContainer}>
					<div className={s.topRow}>
						{ordersData?.totalInfo?.totalPrice} <span>+1500</span>
					</div>
					<div className={s.bottomRow}>
						250$ <span>{ordersData?.totalInfo?.discount}749.99</span>
					</div>
				</div>
				<div className={s.askButtonContainer}>
					<Button text={"Ask ?"} type={"button"} />
				</div>
			</div>
		</div>
	);
};

export default OrderInfo;
