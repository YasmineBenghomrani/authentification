import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "name required"],
    },
    lastName: {
      type: String,
      required: [true, "name required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: [true, "your email must be unique"],
    },
    password: {
      type: String,
      required: [true, "password required"],
      minLenght: [8, "your psword must be greater than a 8"],
    },
    age: {
      type: Number,
      required: [true, "you must provide your age"],
    },
    profilePicture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F9292244-default-avatar-icon-vector-of-social-media-user&psig=AOvVaw2MPmgbNF41Ri2ZTkHhWRi9&ust=1707575315390000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDDgvK7noQDFQAAAAAdAAAAABAE",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
