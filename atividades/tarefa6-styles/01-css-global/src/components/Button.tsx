import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "solid" | "outline" | "ghost";
}

export function Button({ variant = "solid", children, ...props }: Props) {
	return (
		<button className={`btn btn-${variant}`} {...props}>
			{children}
		</button>
	);
}
