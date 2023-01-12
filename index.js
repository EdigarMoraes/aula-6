const prompt = require("prompt-sync") ();

salario = parseFloat(prompt("Digite seu salário: "));
ir = parseFloat(prompt("Digite seu imposto de renda: "));

salario_liquido = salario - ir;

console.log("Seu salário líquido é: ", salario_liquido);