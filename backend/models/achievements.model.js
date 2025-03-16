import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    icon: {
        type: String,
    },
});

export const achievement = mongoose.model("achievement", achievementsSchema);

export default achievement;
