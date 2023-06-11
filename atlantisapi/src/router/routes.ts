import express from "express";
import appController from "../controller/appController";


const router = express.Router()

router.post("/create", appController.create)

router.get("/read", appController.read)

router.put("/update", appController.update)

router.delete("/delete", appController.delete)

export default router