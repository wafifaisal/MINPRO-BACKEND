import { Request } from "express";
import multer from "multer";
import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, fileName: string) => void;

export const uploader = (
  type: "memoryStorage" | "diskStorage" = "memoryStorage",
  filePrefix: string,
  folderName?: string
) => {
  const defaultDir = path.join(__dirname, "../../public");

  const storage =
    type == "memoryStorage"
      ? multer.memoryStorage()
      : multer.diskStorage({
          destination: (
            _req: Request,
            _file: Express.Multer.File,
            cb: DestinationCallback
          ) => {
            const destination = folderName
              ? defaultDir + folderName
              : defaultDir;
            cb(null, destination);
          },
          filename: (
            _req: Request,
            file: Express.Multer.File,
            cb: FileNameCallback
          ) => {
            // asd.png
            const originalNameParts = file.originalname.split("."); // [asd, png]
            const fileExtension =
              originalNameParts[originalNameParts.length - 1]; // png
            const newFileName = filePrefix + Date.now() + "." + fileExtension;
            cb(null, newFileName);
          },
        });

  return multer({ storage });
};
