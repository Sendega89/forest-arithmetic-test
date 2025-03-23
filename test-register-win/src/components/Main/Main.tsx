import s from "./Main.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import OrdersList from "../../pages/OrdersList/OrdersList.tsx";
import Page404 from "../../pages/Page404.tsx";
import ProtectedRoute from "../../assets/protect/ProtectedRoute.tsx";
import OrderInfo from "../OrderInfo/OrderInfo.tsx";


const Main = () => {
	return (
		<main>
			<div className={s.pageWrapper}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/orders-list"
						element={
							<ProtectedRoute>
								<OrdersList />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/orders-list/:orderId"
						element={
							<ProtectedRoute>
								<OrderInfo />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</main>
	);
};

export default Main;