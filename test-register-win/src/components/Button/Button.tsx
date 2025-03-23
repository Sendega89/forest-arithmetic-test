import s from "./Button.module.css"
import * as React from "react";

type Props = {
	text:string
	type:"submit" | "button" | "reset"
	onClick?: () => void;
	grey?:boolean
}

const Button:React.FC<Props> = ({text,grey,onClick,type}) => {
	return (
		<button type={type} onClick={onClick} className={`${s.button} ${grey ? s.grey : ""}`}>
			{text}
		</button>
	);
};

export default Button;