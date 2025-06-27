// Trabalho feito por Mauro Victor P. Dias

// Seção 1: Estruturas de Controle Avançadas
// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

export function ehDataValida(dia, mes, ano) {
	// Impede valores negativos e fora dos limites :
	if (dia < 1 || mes < 1 || dia > 31 || mes > 12 || ano < 1) return false;

	const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

	const diasPorMes = [
		31,
		anoBissexto ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	return dia <= diasPorMes[mes - 1];
}

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

// A questão 2 pode ser encontrada no arquivo : ./testes/acheONumero.js

// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

export const palavrasUnicas = (frase) => {
	const palavras = frase.split(" ");
	const dicionario = {};

	for (const palav of palavras) {
		if (dicionario[palav]) {
			dicionario[palav] += 1;
		} else {
			dicionario[palav] = 1;
		}
	}

	const palavrasUnicas = [];

	Object.keys(dicionario).forEach((palav) => {
		if (dicionario[palav] === 1) palavrasUnicas.push(palav);
	});

	return palavrasUnicas;
};

// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.
export function fatorial(n) {
	if (n < 0) throw Error("Fatorial não recebe número negativo");

	if (n === 0) return 1;

	return n * fatorial(n - 1);
}

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

export function debounce(fn, delay) {
	return function (...args) {
		setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

export function memoize(fn) {
	const cache = {};

	return (...args) => {
		const key = JSON.stringify(args);

		if (key in cache) {
			return cache[key];
		}

		const resultado = fn(...args);
		cache[key] = resultado;
		return resultado;
	};
}

// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

export function ordenaListaDeProdutos(list) {
	const orderedList = list.sort((pa, pb) => pa.price - pb.price);

	return orderedList.map((prod) => prod.name);
}

// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

export function groupClients(list) {
	const clientes = list.reduce((clientList, dados) => {
		const { cliente, total } = dados;

		if (!clientList[cliente]) {
			clientList[cliente] = 0;
		}

		clientList[cliente] += total;
		return clientList;
	}, {});

	const result = [];

	for (const [cliente, total] of Object.entries(clientes)) {
		result.push({ [cliente]: total });
	}

	return result;
}

// 9. Conversão Entre Formatos
// Escreva duas funções:
//     - paresParaObjeto(pares) recebe um array de pares [ [chave,
//     valor], ... ] e retorna o objeto equivalente.
//     - objetoParaPares(obj) faz o inverso, retornando um array de
//     pares.

export function paresParaObjeto(listaDePares) {
	const objeto = {};

	for (const [chave, valor] of listaDePares) {
		objeto[chave] = valor;
	}

	return objeto;
}

export function objetoParaPares(objeto) {
	const listaDePares = [];

	for (const chave in objeto) {
		if (objeto.hasOwnProperty(chave)) {
			listaDePares.push([chave, objeto[chave]]);
		}
	}

	return listaDePares;
}
