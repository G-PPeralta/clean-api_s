import { Router } from "express";
import { UploadController } from "../presentation/controllers/upload";
import { Credentials } from "aws-sdk";
import { SaveBacklog } from "../domain/usecases/SaveBacklog";
import { ReadFile } from "../domain/usecases/ReadFile";
import { PrismaClient } from "@prisma/client";

import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  endpoint: process.env.LINODE_ENDPOINT,
  region: process.env.LINODE_STORAGE_REGION,
  sslEnabled: true,
  s3ForcePathStyle: false,
  credentials: new Credentials({
    accessKeyId: process.env.LINODE_ACCESS_KEY || "teste",
    secretAccessKey: process.env.LINODE_SECRET_KEY || "teste",
  }),
});

const prisma = new PrismaClient();

const saveBacklog = new SaveBacklog(prisma);
const readFile = new ReadFile(s3);

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
