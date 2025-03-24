import "./App.css";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import LoginPopup from "./pages/Login/LoginPopup.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store.ts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
	const openLoginPopup = useSelector(
		(state: RootState) => state.popups.openLoginPopup.open
	);
	return (
		<>
			<ToastContainer position="top-right" autoClose={3000} theme={"dark"} />
			<div className="wrapper">
				<Header />
				<Main />
				<Footer />
			</div>
			{openLoginPopup && <LoginPopup />}
		</>
	);
}

export default App;
