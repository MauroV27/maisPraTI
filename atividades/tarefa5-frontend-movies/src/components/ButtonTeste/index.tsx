import type { JSX } from "react";

export interface ButtonTesteProps {
	text: string;
	onClick?: () => void;
}

export const ButtonTeste = ({
	onClick,
	text,
}: ButtonTesteProps): JSX.Element => {
	return (
		<button onClick={onClick} data-testid="Button-Teste-Component">
			{text}
		</button>
	);
};
