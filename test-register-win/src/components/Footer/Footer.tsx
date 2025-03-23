import s from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const {t} = useTranslation();
	return (
		<footer className={s.footerContainer}>
			<ul className={s.socialLinks}>
			<li>Telegram</li>
			</ul>
			<div className={s.savedText}>
				{t("Performer by Sendeha")}
			</div>
			<ul className={s.contacts}>
				<li><a href="mailto:sendga89@gmail.com">sendga89@gmail.com</a></li>
				<li><a href="tel:+380953395977">+380953395977</a></li>
			</ul>
		</footer>
	);
};

export default Footer;