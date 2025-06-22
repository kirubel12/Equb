import express from "express";
import { createEqub, deleteEqub, getEqub, getEqubs, updateEqub } from "../controllers/equb.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const equbRouter = express.Router();

equbRouter.post("/", authMiddleware, createEqub);
equbRouter.get("/", authMiddleware, getEqubs);
equbRouter.get("/:id", authMiddleware, getEqub);
equbRouter.put("/:id", authMiddleware, updateEqub);
equbRouter.delete("/:id", authMiddleware, deleteEqub);

export default equbRouter;
