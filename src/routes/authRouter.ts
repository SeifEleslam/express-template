import { Router } from "express";
import { login, register } from "../controllers/auth";
import validator from "../middlewares/validator";
import {
  loginSchema,
  registerSchema,
} from "./validations/authValidationSchemas";

const router = Router();
router.post("/login", validator(loginSchema), login);
router.post("/register", validator(registerSchema), register);

export default router;
