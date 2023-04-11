import { SpreadsheetData } from "../interfaces/spreadsheetData";

export function formatter(sheet: SpreadsheetData[]) {
  return sheet.map((item: SpreadsheetData) => {
    return {
      vim: item["ID do doc."],
      numDoc: item["Num. doc."],
      procStVim: item["ProcSt VIM"],
      motivoDaExcecao: item["Motivo da exceção"],
      nomeDoFornecedor: item["Nome do fornecedor"],
      referencia: item["Referência"],
      fornecedor: item["Fornecedor"],
      docCompras: item["Doc.compras"],
      funcaoAtual: item["Função atual"],
      agentAtual: item["AgentAtual"],
      centro: item["Centro"],
      empr: Number(item["Empr."]),
      pdTipDoc: item["PD tip doc"],
      tipo: item["Tipo"],
      denominacao: item["Denominação"],
      montanteBruto: item["Mont.bruto"],
      dataLancamento: new Date(item["Dt.lçto."]),
      dataDocumento: new Date(item["Data doc."]),
      dataVencimento: new Date(item["Data venc."]),
      moedaDoc: item["Moeda doc."],
      iniciarEm: new Date(item["Iniciar em"]),
      userEmail: item["E-mail User"],
      tempoParado: Number(item["Tempo parado"]),
      diaDaSemana: Number(item["DIA DA SEMANA"]),
      diaDaSemanaNominal: item["DIA DA SEMANA 2"],
      vencimentoLiquido: new Date(item["VENCIMENTO LIQUIDO"]),
      diasAPagar: Number(item["DIAS A PAGAR/ATRASO"]),
      atraso: item["ATRASO"],
      recebidoEmAtraso: Number(item["RECEBIDO EM ATRASO"]),
      recebidoEmAtrasoNominal: item["RECEBIDO EM ATRASO2"],
      status: item["Status"],
    };
  });
}
