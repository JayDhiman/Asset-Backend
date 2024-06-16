import mongoose from "mongoose";

const softwareSchema = new mongoose.Schema({}, { timestamps: true });

export const Software = mongoose.model("Software", softwareSchema);
