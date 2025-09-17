import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "solid" | "outline" | "ghost";
}

export function Button({ variant = "solid", children, ...props }: Props) {
	return (
		<button
			className={`${styles.button} ${styles[`button-${variant}`]}`}
			{...props}
		>
			{children}
		</button>
	);
}
