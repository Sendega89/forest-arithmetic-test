import { http, HttpResponse } from "msw";
import avatar from "../assets/images/download.jpg";

export type OrderDataType = {
	orders: OrderType[] | OrderType | null;
	totalInfo: {
		totalGoods: number;
		totalPrice: number;
		discount: number;
	} | null;
} ;
export type OrderType = {
	id: number;
	transactionId: number;
	status: "success" | "failed";
	date: string;
	gameName: string;
	gameId: number;
	amount: string;
};
export type UserType = {
	id: number | null;
	avatar: string;
	email: string;
	password: string;
};
const users: UserType[] = [];
const orders: OrderType[] = [
	{ id: 1, transactionId: 101, status: "success", date: "2025-03-23T14:30:00", gameName: "Fortnite", gameId: 1, amount: "50.00" },
	{ id: 2, transactionId: 102, status: "failed", date: "2025-03-24T09:15:00", gameName: "Minecraft", gameId: 2, amount: "30.00" },
	{ id: 3, transactionId: 103, status: "success", date: "2025-03-22T16:00:00", gameName: "Call of Duty", gameId: 3, amount: "60.00" },
	{ id: 4, transactionId: 104, status: "failed", date: "2025-03-21T11:45:00", gameName: "Apex Legends", gameId: 4, amount: "40.00" },
	{ id: 5, transactionId: 105, status: "success", date: "2025-03-20T18:30:00", gameName: "League of Legends", gameId: 5, amount: "25.00" },
	{ id: 6, transactionId: 106, status: "failed", date: "2025-03-19T13:20:00", gameName: "Valorant", gameId: 6, amount: "35.00" },
	{ id: 7, transactionId: 107, status: "success", date: "2025-03-18T10:00:00", gameName: "Dota 2", gameId: 7, amount: "45.00" },
	{ id: 8, transactionId: 108, status: "failed", date: "2025-03-17T17:45:00", gameName: "PUBG", gameId: 8, amount: "55.00" },
	{ id: 9, transactionId: 109, status: "success", date: "2025-03-16T08:30:00", gameName: "Overwatch", gameId: 9, amount: "20.00" },
	{ id: 10, transactionId: 110, status: "failed", date: "2025-03-15T21:10:00", gameName: "FIFA 24", gameId: 10, amount: "70.00" },
	{ id: 11, transactionId: 111, status: "success", date: "2025-03-14T15:30:00", gameName: "Cyberpunk 2077", gameId: 11, amount: "80.00" },
	{ id: 12, transactionId: 112, status: "failed", date: "2025-03-13T12:00:00", gameName: "The Witcher 3", gameId: 12, amount: "90.00" },
	{ id: 13, transactionId: 113, status: "success", date: "2025-03-12T18:40:00", gameName: "Red Dead Redemption 2", gameId: 13, amount: "85.00" },
	{ id: 14, transactionId: 114, status: "failed", date: "2025-03-11T09:20:00", gameName: "GTA V", gameId: 14, amount: "100.00" },
	{ id: 15, transactionId: 115, status: "success", date: "2025-03-10T22:00:00", gameName: "Battlefield 2042", gameId: 15, amount: "75.00" },
];


export const handlers = [
	http.post("/api/register", async ({ request }) => {
		const { email, password, confirmPassword } = (await request.json()) as {
			email: string;
			password: string;
			confirmPassword: string;
		};
		if (password !== confirmPassword) {
			return HttpResponse.json(
				{ message: "Passwords don't match" },
				{ status: 401 }
			);
		}

		const existingUser = users.find((user) => user.email === email);
		if (existingUser) {
			return HttpResponse.json(
				{ message: "User already exists" },
				{ status: 400 }
			);
		}

		const newUser = {
			id: users.length + 1,
			email,
			password,
			avatar: avatar,
			orderData: {
				orders,
				totalInfo: {
					totalGoods: 3445645,
					totalPrice: 36456,
					discount: 3456454,
				},
			},
		};
		users.push(newUser);
		return HttpResponse.json(
			{ message: "Registration successful", user: newUser },
			{ status: 201 }
		);
	}),
	http.post("/api/login", async ({ request }) => {
		const body = (await request.json()) as { email: string; password: string };
		const user = users.find((user) => user.email === body.email);
		if (body.password === user?.password) {
			return HttpResponse.json(
				{ token: "mocked-jwt-token", user },
				{ status: 200 }
			);
		}
		return HttpResponse.json(
			{ message: "Invalid credentials" },
			{ status: 401 }
		);
	}),
	http.get("/api/orders", () => {
		return HttpResponse.json(orders);
	}),
	http.get("/api/order-info", ( info ) => {
		const url = new URL(info.request.url);
		const orderId = Number(url.searchParams.get("id")); // Получаем id из query

		if (isNaN(orderId)) {
			return HttpResponse.json({ message: "Invalid order ID" });
		}

		const order = orders.find((o) => o.id === orderId);

		if (!order) {
			return HttpResponse.json({ message: "Order not found" });
		}

		const totalInfo = {
			totalGoods: Math.floor(Math.random() * 10) + 1,
			totalPrice: parseFloat(order.amount) * (Math.random() * 2 + 0.5),
			discount: Math.floor(Math.random() * 20),
		};

		return HttpResponse.json({ orders:order, totalInfo });
	}),
];
