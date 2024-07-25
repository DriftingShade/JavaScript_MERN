import { model, Schema } from "mongoose";

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    numOfEmployees: {
      type: Number,
      required: [true, "Number of Employees is required"],
      min: [5, "Must have at least 5 Employees"],
    },
    manager: {
      type: String,
      required: [true, "Manager is required"],
      minlength: [4, "Manager name must be at least 4 characters"],
      maxlength: [255, "Manager name must be less than 255 characters"],
    },
  },
  { timestamps: true }
);

const Company = model("Company", CompanySchema);

export default Company;
