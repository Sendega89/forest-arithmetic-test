import * as React from "react";
import StyledSelect, { Option, Options } from "./components/StyledSelect.tsx";
import i18n from "i18next";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import { setCurrency } from "../../redux/User/userReducer.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";


export type SelectType = "currency" | "language";

interface SelectWithIconsProps {
	type: SelectType;
	width: number;
	onChangeFn?: (newValue: SingleValue<Option> | MultiValue<Option> | null, actionMeta: ActionMeta<Option>) => void;
	defaultValue?: Option;
}

const optionsMap: Record<SelectType, Options> = {
	currency: [
		{ icon: "usdIcon", label: "USD", value: "USD" },
		{ icon: "grnIcon", label: "UAH", value: "UAH" },
		{ icon: "engFlag", label: "EUR", value: "EUR" },
	],
	language: [
		{ icon: "engFlag", label: "EN", value: "en" },
		{ icon: "grnIcon", label: "UA", value: "uk" },
	],
};
const SelectWithIcons: React.FC<SelectWithIconsProps> = ({ type, width, onChangeFn, defaultValue }) => {
	return <StyledSelect options={optionsMap[type]} width={width} onChangeFn={onChangeFn} defaultValue={defaultValue} />;
};

const HeaderSelect: React.FC = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user);

	const handleChangeLanguage = (newValue: SingleValue<Option> | MultiValue<Option> | null) => {
		if (!newValue) return;
		if ("value" in newValue) {
			i18n.changeLanguage(newValue.value);
		}
	};
	const handleChangeCurrency = (newValue: SingleValue<Option> | MultiValue<Option> | null) => {
		if (!newValue) return;
		if ("value" in newValue) {
			dispatch(setCurrency(newValue.value));
		}
	};

	const defaultLanguage: Option | undefined = optionsMap.language.find(o => o.value.toLowerCase() === i18n.language);
	const defaultCurrency: Option | undefined = optionsMap.currency.find(c => c.value.toLowerCase() === user.currency.toLowerCase());

	return (
		<>
			<SelectWithIcons type="currency" width={74} onChangeFn={handleChangeCurrency} defaultValue={defaultCurrency} />
			<SelectWithIcons type="language" width={65} onChangeFn={handleChangeLanguage} defaultValue={defaultLanguage} />
		</>
	);
};

export default HeaderSelect;