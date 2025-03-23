import s from "./Form/AuthRegForm.module.css";
import IconsSvgSelector from "../../assets/IconsSvgSelector/IconsSvgSelector.tsx";
import * as React from "react";


type Props = {
	active:1 | 0
}

const SocialNetworkAuth:React.FC<Props> = ({active}) => {
 const buttonsMap = ["google","apple" ,"facebook","discord" , "telegram",];
	const IconButton = ({id}: {id: string}) => {
		return (
			<li>
				<button type={"button"} disabled={active == 0} style={{cursor:active == 0 ? "not-allowed" : "pointer"}}>
					<IconsSvgSelector id={id} />
				</button>
			</li>
		)
	}
	return (
		<ul className={s.socialIconsContainer}>
			{buttonsMap.map((button) => (
				<IconButton id={button}/>
			))}
		</ul>
	);
};

export default SocialNetworkAuth;