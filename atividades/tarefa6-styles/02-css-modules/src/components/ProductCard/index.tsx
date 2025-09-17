import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Skeleton } from "../Skeleton";

import styles from "./ProductCard.module.css";

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
			<div className={styles.Card}>
				<Skeleton height="200px" />
				<Skeleton height="20px" width="80%" />
				<Skeleton height="20px" width="40%" />
			</div>
		);
	}

	return (
		<div className={styles.Card}>
			<div className={styles.CardImgContainer}>
				{product.tag && (
					<span className={styles.CardTag}>{product.tag}</span>
				)}
				<img src={product.image} alt={product.title} loading="lazy" />
			</div>
			<h3 className={styles.CardTitle}>{product.title}</h3>
			<p className={styles.CardPrice}>${product.price}</p>
			<p className={styles.CardRating}>{"★".repeat(product.rating)}</p>
			<Button variant="solid" onClick={() => onAddProductToCart(product)}>
				Adicionar
			</Button>
		</div>
	);
}
