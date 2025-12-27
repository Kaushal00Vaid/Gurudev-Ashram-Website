import { body } from "express-validator";

export const signupValidator = [
  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .matches(/^(\+91)?[6-9]\d{9}$/)
    .withMessage("Invalid Indian phone number"),

  ,
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("Name must be between 2 and 30 characters"),
  body("email").optional().isEmail().withMessage("Invalid email address"),
];

export const verifyOtpValidator = [
  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .matches(/^(\+91)?[6-9]\d{9}$/)
    .withMessage("Invalid phone number"),

  body("otp")
    .notEmpty()
    .withMessage("OTP is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be 6 digits"),
];
