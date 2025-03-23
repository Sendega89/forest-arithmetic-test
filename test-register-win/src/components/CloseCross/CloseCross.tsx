import s from "./CloseCross.module.css";
import IconsSvgSelector from "../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import * as React from "react";

interface Props {
	handleClick: () => void;
}
const CloseCross:React.FC<Props> = ({handleClick}) => {
	return (
		<div className={s.closeCross}>
			<button onClick={handleClick}>
				<IconsSvgSelector id={"closeCross"} />
			</button>
		</div>
	);
};

export default CloseCross;