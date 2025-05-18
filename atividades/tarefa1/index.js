// Trabalho feito por Mauro Victor P. Dias
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const QUESTIONS_DESCRIPTION = [
	"Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.",
	"Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.",
	"Implemente um programa que recebe uma nota de 0 a 10 e classifica como 'Aprovado', 'Recuperação', ou 'Reprovado' utilizando if-else if.",
	"Crie um menu interativo no console que oferece ao usuário a escolha de três opções.Utilize switch-case para implementar a lógica de cada opção selecionada",
	"Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)utilizando if-else.",
	"Ler três valores para os lados de um triângulo: A, B e C.\nVerificar se os lados fornecidos formam realmente um triângulo\nCaso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero\nPara verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)\nTriângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)\n Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)",
	"As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra",
	"Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.",
	"Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.",
	"Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes",
	"Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for",
	"Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.",
	"Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.",
	"Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.",
	"Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.",
];

function showEnunciado(questao) {
	console.log(`\n--- Enunciado da questão ${questao + 1} ---`);
	console.log(QUESTIONS_DESCRIPTION[questao], "\n-----------------------");
}

function NumericInput(prompt, isInt = false) {
	return new Promise((resolve) => {
		rl.question(prompt, (input) => {
			const valor = parseFloat(input);

			if (!isNaN(valor)) {
				resolve(isInt ? parseInt(valor) : valor);
			} else {
				console.warn(
					"> ⚠️ Entrada inválida. Por favor, digite um número."
				);
				resolve(null);
			}
		});
	});
}

const getPositiveValue = async (
	value,
	title,
	warn = undefined,
	isInt = true
) => {
	while (value === null) {
		value = await NumericInput(title, isInt);
		if (value < 0) {
			value = null;
			console.warn(
				warn ||
					"> ⚠️ Valor invalido! Deve Ser maior que 0. Tente novamente"
			);
		}
	}

	return value;
};

async function question1() {
	showEnunciado(0);

	const num = await getPositiveValue(null, "Digite um número inteiro :");

	if (num % 2 === 0) {
		console.log(`${num} é par`);
	} else {
		console.log(`${num} é impar`);
	}
}

async function question2() {
	showEnunciado(1);

	const idade = await getPositiveValue(
		null,
		"Digite uma idade :",
		"> Idade invalida! Não existe idade negativa... Ou você veio do futuro?"
	);

	if (idade < 12) {
		console.log(`A idade : ${idade} classifica como uma criança`);
	} else if (idade < 18) {
		console.log(`A idade : ${idade} classifica como um adolescente`);
	} else if (idade < 65) {
		console.log(`A idade : ${idade} classifica como um adulto`);
	} else {
		console.log(`A idade : ${idade} classifica como um idoso`);
	}
}

async function question3() {
	showEnunciado(2);

	const nota = await getPositiveValue(
		null,
		"Digite uma nota (entre 0 e 10) :",
		"> Nota invalida! Deve estar entre 0 e 10. Tente novamente"
	);

	if (nota < 4) {
		console.log("reprovado");
	} else if (nota < 7) {
		console.log("Recuperação");
	} else {
		console.log("Aprovado");
	}
}

async function question4() {
	showEnunciado(3);
	console.log(
		"O menu das questões foi feito como atividade dessa questão! Ele foi colocado para fora dela para ser usado como um gerenciador de todas as questões dessa atividade"
	);
}

async function question5() {
	showEnunciado(4);

	const peso = await getPositiveValue(
		null,
		"Digite um peso :",
		"> Peso invalido! Deve Ser maior que 0. Tente novamente"
	);

	const altura = await getPositiveValue(
		null,
		"Digite uma altura :",
		"> Altura invalida! Deve Ser maior que 0. Tente novamente",
		false
	);

	const imc = (peso / (altura * altura)).toFixed(2);
	console.log(
		`O IMC de alguem com peso=${peso} e altura=${altura} é igual a ${imc}`
	);

	if (imc < 18.5) {
		console.log("Status do IMC => Baixo peso");
	} else if (imc < 24.9) {
		console.log("Status do IMC => Peso normal");
	} else if (imc < 29.9) {
		console.log("Status do IMC => Sobrepeso");
	} else {
		console.log("Status do IMC => Obesidade");
	}
}

async function question6() {
	showEnunciado(5);

	const val = (v1, v2) => v1 < v2;

	const getValue = async (side) => {
		return getPositiveValue(
			null,
			`Digite o tamanho do lado ${side} do triangulo :`
		);
	};

	const a = await getValue("A");
	const b = await getValue("B");
	const c = await getValue("C");

	const isTriangle = val(a, b + c) && val(b, a + c) && val(c, a + b);

	if (!isTriangle) {
		console.log("Valores invalidos para um triangulo");
		return;
	}

	const typeTriangulo = ["Escaleno", "Isósceles", "Equilátero"];

	const value = Math.min((a === b) + (a === c) + (b === c), 2);
	console.log("O tipo de triangulo é", typeTriangulo[value]);
}

