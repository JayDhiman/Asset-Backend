import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    sNo: { type: String, required: true },
    Machines: { type: String, required: true },
    Count: { type: Number, required: true, min: 0 },
    Assigned: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
