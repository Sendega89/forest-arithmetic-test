import * as React from "react";
import { OrderType } from "../../mocks/handlers.ts";
import s from "./Order.module.css";
import IconsSvgSelector from "../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import { Link } from "react-router-dom";

interface Props {
	data: OrderType;
}

const Order: React.FC<Props> = ({ data }) => {
	const { date, status, gameId, gameName, transactionId, amount,id } = data;
	return (
	<div className={s.container} >
		<Link to={`/orders-list/${id}`}>
			<div className={s.row}>
				<div className={s.column}>
					<div className={s.title}>
						Transaction ID
					</div>
					<div className={s.value}>
						#{transactionId}
					</div>
				</div>
				<div className={s.column}>
					<div className={s.title}>
						Date
					</div>
					<div className={s.value}>
						{date}
					</div>
				</div>
				<div className={s.column}>
					<div className={s.title}>
						Status
					</div>
					<div className={s.value}>
						<IconsSvgSelector id={"status"} color={
							status === "success" ? "#11B174" : "red"
						} />
						{status}
					</div>
				</div>
			</div>
			<div className={s.row}>
				<div className={s.column}>
					<div className={s.title}>
						Game Name
					</div>
					<div className={s.value}>
						{gameName}
					</div>
				</div>
				<div className={s.column}>
					<div className={s.title}>
						Game ID
					</div>
					<div className={s.value}>
						{gameId}
					</div>
				</div>
				<div className={s.column}>
					<div className={s.title}>
						Amount
					</div>
					<div className={s.value}>
						$ {amount}
					</div>
				</div>
			</div>
		</Link>
	</div>
	);
};

export default Order;
