import { Comando_Entrada_Saida } from "../../../Comando_Entrada_Saida.ts";

const Comando_Entrada_Console_Dotnet = new Comando_Entrada_Saida({
  localDeUso: "console",
  comando: "Console.ReadLine()",
  exemplo: `
  Console.WriteLine("Digite seu nome : ");
    var nome = Console.ReadLine();
    Console.WriteLine($"o nome digitado via input console é {nome}");
  `,
});
const Comando_Saida_Console_Dotnet = new Comando_Entrada_Saida({
  localDeUso: "console",
  comando: "Console.WriteLine(<target/alvo>)",
  exemplo: "...",
});

console.log(Comando_Entrada_Console_Dotnet);
console.log(Comando_Saida_Console_Dotnet);
