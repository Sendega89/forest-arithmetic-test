import axios from "axios"

export const instance = axios.create({
	withCredentials: false,
	baseURL:"https://forest-arithmetic-test-pu6o.vercel.app/api/"/*"http://localhost:5173/api/"*/

});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem("tokenTest");
	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export const userAPI = {
	login(email: string, password: string) {
		return instance.post(`login`, { email: email, password: password });
	},
	register(email: string, password: string, confirmPassword: string) {
		return instance.post(`register`, {
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		});
	},
	getOrders: () => {
		return instance.get(`orders`);
	},
	getOrderView: (id:string) => {
		return instance.get(`order-info?id=${id}`);
	},
};