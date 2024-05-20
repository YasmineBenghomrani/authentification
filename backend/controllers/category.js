import Category from "../models/Category.js";

export async function createCategory(req, res) {
  const { name, qte, description } = req.body;

  if (!name || !description || !qte) {
    res.send({
      error: true,
      message: "you must provide all value",
    });
  }

  try {
    const categoryCreated = await Category.create({
      name,
      description,
      qte,
    });

    res.send({
      message: "category created with success",
      category: categoryCreated,
    });
  } catch (error) {
    res.send({
      error: true,
      message: error.message,
    });
  }
}
export async function getAllCategory(req, res) {
  const categories = await Category.find();
  res.send(categories);
}
export async function getCategory(req, res) {
  const oneCategory = await Category.findById(req.params.id);
  if (!oneCategory) {
    res.send({ message: "This category does not exist" });
  } else {
    res.send(oneCategory);
  }
}
export async function UpdateCategory(req, res) {
  const updateUser = await Category.findByIdAndUpdate(req.params.id);
  if (!updateUser) {
    res.send({ message: "This user doent exist" });
  } else {
    res.send({ message: "Updated with success" });
  }
}
export async function deleteCategory(req, res) {
  const deleteCategory = await Category.findByIdAndDelete(req.params.id);
  if (!deleteCategory) {
    res.send({ message: "This category doent exist" });
  } else {
    res.send({ message: "Deleted with success" });
  }
}
