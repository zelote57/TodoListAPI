const { v4: uuidv4 } = require("uuid");

let DUMMY_Users = [
  {
    id: "1",
    user: "wachimingo",
    password: "abc123",
    email: "example@example.com",
  },
  {
    id: "2",
    user: "exaul",
    password: "elmasperronaqui",
    email: "exaul@example.com",
  },
];
const getAllUsers = (req, res, next) => {
  res.json({ user: DUMMY_Users });
};

const getUsersById = (req, res, next) => {
  const user = DUMMY_Users.find((u) => {
    return u.id === req.params.pid;
  });
  if (!user) {
    const error = new Error("usuario no existe para el id especificado");
    error.code = 404;
    next(error);
  } else {
    res.json({ user });
  }
};
const saveUser = (req, res, next) => {
  const { user, password, email } = req.body;
  const id = uuidv4();
  const createdUser = { id, user, password, email };
  DUMMY_Users.push(createdUser);
  res.status(201).json({ user: createdUser });
};
const loginUser = (req, res, next) => {
  const { user, password } = req.body;
  const existingUser = DUMMY_Users.find((u) => u.user === user);
  if (!existingUser || existingUser.password !== password) {
    const error = new Error("Usuario o contraseña incorrectos");
    error.code = 401; // Unauthorized
    return next(error);
  }
  res.status(200).json({ message: "Inicio de sesión exitoso" });
  //muestra mensaje y el cuerpo de usario
  //.json({ message: "Inicio de sesión exitoso", user: existingUser });
};

module.exports = { getAllUsers, getUsersById, saveUser, loginUser };
