import multer from "multer";
import path from "path";
import fs from "fs";

// Создаем директории для хранения файлов, если они не существуют
const createDirectoryIfNotExists = (directory: string) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

// Директории для разных типов файлов
const documentsDir = path.join(__dirname, "../../uploads/documents");
const newsImagesDir = path.join(__dirname, "../../uploads/news");
const competitionImagesDir = path.join(__dirname, "../../uploads/competitions");

// Создаем директории
createDirectoryIfNotExists(documentsDir);
createDirectoryIfNotExists(newsImagesDir);
createDirectoryIfNotExists(competitionImagesDir);

// Конфигурация для документов
const documentStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, documentsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Конфигурация для изображений новостей
const newsImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, newsImagesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Конфигурация для изображений соревнований
const competitionImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, competitionImagesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Фильтр для документов
const documentFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".txt",
  ];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Только документы разрешены для загрузки"));
  }
};

// Фильтр для изображений
const imageFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Только изображения разрешены для загрузки"));
  }
};

// Создаем экземпляры multer для разных типов файлов
export const documentUpload = multer({
  storage: documentStorage,
  fileFilter: documentFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

export const newsImageUpload = multer({
  storage: newsImageStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export const competitionImageUpload = multer({
  storage: competitionImageStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
