import mongoose from "mongoose";

const assetSchema  = new mongoose.Schema(
    {
        assetName: { type: String, required: true },
        assetCategory: { type: String, required: true },
        serialNo: { type: String, required: true, unique: true },
        processor: { type: String, required: true },
        os: { type: String, required: true },
        license: { type: String, required: true },
        brand: { type: String, required: true },
        status: { type: String, required: true, enum: ['In Use', 'Under Maintenance', 'Out of Service', 'Available'] },
        empID: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }, // Reference to Employee
        assignedDate: { type: Date },
        returnDate: { type: Date },
        email: { 
          type: String, 
          validate: {
            validator: function(v) {
              return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          } 
        },
        contact: { 
          type: String, 
          validate: {
            validator: function(v) {
              return !v || /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid contact number!`
          } 
        }
    },{timestamps: true}
    )

    export const Asset = mongoose.model("Asset",assetSchema)