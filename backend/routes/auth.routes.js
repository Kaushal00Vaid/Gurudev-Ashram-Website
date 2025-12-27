import { Router } from "express";

import {
  signupValidator,
  verifyOtpValidator,
} from "../validators/auth.validator.js";
import { signup, verifyOtp } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signupValidator, signup);
router.post("/verify-otp", verifyOtpValidator, verifyOtp);

export default router;
