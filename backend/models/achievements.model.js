import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

export const achievement = mongoose.model("achievement", achievementsSchema);
