import { BackLog } from "../entities/backlog";

export interface Upload {
  upload: (
    spreadsheetData: BackLog.SpreadsheetData[]
  ) => Promise<BackLog.BackLogContent[]>;
}
