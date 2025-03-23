import Button from "../Button/Button.tsx";
import s from "./ButtonsSwitch.module.css";
import * as React from "react";
import { useAuthPopup } from "../../hooks/useAuthPopup.tsx";
import { motion } from "framer-motion";


const ButtonsSwitch: React.FC = () => {
	const { popupType, handleClick, t } = useAuthPopup();

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
		>
		<div className={s.container}>
			<Button type={"button"}
				text={t("Login")}
				grey={popupType === "register"}
				onClick={() => handleClick("login")}
			/>
			<Button type={"button"}
				text={t("Registration")}
				grey={popupType === "login"}
				onClick={() => handleClick("register")}
			/>

		</div>	</motion.div>
	);
};

export default ButtonsSwitch;
