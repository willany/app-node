const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controller/BoxController");
const FileController = require("./controller/FileController");

routes.post("/boxes", BoxController.store);
routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

routes.get("/boxes/:id", BoxController.show);

module.exports = routes;
