import { Router } from "express";

import { SpreadsheetData } from "../interfaces/spreadsheetData";
import { SaveBacklog } from "../domain/usecases/SaveBacklog";

const saveBacklog = new SaveBacklog();

import multer from "multer";
import * as xlsx from "xlsx";

const uploadRouter = Router();

const upload = multer({ dest: "uploads/" });

uploadRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const workbook = xlsx.readFile(file!.path);
    const worksheet =
      workbook.Sheets[
        workbook.SheetNames[
          workbook.SheetNames.findIndex((item) => item === "Backlog") || 0
        ]
      ];
    const data: SpreadsheetData[] = xlsx.utils.sheet_to_json(worksheet);

    await saveBacklog.save(data);

    res.status(200).json({ message: "Backlog inserted!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the uploaded file" });
  }
});

export { uploadRouter };

// import { Router } from "express";
// import { UploadController } from "../../src/presentation/controllers/upload";

// const uploadRouter = Router();
// const uploadController = new UploadController(upload);

// uploadRouter.post("/", upload.single("file"), async (_req, res) => {
//   try {
//     const result = await uploadController.handle();
//     res.status(result.statusCode).json(result.body);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// export { backlogRouter };
