import { PrismaClient } from "@prisma/client";
import { BackLog } from "../../domain/entities/backlog";
import { formatter } from "../../utils/data_formatter";

export interface SaveBacklogRequest {
  save: (data: BackLog.SpreadsheetData[]) => void;
}

export class SaveBacklog implements SaveBacklogRequest {
  constructor(private prisma: PrismaClient) {}

  async save(data: BackLog.SpreadsheetData[]) {
    try {
      const formattedData = formatter(data);

      if (formattedData.length === 0) {
        throw new Error("No data was found in the spreadsheet");
      }

      await this.prisma.backlog.createMany({
        data: formattedData,
        skipDuplicates: true,
      });
    } catch (error) {
      throw new Error("An error occurred while saving the backlog data");
    }
  }
}
