import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./AuthRegForm.module.css";
import Button from "../../../components/Button/Button.tsx";
import { useTranslation } from "react-i18next";
import * as React from "react";
import IconsSvgSelector from "../../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
	getLoginUser,
	getRegisterUser,
} from "../../../redux/User/userThunks.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import SocialNetworkAuth from "../SocialNetworkAuth.tsx";
import { motion } from "framer-motion";


type Values = {
	email: string;
	password: string;
	confirmPassword: string;
	useSocialNetworks: 0 | 1;
};

const AuthRegForm = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const popupType = useSelector(
		(state: RootState) => state.popups.openLoginPopup.type
	);
	const initialValues: Values = {
		email: "test@example.com",
		password: "qwerty",
		confirmPassword: "qwerty",
		useSocialNetworks:popupType === "register" ? 0 : 1,
	};
	const handleSubmit = (values: Values, formikHelpers: FormikHelpers<any>) => {
		if (popupType === "login") {
			dispatch(
				getLoginUser({
					email: values.email,
					password: values.password,
					setStatus: formikHelpers.setStatus,
				})
			);
		}
		if (popupType === "register") {
			dispatch(
				getRegisterUser({
					email: values.email,
					password: values.password,
					confirmPassword: values.confirmPassword,
					setStatus: formikHelpers.setStatus,
				})
			);
		}
	};

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({
				values,
				handleSubmit,
				status,
				setFieldValue,
			}) => {

				return (
					<Form onSubmit={handleSubmit} className={s.formContainer}>
						<div className={s.inputContainer}>
							<div className={s.input}>
								<Field name={"email"} placeholder={t("Email or Mobile")} />
							</div>
							<div className={s.input}>
								<Field name={"password"} placeholder={t("Password")} />
							</div>
							{popupType === "register" && (
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
								>
									<div className={s.input}>
										<Field
											name={"confirmPassword"}
											placeholder={t("Confirm Password")}
										/>
									</div>
								</motion.div>
							)}
							<div className={s.error}>
								{status && status}
							</div>

						</div>
						{popupType === "register" && (
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0 }}
							>
							<div className={s.checkBoxContainer}>
								<Field
									id="customCheckbox"
									type={"checkbox"}
									name={"useSocialNetworks"}
									className={s.checkbox}
									onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
										const checked = event.currentTarget.checked;
										setFieldValue("useSocialNetworks", checked ? 1 : 0);
									}}
								/>
								<label htmlFor="customCheckbox" className={s.checkboxLabel}>
									<IconsSvgSelector id={"checkBox"} />
									{t("Use social networks")}
								</label>
							</div>
							</motion.div>
						)}

						<div className={s.buttonContainer}>
							<Button text={t(popupType === "login" ? "Login" : "Registration")} type={"submit"} />
						</div>
						<div className={s.socialNetworkContainer}>
							<div>{t("Use social networks")}</div>
							<SocialNetworkAuth active={values.useSocialNetworks} />
						</div>
						{popupType === "login" && (
							<div className={s.forgotPassword}>
								<a href="#">
									{t("Forgot password ?")}
								</a>
							</div>
						)}

					</Form>
				);
			}}
		</Formik>
	);
};

export default AuthRegForm;