async function question7() {
	showEnunciado(6);

	const numApples = await getPositiveValue(
		null,
		"Digite um número inteiro positivo para as maçãs :",
		"> Número de maçãs invalido! Deve Ser maior que 0. Tente novamente"
	);

	const price = numApples >= 12 ? 0.25 : 0.3;
	console.log(`O valor total da compra foi : ${numApples * price}`);
}

async function question8() {
	showEnunciado(7);

	let val1 = null;

	while (val1 === null) {
		val1 = await NumericInput("Digite um valor númerico (val1):");
	}

	let val2 = null;

	while (val2 === null) {
		val2 = await NumericInput("Digite um valor númerico (val2):");
	}

	if (val1 === val2) {
		console.log("Valor 1 e Valor 2 são iguais");
		return;
	}

	const vMin = Math.min(val1, val2);
	const vMax = Math.max(val1, val2);

	console.log(`Valores em ordem crescente : ${vMin} < ${vMax}`);
}

async function question9() {
	showEnunciado(8);
	for (let i = 10; i > 0; i--) {
		console.log(i);
	}
}

async function question10() {
	showEnunciado(9);

	let num = null;

	while (num === null) {
		num = await NumericInput("Selecione um número inteiro :");
	}

	for (let i = 0; i < 10; i++) {
		console.log(num);
	}
}

async function question11() {
	showEnunciado(10);

	const nums = [];

	const getNum = async (num) => {
		while (num === null) {
			num = await NumericInput("Insira um número :");
		}

		return num;
	};

	for (let i = 0; i < 5; i++) {
		nums.push(await getNum(null));
	}

	let total = 0;

	for (const num of nums) {
		total += num;
	}

	console.log(`A soma dos números ${nums.toString()} é igual a ${total}`);
}

async function question12() {
	showEnunciado(11);

	let num = null;

	while (num === null) {
		num = await NumericInput("Selecione um número inteiro:", true);
	}

	for (let i = 1; i <= 10; i++) {
		console.log(`> ${num} x ${i} = ${num * i}`);
	}
}

async function question13(params) {
	showEnunciado(12);

	const nums = [];

	const getNum = async (num = null) => {
		while (num === null) {
			num = await NumericInput("Digite um valor decimal: ", false);
		}

		return num;
	};

	while (true) {
		let val = await getNum();
		if (val === 0) break;

		nums.push(val);
	}

	if (nums.length === 0) {
		console.log("Nenhum número válido foi digitado.");
	} else {
		const soma = nums.reduce((acc, val) => acc + val, 0);
		const media = soma / nums.length;
		console.log(`A média dos números foi : ${media.toFixed(2)}`);
	}
}

async function question14() {
	showEnunciado(13);

	const fat = await getPositiveValue(
		null,
		"Digite um número inteiro positivo: ",
		"> Valor invalido! Deve ser maior ou igual a 0. Tente novamente"
	);

	let fatIni = fat;
	let total = 1;

	while (fatIni >= 1) {
		total = total * fatIni;
		fatIni = fatIni - 1;
	}

	console.log(`O fatorial de ${fat} é ${total}`);
}

async function question15() {
	showEnunciado(14);
	let lastNum = 1;
	let penultNum = 1;
	let nexNum;

	for (let i = 0; i <= 10; i++) {
		console.log(lastNum);
		nexNum = lastNum + penultNum;
		penultNum = lastNum;
		lastNum = nexNum;
	}
}

const questoes = {
	1: () => question1(),
	2: () => question2(),
	3: () => question3(),
	4: () => question4(),
	5: () => question5(),
	6: () => question6(),
	7: () => question7(),
	8: () => question8(),
	9: () => question9(),
	10: () => question10(),
	11: () => question11(),
	12: () => question12(),
	13: () => question13(),
	14: () => question14(),
	15: () => question15(),
};

function showMenu() {
	console.log("\n===== MENU =====");
	console.log("Digite o número da questão (1 a 15)");
	console.log("Digite 'l' para listar todas as questões");
	console.log("Digite 'q' para sair");
	rl.question("Escolha uma opção: ", handleInput);
}

function handleInput(input) {
	const opcao = input.trim().toLowerCase();

	if (opcao === "q") {
		rl.close();
		console.log("Finalizando o programa...");
	} else if (opcao === "l") {
		console.log("\nQuestões disponíveis:");
		for (const num in QUESTIONS_DESCRIPTION) {
			console.log(
				`\n> Questão ${num} : \n${QUESTIONS_DESCRIPTION[num - 1]}`
			);
		}
		showMenu();
	} else if (!isNaN(opcao) && questoes[opcao]) {
		questoes[opcao]().then(() => {
			showMenu();
		});
	} else {
		console.warn("Opção inválida.");
		showMenu();
	}
}

showMenu();

/**
 * 	1: () => question1(), OK
	2: () => question2(), OK
	3: () => question3(), OK
	4: () => question4(), OK
	5: () => question5(), OK
	6: () => question6(), Ok
	7: () => question7(), OK
	8: () => question8(), OK
	9: () => question9(), OK
	10: () => question10(), OK
	11: () => question11(), OK
	12: () => question12(), OK 
	13: () => question13(), OK
	14: () => question14(), OK
	15: () => question15(), OK
};
 */
