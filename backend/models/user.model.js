import mongoos from "mongoose";

const userSchema = new mongoos.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    preferredLanguage: {
      type: String,
      default: "",
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    // Lesson Completed (no default value, type Integer)
    lessionCompleted: {
      type: Number,
      default: "",
    },
    // Module Completed (default -1)
    moduleCompleted: {
      type: Number,
      default: "-1",
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoos.model("User", userSchema);
