import * as xlsx from "xlsx";

import { Request, Response } from "express";
import { SaveBacklog } from "../../domain/usecases/SaveBacklog";
import { Controller } from "../protocols/controller";
import { BackLog } from "../../domain/entities/backlog";
import { ok, badRequest, serverError } from "../helpers/http-helper";

export class UploadController implements Controller {
  constructor(
    private readonly saveBacklog: SaveBacklog,
    private readonly req: Request
  ) {}

  async handle() {
    try {
      const file = this.req.file;
      const workbook = xlsx.readFile(file!.path);
      const worksheet =
        workbook.Sheets[
          workbook.SheetNames[
            workbook.SheetNames.findIndex((item) => item === "Backlog") || 0
          ]
        ];
      const data: BackLog.SpreadsheetData[] =
        xlsx.utils.sheet_to_json(worksheet);

      // if (data.length === 0) {
      //   return badRequest();
      // }

      await this.saveBacklog.save(data);

      return ok({ message: "Backlog inserted!" });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
