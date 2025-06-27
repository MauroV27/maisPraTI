import readline from "node:readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const acheONumero = async () => {
	function NumericInput(prompt, isInt = false) {
		return new Promise((resolve) => {
			rl.question(prompt, (input) => {
				const valor = parseFloat(input);

				if (!isNaN(valor) || valor <= 0) {
					resolve(isInt ? parseInt(valor) : valor);
				} else {
					console.warn(
						"> ⚠️ Entrada inválida. Por favor, digite um número positivo."
					);
					resolve(null);
				}
			});
		});
	}

	const resp = Math.floor(Math.random() * 99) + 1;

	let lastSelectedNumber = undefined;
	let numTentativas = 0;

	// console.log(resp);

	while (lastSelectedNumber !== resp) {
		let val = await NumericInput(
			"Escolha um número inteiro entre 1 e 100: ",
			true
		);

		console.log("val ::", val);

		if (val > 0) {
			numTentativas += 1;
			lastSelectedNumber = val;

			if (val < resp) {
				console.log("mais alto");
			}

			if (val > resp) {
				console.log("mais baixo");
			}
		}
	}

	console.log(
		`Parabéns, você acertou o número com ${numTentativas} tentativas`
	);

	process.exit();
};

acheONumero();
