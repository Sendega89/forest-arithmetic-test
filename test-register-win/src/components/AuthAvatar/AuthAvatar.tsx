import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import s from "./AuthAvatar.module.css";
import IconsSvgSelector from "../../assets/IconsSvgSelector/IconsSvgSelector.tsx";


const AuthAvatar = () => {
	const user = useSelector((state: RootState) => state.user.user);
	return (
		<div className={s.container}>
			{user ? (
				<div className={s.avatarImage}>
					<img src={user.avatar} alt={user.email} />
					{/*<IconsSvgSelector id={"engFlag"} />*/}
				</div>
			) :
				<div className={s.avatarIcon}>
				<IconsSvgSelector id={"engFlag"} />
				</div>}
		</div>
	);
};

export default AuthAvatar;