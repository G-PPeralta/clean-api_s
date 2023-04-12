import { Request } from "express";

import { ReadFile } from "../../domain/usecases/ReadFile";
import { SaveBacklog } from "../../domain/usecases/SaveBacklog";
import { Controller } from "../protocols/controller";
import { BackLog } from "../../domain/entities/backlog";
import { ok, badRequest, serverError } from "../helpers/http-helper";

export class UploadController implements Controller {
  constructor(
    private readonly saveBacklog: SaveBacklog,
    private readonly readFile: ReadFile
  ) {}

  async handle(req: Request) {
    try {
      const file = req.file;
      const data = this.readFile.read(file);

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
