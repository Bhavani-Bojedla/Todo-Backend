const express = require("express");
const listRouter = express.Router();

const listController = require("../Controllers/listController");

listRouter.post("/createlist", listController.createList);
listRouter.put("/updatelist/:id", listController.updateList);
listRouter.delete("/deletelist/:id",listController.deleteList);
listRouter.get("/getlist/:id",listController.getList);

module.exports = listRouter;
