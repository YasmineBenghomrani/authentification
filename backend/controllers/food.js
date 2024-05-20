import Food from "../models/food.js";

export async function createFood(req, res) {
  const { name, qte, categoryId } = req.body;
  const userId = req.userId;
  console.log(userId);
  if (!name || !qte || !categoryId) {
    res.send({
      message: "Provide all values",
    });
  }

  try {
    const foodCreated = await Food.create({ name, qte, categoryId, userId });
    res.send({
      message: "Food created with success",
      food: foodCreated,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
}
export async function getAllFood(req, res) {
  const userId = req.userId;
  const foods = await Food.find({ userId: userId });
  res.send(foods);
}
export async function getFood(req, res) {
  const userId = req.userId;
  const foodId = req.params.id;

  const oneFood = await Food.findOne({
    userId: userId,
    _id: foodId,
  });

  if (!oneFood) {
    res.send({ message: "This food does not exist" });
  } else {
    res.send(oneFood);
  }
}
export async function UpdateFood(req, res) {
  const userId = req.userId;
  const foodId = req.params.id;
  const newInfo = req.body;

  const UpdateFood = await Food.findOneAndUpdate(
    {
      userId: userId,
      _id: foodId,
    },
    newInfo
  );
  if (!UpdateFood) {
    res.send({ message: "This food doent exist" });
  } else {
    res.send({ message: "Updated with success" });
  }
}
export async function deleteFood(req, res) {
  const userId = req.userId;
  const foodId = req.params.id;

  const deleteFood = await Food.findOneAndDelete({
    userId: userId,
    _id: foodId,
  });
  if (!deleteFood) {
    res.send({ message: "This food doent exist" });
  } else {
    res.send({ message: "Deleted with success" });
  }
}
