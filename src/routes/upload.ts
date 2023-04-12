import { Router } from "express";

import { SpreadsheetData } from "../interfaces/spreadsheetData";
import { formatter } from "../utils/data_formatter";
import { connectDB } from "../infra/db";

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

    const formattedData = formatter(data);
    console.log(formattedData);

    const db = await connectDB();
    const backlog = db.collection("backlog2");

    if (formattedData.length === 0) {
      return res
        .status(400)
        .json({ error: "No data was found in the spreadsheet" });
    }

    await backlog.insertMany(formattedData, {
      ordered: false,
      ignoreDuplicates: true,
    });

    res.status(200).json({ message: "Backlog inserted!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the uploaded file" });
  }
});

export { uploadRouter };
