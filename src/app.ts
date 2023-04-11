import express from "express";
import multer from "multer";
import * as xlsx from "xlsx";

import { prisma } from "./prisma";
import { SpreadsheetData } from "./interfaces/spreadsheetData";
import { formatter } from "./utils/data_formatter";

const app = express();

const upload = multer({ dest: "uploads/" });

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), async (req, res) => {
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

    if (formattedData.length === 0) {
      return res
        .status(400)
        .json({ error: "No data was found in the spreadsheet" });
    }

    await prisma.backlog.createMany({
      data: formattedData,
      skipDuplicates: true,
    });

    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the uploaded file" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
