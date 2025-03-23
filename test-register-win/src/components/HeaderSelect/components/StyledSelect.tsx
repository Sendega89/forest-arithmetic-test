import {
	ActionMeta,
	components,
	MenuProps,
	MultiValue,
	OptionProps,
	SingleValue,
	SingleValueProps,
} from "react-select";
import s from "../HeaderSelect.module.css"
import Select from "react-select";
import * as React from "react";
import IconsSvgSelector from "../../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import { motion } from "framer-motion";


export type Option = {value:string,label:string,icon:string}
export type Options = Option[]

interface Props {
	options:Options;
	width:number;
	onChangeFn?:(newValue: SingleValue<Option> | MultiValue<Option> | null, actionMeta: ActionMeta<Option>) => void;
	defaultValue?:Option
}
const StyledSelect:React.FC<Props> = ({options,width,onChangeFn,defaultValue}) => {
	const SingleValue = (props: SingleValueProps<Option>) => {
		const { children, data } = props;
		return (
			<components.SingleValue {...props}>
				<div className={s.singleValue}>
					<IconsSvgSelector id={data.icon}/>
					{children}</div>
			</components.SingleValue>
		);
	};
	const Option = (props: OptionProps<Option>) => {
		const { children, data } = props;
		return (
			<components.Option {...props}>
				<div className={s.option}>
					<IconsSvgSelector id={data.icon}/>
					{children}
				</div>
			</components.Option>
		);
	};
	const Menu = (props:MenuProps<any,false>) => {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
			>
			<components.Menu {...props}/>
			</motion.div>
		);
	};

	return (
		<div className={s.selectContainer}>
			<Select
				isClearable={false}
				isSearchable={false}
				onChange={onChangeFn}
				options={options}
				defaultValue={defaultValue}
				components={{
					SingleValue,
					IndicatorSeparator: () => null,
					DropdownIndicator:()=>null,
					Option,
					Menu,
				}}
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						flex:1,
						minWidth: width,
						minHeight: '36px',
						height: '36px',
						borderColor: "#151921",
						maxWidth: "100%",
						boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.07)",
						borderRadius: "32px",
						backgroundColor: "#151921",

						"&:hover": {
							backgroundColor: "inherit",
							borderColor: "none",
						},
					}),
					singleValue: (styles) => {
						return {
							...styles,
							borderRadius: "32px",
							fontSize: "12px",
							lineHeight: "20px",
							color:"#FFFFFF",
							"&:hover": {
								backgroundColor: "inherit",
								borderColor: "inherit",
							},

						};
					},
					option: (base,state) => {
						const checkPosition = (value: string) => {
							const index = options.findIndex(option => option.value === value);
							if (index === 0) return 0;
							if (index === options.length - 1) return 1;
							return null
						};
					return	({
							...base,
							cursor: "pointer",
							backgroundColor: state.isSelected ? "#4d616c" : state.isFocused ? "#4d616c" : "inherit",
							borderRadius:checkPosition(state.data.value) === 0 ? "12px 12px 0 0" : checkPosition(state.data.value) === 1 ? " 0 0 12px 12px" : "0",
							"&:hover": {
								backgroundColor: "#4d616c",
								borderColor: "inherit",
							},
						});
					},
					menu: (base) => ({
						...base,
						backgroundColor: "#2c4350",
						borderRadius: "12px",
						marginTop: "4px",
						overflow: "hidden",
					})
				}}
			/>
		</div>
	);
};

export default StyledSelect;