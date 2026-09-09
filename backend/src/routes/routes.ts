import { Router, Request, Response } from "express";
import Home from "../controllers/home.controller";

const router = Router();

router.get("/", Home);

export default router;
