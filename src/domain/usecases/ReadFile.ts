import { BackLog } from "../../domain/entities/backlog";
import * as xlsx from "xlsx";

export interface ReadFileRequest {
  read: (file: any) => BackLog.SpreadsheetData[];
}

export class ReadFile implements ReadFileRequest {
  read = (file: any) => {
    const workbook = xlsx.readFile(file!.path);
    const worksheet =
      workbook.Sheets[
        workbook.SheetNames[
          workbook.SheetNames.findIndex((item) => item === "Backlog") || 0
        ]
      ];
    const data: BackLog.SpreadsheetData[] = xlsx.utils.sheet_to_json(worksheet);

    return data;
  };
}
