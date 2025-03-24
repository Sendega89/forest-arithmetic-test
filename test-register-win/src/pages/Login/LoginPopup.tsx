import s from "./Login.module.css"
import ButtonsSwitch from "../../components/ButtonsSwitch/ButtonsSwitch.tsx";
import * as React from "react";
import { setLoginPopup } from "../../redux/popupsReducer.ts";
import { useDispatch } from "react-redux";
import CloseCross from "../../components/CloseCross/CloseCross.tsx";
import AuthRegForm from "./Form/AuthRegForm.tsx";




const LoginPopup:React.FC = () => {
	const dispatch = useDispatch();

	const handleClickClose = () => {
		dispatch(setLoginPopup({open:false,type:"login"}))

	}
	return (
		<div className={s.wrapper}>
			<div className={s.popupContainer}>
				<div className={s.headSelector}>
					<div className={s.switch}>
						<ButtonsSwitch  />
					</div>
					<CloseCross handleClick={handleClickClose} />
				</div>
				<div className={s.formContainer}>
					<AuthRegForm  />
				</div>
				<div className={s.socialNetworkContainer}></div>
			</div>
		</div>

	);
};

export default LoginPopup;