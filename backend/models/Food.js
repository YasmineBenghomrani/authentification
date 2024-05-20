import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
    },
    qte: {
      type: Number,
      default: 0,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "category required"],

      //   type: String,
      //   enum: ["Fruits", "Vegetable", "Meets"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userId required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Food", foodSchema);
