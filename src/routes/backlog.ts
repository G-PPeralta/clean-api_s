import { Router } from "express";
import { FetchBacklog } from "../domain/usecases/FetchBacklog";
import { FetchBacklogController } from "../presentation/controllers/fetchBacklog";

const backlogRouter = Router();

const fetchBacklog = new FetchBacklog();
const fetchBacklogController = new FetchBacklogController(fetchBacklog);

backlogRouter.get("/", async (_req, res) => {
  try {
    const result = await fetchBacklogController.handle();
    res.status(result.statusCode).json(result.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export { backlogRouter };
