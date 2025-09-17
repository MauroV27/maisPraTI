import { useEffect, useState } from "react";
import type { Product } from "./ProductCard";

type NavBarProps = {
	listProductsInCart: Product[];
};

export function Navbar({ listProductsInCart }: NavBarProps) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const stored = localStorage.getItem("theme") as "light" | "dark" | null;
		if (stored) {
			setTheme(stored);
			document.documentElement.setAttribute("data-theme", stored);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<nav className="navbar">
			<span>🛒 MyShop</span>
			<div>
				<button
					onClick={toggleTheme}
					className="navbar-theme-button"
					aria-label="Toggle theme"
				>
					{theme === "light" ? "🌞" : "🌙"}
				</button>
				<span aria-label="Cart items" role="status">
					Cart: {listProductsInCart.length}
				</span>
			</div>
		</nav>
	);
}
