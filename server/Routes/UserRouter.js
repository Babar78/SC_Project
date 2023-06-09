const express = require("express");
const Router = express.Router();

const userController = require("../Controllers/UserController");
const upload = require("../Middleware/Upload");

Router.post(
  "/register",
  upload.fields([{ name: "image", maxCount: 1 }]),
  userController.createUser
);

Router.post("/login", userController.loginUser);

Router.post(
  "/updateProfile/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  userController.updateProfile
);

module.exports = Router;
