import { Utilitario_Membro_Prototipo } from "../../Utilitario_Membro_Prototipo.ts";

const Utilitario_Membro_Prototipo_Dotnet = new Utilitario_Membro_Prototipo({
  metodo_de_uso:
    "Objeto . Metodo() || desencadeando com . ponto vai usar membro da instancia",
  converter_para_numeroInteiro: "Convert.ToInt32() || .ToInt32()",
  converter_para_texto: "Convert.ToString() || .ToString()",
  converter_para_boleano: "Convert.ToBoolean() || .ToBoolean()",
  descobrir_tipo: ".GetType()",
});

console.log(Utilitario_Membro_Prototipo_Dotnet);
