// import readline from "node:readline";

import { debounce } from "../index.js";

const debounced = debounce((input) => {
	console.log("Processando input:\x1b[32m", input, "\x1b[0m");
}, 500);

// Cria a interface readline
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// rl.prompt();

// rl.on("line", (line) => {
// 	debounced(line.trim());
// 	rl.prompt();
// });

process.stdin.on("data", (data) => {
	const valor = data.toString().trim();
	debounced(valor);
});
