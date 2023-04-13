import { Router } from "express";
import { UploadController } from "../presentation/controllers/upload";

import { SaveBacklog } from "../domain/usecases/SaveBacklog";
import { ReadFile } from "../domain/usecases/ReadFile";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const saveBacklog = new SaveBacklog(prisma);
const readFile = new ReadFile();

import multer from "multer";

const uploadRouter = Router();

const upload = multer({ dest: "uploads/" });

const uploadController = new UploadController(saveBacklog, readFile);

uploadRouter.post("/", upload.single("file"), (req, res) => {
  try {
    uploadController.handle(req);

    res.status(200).json({ message: "Backlog inserted!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the uploaded file" });
  }
});

export { uploadRouter };
