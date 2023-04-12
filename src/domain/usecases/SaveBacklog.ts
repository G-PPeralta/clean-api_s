import { BackLog } from "../../domain/entities/backlog";
import { formatter } from "../../utils/data_formatter";
import { connectDB } from "../../infra/db";

export interface SaveBacklogRequest {
  save: (data: BackLog.SpreadsheetData[]) => void;
}

export class SaveBacklog implements SaveBacklogRequest {
  async save(data: BackLog.SpreadsheetData[]) {
    try {
      const formattedData = formatter(data);

      const db = await connectDB();
      const backlog = db.collection("backlog");

      if (formattedData.length === 0) {
        throw new Error("No data was found in the spreadsheet");
      }

      await backlog.insertMany(formattedData, {
        ordered: false,
        ignoreDuplicates: true,
      });
    } catch (error) {
      throw new Error("An error occurred while saving the backlog data");
    }
  }
}
