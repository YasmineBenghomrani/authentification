import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
    },

    qte: {
      type: Number,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("category", categorySchema);
