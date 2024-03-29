export namespace BackLog {
  export interface BackLogContent {
    id?: number;
    vim: string;
    numDoc: string;
    procStVim: string;
    motivoDaExcecao: string;
    nomeDoFornecedor: string;
    referencia: string;
    fornecedor: string;
    docCompras: string;
    funcaoAtual: string;
    agentAtual: string;
    centro: string;
    empr: number;
    pdTipDoc: string;
    tipo: string;
    denominacao: string;
    montanteBruto: number;
    dataLancamento: Date;
    dataDocumento: Date;
    dataVencimento: Date;
    moedaDoc: string;
    iniciarEm: Date;
    userEmail: string;
    tempoParado: number;
    diaDaSemana: number;
    diaDaSemanaNominal: string;
    vencimentoLiquido: Date;
    diasAPagar: number;
    atraso: string;
    recebidoEmAtraso: number;
    recebidoEmAtrasoNominal: string;
    status: string;
  }

  export interface SpreadsheetData {
    "ID do doc.": string;
    "Num. doc.": string;
    "ProcSt VIM": string;
    "Motivo da exceção": string;
    "Nome do fornecedor": string;
    Referência: string;
    Fornecedor: string;
    "Doc.compras": string;
    "Função atual": string;
    AgentAtual: string;
    Centro: string;
    "Empr.": string;
    "PD tip doc": string;
    Tipo: string;
    Denominação: string;
    "Mont.bruto": number;
    "Dt.lçto.": number;
    "Data doc.": number;
    "Data venc.": number;
    "Moeda doc.": string;
    "Iniciar em": number;
    "E-mail User": string;
    "Tempo parado": number;
    "DIA DA SEMANA": number;
    "DIA DA SEMANA 2": string;
    "VENCIMENTO LIQUIDO": number;
    "DIAS A PAGAR/ATRASO": number;
    ATRASO: string;
    "RECEBIDO EM ATRASO": number;
    "RECEBIDO EM ATRASO2": string;
    Status: string;
  }
}
