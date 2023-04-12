import { Router } from "express";
import { UploadController } from "../presentation/controllers/upload";

import { SaveBacklog } from "../domain/usecases/SaveBacklog";
import { ReadFile } from "../domain/usecases/ReadFile";

const saveBacklog = new SaveBacklog();
const readFile = new ReadFile();

import multer from "multer";

const uploadRouter = Router();

const upload = multer({ dest: "uploads/" });

const uploadController = new UploadController(saveBacklog, readFile);

uploadRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    await uploadController.handle(req);

    res.status(200).json({ message: "Backlog inserted!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the uploaded file" });
  }
});

export { uploadRouter };
