import jwt from "jsonwebtoken";

function Authenticated(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.send({
      message: "You cant access",
    });
  }

  try {
    const data = jwt.verify(token, "jwt_secret");
    console.log(data);
    req.userId = data.id;
  } catch (error) {
    res.send({
      message: "You should be authentified to access this route",
    });
  }

  next();
}

export default Authenticated;
