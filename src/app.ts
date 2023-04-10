import express from "express";
import multer from "multer";
import * as xlsx from "xlsx";

import { prisma } from "./prisma";
import { Backlog } from "./interfaces/backlog";
import { SpreadsheetData } from "./interfaces/spreadsheetData";

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

    const formattedData: Backlog[] = data.map((item: SpreadsheetData) => {
      return {
        userEmail: item["E-mail User"],
        tempoParado: item["Tempo parado"],
        diaDaSemana: item["DIA DA SEMANA"],
        diaDaSemanaNominal: item["DIA DA SEMANA 2"],
        vencimentoLiquido: new Date(item["VENCIMENTO LIQUIDO"]),
        atraso: item["ATRASO"],
        recebidoEmAtraso: item["RECEBIDO EM ATRASO"],
        recebidoEmAtrasoNominal: item["RECEBIDO EM ATRASO2"],
        status: item["Status"],
      };
    });

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
