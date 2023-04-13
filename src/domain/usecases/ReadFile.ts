import { BackLog } from "../../domain/entities/backlog";
import * as xlsx from "xlsx";
import S3 from "aws-sdk/clients/s3";

export interface ReadFileRequest {
  read: (file: any) => BackLog.SpreadsheetData[];
  uploadToS3: (file: S3UploadPayload) => void;
}

type S3UploadPayload = {
  base64data: string;
  path: string;
  fileName: string;
  fileType: string;
  extension: string;
};

export class ReadFile implements ReadFileRequest {
  constructor(private s3: S3) {}

  uploadToS3 = async (file: S3UploadPayload) => {
    const { base64data, path, fileName, fileType, extension } = file;
    const params = {
      Bucket: process.env.LINODE_BUCKET || "teste",
      Key: `${path}/${fileName}.${extension}`,
      Body: Buffer.from(base64data, "base64"),
      ACL: "public-read",
      ContentType: `${fileType}/${extension}`,
    };
    const { Location } = await this.s3.upload(params).promise();
    return Location;
  };

  read = (file: any) => {
    // const location = this.uploadToS3(file);
    const workbook = xlsx.readFile(file!.path);
    const worksheet =
      workbook.Sheets[
        workbook.SheetNames[
          workbook.SheetNames.findIndex((item) => item === "Backlog") || 0
        ]
      ];
    const data: BackLog.SpreadsheetData[] = xlsx.utils.sheet_to_json(worksheet);
    return data;
  };
}
