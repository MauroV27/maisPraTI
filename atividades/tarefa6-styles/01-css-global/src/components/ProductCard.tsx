import { Button } from "./Button";
import { Skeleton } from "./Skeleton";
import { useState, useEffect } from "react";

export interface Product {
	id: number;
	title: string;
	price: number;
	rating: number;
	tag?: string;
	image: string;
}

export function ProductCard({
	product,
	onAddProductToCart,
}: {
	product: Product;
	onAddProductToCart: (p: Product) => void;
}) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setLoading(false), 1200);
		return () => clearTimeout(t);
	}, []);

	if (loading) {
		return (
			<div className="card">
				<Skeleton height="200px" />
				<Skeleton height="20px" width="80%" />
				<Skeleton height="20px" width="40%" />
			</div>
		);
	}

	return (
		<div className="card">
			<div className="card-img-container">
				{product.tag && <span className="card-tag">{product.tag}</span>}
				<img src={product.image} alt={product.title} loading="lazy" />
			</div>
			<h3 className="card-title">{product.title}</h3>
			<p className="card-price">${product.price}</p>
			<p className="card-rating">{"★".repeat(product.rating)}</p>
			<Button variant="solid" onClick={() => onAddProductToCart(product)}>
				Adicionar
			</Button>
		</div>
	);
}
