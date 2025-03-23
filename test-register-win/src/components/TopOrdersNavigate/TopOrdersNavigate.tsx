import React from "react";
import s from "../../pages/OrdersList/OrdersList.module.css";
import IconsSvgSelector from "../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import { useNavigate } from "react-router-dom";

const TopOrdersNavigate:React.FC<{type:"info" | "list",title:string}> = ({type,title}) => {
	const navigate = useNavigate();
	const handleClickBackArrow = () => {
		navigate(-1);
	};
	return (
		<div className={s.navigation}>
			<div className={s.backArrow}>
				<button onClick={handleClickBackArrow}>
					<IconsSvgSelector id={
						type === "list" ? "backArrow" :"closeCross"
					} />
				</button>
			</div>
			<div className={s.title}>{title}</div>
		</div>
	);
};

export default TopOrdersNavigate;