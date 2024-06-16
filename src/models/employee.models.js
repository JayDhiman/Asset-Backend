import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employee_id: { type: String, required: true, unique: true },
    full_name: { type: String, required: true },
    department: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { 
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          return /\+?\d{10,15}/.test(v);  // This regex allows for phone numbers with optional + and 10 to 15 digits.
        },
        message: props => `${props.value} is not a valid phone number!`
      } 
    },
    location: { type: String, required: true }
  
}, { timestamps: true });

export const Employee = mongoose.model("Employee", employeeSchema);
