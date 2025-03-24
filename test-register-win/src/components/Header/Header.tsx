import s from "./Header.module.css";
import SearchInput from "../SearchInput/SearchInput.tsx";
import HeaderSelect from "../HeaderSelect/HeaderSelect.tsx";
import AuthAvatar from "../AuthAvatar/AuthAvatar.tsx";


const Header = () => {

	return (
		<header>
			<div className={s.headerContainer}>
				<div className={s.inputContainer}>
					<SearchInput />
				</div>
				<div className={s.buttonsContainer}>
					<HeaderSelect />
					<AuthAvatar />
				</div>
			</div>

		</header>
	);
};

export default Header;