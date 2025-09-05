import { describe, expect, test } from "vitest";
import {
	render,
	screen,
	fireEvent,
	type RenderResult,
} from "@testing-library/react";

import { ButtonTeste, type ButtonTesteProps } from ".";

const sut = (props: ButtonTesteProps): RenderResult => {
	return render(<ButtonTeste {...props} />);
};

describe("ButtonTeste", () => {
	test("renders", () => {
		const { getByText } = sut({ text: "Botão" });

		expect(getByText("Botão")).toBeTruthy();
	});

	test("should increase count by 1", () => {
		// Arrange
		let counter = 0;

		const handleClick = () => {
			counter += 1;
		};

		// Act
		render(<ButtonTeste text="Button" onClick={handleClick} />);
		const button = screen.getByText("Button");

		fireEvent.click(button);

		// Assert
		expect(counter).toBe(1);
	});
});
