import { HttpResponse } from "../protocols/http";
import { FetchBacklog } from "../../domain/usecases/FetchBacklog";
import { Controller } from "../protocols/controller";
import { ok, serverError } from "../helpers/http-helper";

export class FetchBacklogController implements Controller {
  constructor(private readonly fetchBacklog: FetchBacklog) {}

  async handle(): Promise<HttpResponse> {
    try {
      const backlogData = await this.fetchBacklog.fetch();

      if ("error" in backlogData) {
        return {
          statusCode: 404,
          body: { error: backlogData.error },
        };
      }
      return ok(backlogData);
    } catch (error) {
      return serverError();
    }
  }
}
