export interface Backlog {
  id?: number;
  userEmail: string;
  tempoParado: number;
  diaDaSemana: number;
  diaDaSemanaNominal: string;
  vencimentoLiquido: Date;
  atraso: string;
  recebidoEmAtraso: number;
  recebidoEmAtrasoNominal: string;
  status: string;
}
