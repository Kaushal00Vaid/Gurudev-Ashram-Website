import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    phone: {
      type: String,
      required: true,
      match: [
        /^(\+91)?[6-9]\d{9}$/,
        "Please enter a valid Indian phone number",
      ],
    },
    address: {
      line1: { type: String, trim: true },
      line2: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      pincode: {
        type: String,
        match: [/^[1-9][0-9]{5}$/, "Please enter a valid Indian pincode"],
      },
      country: {
        type: String,
        default: "India",
      },
    },
    verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: {
      type: String,
      select: false, // never expose
    },
    otpExpiresAt: {
      type: Date,
      select: false,
    },
    otpAttempts: {
      type: Number,
      default: 0,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
