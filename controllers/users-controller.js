const { v4: uuidv4 } = require("uuid");

let Users = [
  {
    id: "1",
    user: "wachimingo",
    password: "abc123",
    email: "example@example.com",
  },
];

const saveUser = (req, res, next) => {
  const { user, password, email } = req.body;
  const id = uuidv4();
  const createdUser = { id, user, password, email };
  Users.push(createdUser);
  res.status(201).json({ place: createdUser });
};

const getAllUsers = (req, res, next) => {
  res.json({ user: Users });
};

const getUsersById = (req, res, next) => {
  const user = Users.find((p) => {
    return p.id === req.params.pid;
  });
  if (!user) {
    const error = new Error("usuario no existe para el id especificado");
    error.code = 404;
    next(error);
  } else {
    res.json({ user });
  }
};

exports.saveUser = saveUser;
exports.getAllUsers = getAllUsers;
exports.getUsersById = getUsersById;
