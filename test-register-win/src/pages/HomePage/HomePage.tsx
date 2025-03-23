import Button from "../../components/Button/Button.tsx";
import { useAuthPopup } from "../../hooks/useAuthPopup.tsx";
import s from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

const HomePage = () => {
	const navigate = useNavigate();
	const { handleClick, t } = useAuthPopup();
	const user = useSelector((state: RootState) => state.user.user);
	const handleClickOrders = () => {
		navigate("orders-list");
	};
	return (
		<div className={s.container}>
			{!user &&
			<div className={s.regButtonsContainer}>
				<div className={s.button}>
					<Button type={"button"}
						text={t("Registration")}
						onClick={() => handleClick("register")}
					/>
				</div>
				<div className={s.button}>
					<Button type={"button"} text={t("Login")} onClick={() => handleClick("login")} />
				</div>
			</div>}
			<div className={s.orderButtonContainer}>
				<Button type={"button"} text={t("Orders")} onClick={handleClickOrders} />
			</div>
		</div>
	);
};

export default HomePage;
