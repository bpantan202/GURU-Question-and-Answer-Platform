import express from "express";

import * as itemController from "../controllers/itemController.js";

const router = express.Router();

router.get("/", itemController.getQuestion);
router.get("/ans/:id", itemController.getAnswer);
router.post("/", itemController.createQuestion);
router.post("/ans", itemController.createAnswer);
// router.put("/:id", itemController.editItem);
// router.delete("/:id", itemController.deleteItem);

export default router;
