import { BackLog } from "../entities/backlog";
import { connectDB } from "../../infra/db";

export interface FetchBacklogRequest {
  fetch: () => Promise<BackLog.BackLogContent[]>;
}

export class FetchBacklog implements FetchBacklogRequest {
  fetch = async () => {
    try {
      const db = await connectDB();
      const backlog = db.collection("backlog");

      const data = await backlog.find().toArray();

      if (data.length === 0) {
        return { error: "No backlog data was found" };
      }

      return data;
    } catch (error) {
      console.error(error);
      return { error: "An error occurred while fetching the backlog data" };
    }
  };
}
