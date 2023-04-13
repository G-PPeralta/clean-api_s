import { Request } from "express";

import { ReadFile } from "../../domain/usecases/ReadFile";
import { SaveBacklog } from "../../domain/usecases/SaveBacklog";
import { Controller } from "../protocols/controller";
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
      // const location = await this.readFile.uploadToS3(file);

      await this.saveBacklog.save(data);

      return ok({ message: "Backlog inserted!" });
    } catch (error) {
      return serverError();
    }
  }
}
