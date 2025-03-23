import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { useEffect } from "react";
import { setLoginPopup } from "../../redux/popupsReducer.ts";
import { Navigate } from "react-router-dom";
import * as React from "react";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const isAuth = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isAuth) {
			dispatch(setLoginPopup({ open: true, type: "login" }));
		}
	}, [isAuth, dispatch]);

	return isAuth ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;