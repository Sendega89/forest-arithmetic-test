import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLoginPopup } from "../redux/popupsReducer.ts";
import { RootState } from "../redux/store.ts";



export const useAuthPopup = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const popupType = useSelector(
		(state: RootState) => state.popups.openLoginPopup.type
	);

	const handleClick = (type: "login" | "register") => {
		dispatch(setLoginPopup({ open: true, type }));
	};

	return { popupType, handleClick, t };
};