import { validationResult } from "express-validator";
import User from "../models/User.model.js";
import { generateOtp } from "../utils/generateOtp.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { phone, name, email } = req.body;

    let user = await User.findOne({ phone }).select("+otp +otpExpiresAt");

    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    if (user) {
      if (user.verified) {
        return res.status(400).json({
          success: false,
          message: "User already registered. Please login.",
        });
      }

      user.otp = otp;
      user.otpExpiresAt = otpExpiresAt;
      user.otpAttempts = 0;
      await user.save();
    } else {
      // create new user
      user = await User.create({
        phone,
        name,
        email,
        otp,
        otpExpiresAt,
        otpAttempts: 0,
        verified: false,
      });
    }

    // TODO: integrate SMS / WhatsApp service here
    console.log("OTP for testing:", otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your phone number",
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { phone, otp } = req.body;
    const user = await User.findOne({ phone }).select(
      "+otp +otpExpiresAt +otpAttempts"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please signup.",
      });
    }

    if (user.verified) {
      return res.status(400).json({
        success: false,
        message: "User already verified. Please login.",
      });
    }

    if (user.otpAttempts >= 5) {
      return res.status(400).json({
        success: false,
        message: "Too many attempts. Please request new OTP.",
      });
    }

    if (!user.otpExpiresAt || user.otpExpiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired. Please request new OTP.",
      });
    }

    if (user.otp !== otp) {
      user.otpAttempts += 1;
      await user.save();

      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    user.otpAttempts = 0;
    await user.save();

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Phone verified successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    });
  } catch (e) {
    console.error("Verify OTP error:", e);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
