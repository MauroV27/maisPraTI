import { useState } from "react";
import { ProductCard, type Product } from "./components/ProductCard";
import { Navbar } from "./components/Navbar";
import { products } from "./data";

import styles from "./App.module.css";

function App() {
	const [listProductsInCart, setListProductsInCart] = useState<Product[]>([]);

	return (
		<div>
			<Navbar listProductsInCart={listProductsInCart} />
			<main className={styles.ContentContainer}>
				<div className={styles.CardContainerList}>
					{products.map((p) => (
						<ProductCard
							key={p.id}
							product={p}
							onAddProductToCart={(p) =>
								setListProductsInCart((prev) => [...prev, p])
							}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
