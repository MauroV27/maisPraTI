import {
	ehDataValida,
	fatorial,
	palavrasUnicas,
	memoize,
	groupClients,
	objetoParaPares,
	paresParaObjeto,
} from "../index.js";

const ERROR = "\x1b[31m";
const GREEN = "\x1b[32m";
const END_LINE = "\x1b[0m";

const showSuccess = (message) => console.log(`${GREEN}${message}${END_LINE}`);
const showError = (message) => console.log(`${ERROR}${message}${END_LINE}`);

function validateEhDataValida() {
	const data = [
		{ dia: 0, mes: 0, ano: 0, resp: false },
		{ dia: -1, mes: -1, ano: -1, resp: false },
		{ dia: 1, mes: 1, ano: 1, resp: true },
		{ dia: 27, mes: 4, ano: 2025, resp: true },
		{ dia: 29, mes: 2, ano: 2025, resp: false },
		{ dia: 26, mes: 6, ano: 2025, resp: true },
	];

	let passouEmTudo = true;

	for (const d of data) {
		if (ehDataValida(d.dia, d.mes, d.ano) !== d.resp) {
			showError(
				`[ERROR] : Falhou na função ehDataValida para o caso : ehDataValida(${d.dia}, ${d.mes}, ${d.ano})`
			);

			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em ehDataValida passaram");
	}
}

function validateFatorial() {
	const tests = [
		{ n: 0, resp: 1 },
		{ n: 5, resp: 120 },
		{ n: 4, resp: 24 },
		{ n: 1, resp: 1 },
		{ n: -1, resp: "Error" },
		{ n: 10, resp: 3628800 },
	];

	let passouEmTudo = true;

	for (const t of tests) {
		let resp = undefined;

		try {
			resp = fatorial(t.n);
		} catch (e) {
			if (
				t.resp !== "Error" ||
				e.message !== "Fatorial não recebe número negativo"
			) {
				passouEmTudo = false;
			}
		}

		if (t.resp !== "Error" && t.resp !== resp) {
			showError(
				`[ERROR] : Falhou na função ehDataValida para o caso : fatorial(${t.n}).`
			);

			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em fatorial passaram");
	}
}

function validatePalavrasUnicas() {
	const tests = [
		{ inpt: "olá olá mundo mundo", resp: [] },
		{ inpt: "A B A B C A D", resp: ["C", "D"] },
		{ inpt: "A B C D", resp: ["A", "B", "C", "D"] },
	];

	let passouEmTudo = true;

	for (const test of tests) {
		if (
			JSON.stringify(palavrasUnicas(test.inpt)) !==
			JSON.stringify(test.resp)
		) {
			showError(
				`[ERROR] : Falhou na função palavrasUnicas para o caso : palavrasUnicas(${test.inpt})`
			);
			console.log(" >> ", palavrasUnicas(test.inpt));

			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em palavrasUnicas passaram");
	}
}

function validateMemoize() {
	const tests = [
		{ n: 0, resp: 0 },
		{ n: 1, resp: 1 },
		{ n: 5, resp: 5 },
		{ n: 10, resp: 55 },
		{ n: 20, resp: 6765 },
	];

	function fib(n) {
		if (n <= 1) return n;
		return fib(n - 1) + fib(n - 2);
	}

	const fibMemo = memoize(fib);

	let passouEmTudo = true;

	for (const test of tests) {
		const result = fibMemo(test.n);
		if (result !== test.resp) {
			showError(
				`[ERROR] : Falhou na função memoize para o caso : memoize(${test.inpt})`
			);
			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em memoize passaram");
	}
}

function validateGroupClients() {
	const tests = [
		{
			inpt: [
				{ cliente: "A", total: 100 },
				{ cliente: "B", total: 200 },
				{ cliente: "C", total: 300 },
			],
			resp: [{ A: 100 }, { B: 200 }, { C: 300 }],
		},
		{
			inpt: [
				{ cliente: "A", total: 100 },
				{ cliente: "A", total: 200 },
				{ cliente: "A", total: 300 },
			],
			resp: [{ A: 600 }],
		},
		{
			inpt: [
				{ cliente: "A", total: 100 },
				{ cliente: "B", total: 300 },
				{ cliente: "C", total: 300 },
				{ cliente: "A", total: 200 },
				{ cliente: "C", total: 200 },
				{ cliente: "D", total: 0 },
			],
			resp: [{ A: 300 }, { B: 300 }, { C: 500 }, { D: 0 }],
		},
	];

	let passouEmTudo = true;

	for (const test of tests) {
		const result = groupClients(test.inpt);
		if (JSON.stringify(result) !== JSON.stringify(test.resp)) {
			showError(
				`[ERROR] : Falhou na função groupClients para o caso : groupClients(${JSON.stringify(
					test.inpt
				)})`
			);
			console.log(" >> ", result);

			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em groupClients passaram");
	}
}

function validateParesParaObjeto() {
	const tests = [
		{
			inpt: [
				["A", 1],
				["B", 2],
				["C", 3],
			],
			resp: { A: 1, B: 2, C: 3 },
		},
		{
			inpt: [["x", 42]],
			resp: { x: 42 },
		},
		{
			inpt: [],
			resp: {},
		},
	];

	let passouEmTudo = true;

	for (const test of tests) {
		const result = paresParaObjeto(test.inpt);
		if (JSON.stringify(result) !== JSON.stringify(test.resp)) {
			showError(
				`[ERROR] : Falhou em paresParaObjeto(${JSON.stringify(
					test.inpt
				)})`
			);
			console.log(" >> ", result);
			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em groupClients passaram");
	}
}

function validateObjetoParaPares() {
	const tests = [
		{
			inpt: { A: 1, B: 2, C: 3 },
			resp: [
				["A", 1],
				["B", 2],
				["C", 3],
			],
		},
		{
			inpt: { X: 42 },
			resp: [["X", 42]],
		},
		{
			inpt: {},
			resp: [],
		},
	];

	let passouEmTudo = true;

	for (const test of tests) {
		const result = objetoParaPares(test.inpt);
		if (JSON.stringify(result) !== JSON.stringify(test.resp)) {
			showError(
				`[ERROR] : Falhou em objetoParaPares(${JSON.stringify(
					test.inpt
				)})`
			);
			console.log(" >> ", result);
			passouEmTudo = false;
		}
	}

	if (passouEmTudo) {
		showSuccess("Todos os testes em objetoParaPares passaram");
	}
}

function runTestes() {
	console.log("----- Iniciando Testes -----");

	validateEhDataValida();
	validateFatorial();
	validatePalavrasUnicas();
	validateMemoize();
	validateGroupClients();
	validateParesParaObjeto();
	validateObjetoParaPares();

	process.exit();
}

runTestes();
