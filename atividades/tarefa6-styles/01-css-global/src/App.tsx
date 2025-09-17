import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard, type Product } from "./components/ProductCard";
import { products } from "./data";

function App() {
	const [listProductsInCart, setListProductsInCart] = useState<Product[]>([]);

	return (
		<div>
			<Navbar listProductsInCart={listProductsInCart} />
			<main className="card-container-list">
				{products.map((p) => (
					<ProductCard
						key={p.id}
						product={p}
						onAddProductToCart={(p) =>
							setListProductsInCart((prev) => [...prev, p])
						}
					/>
				))}
			</main>
		</div>
	);
}

export default App;
