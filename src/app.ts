import express from "express";
import multer from "multer";
import * as xlsx from "xlsx";

const app = express();

const upload = multer({ dest: "uploads/" });

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    const workbook = xlsx.readFile(file!.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
    res.status(200).json(data);
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
