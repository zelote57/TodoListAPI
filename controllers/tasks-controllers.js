const HttpError = require("../models/http-error");
const Task = require("../models/task");
const { v4: uuiv4 } = require("uuid");

let DUMMY_TASKS = [
  {
    id: "1",
    descripcion: "Completar informe mensual",
    isCompleted: false,
    user_id: 123,
  },
  {
    id: "2",
    descripcion: "Enviar correo electrónico de seguimiento",
    isCompleted: true,
    user_id: 456,
  },
  {
    id: "3",
    descripcion: "Preparar presentación para reunión",
    isCompleted: false,
    user_id: 789,
  },
  {
    id: "4",
    descripcion: "Llamar al cliente para confirmar cita",
    isCompleted: false,
    user_id: 123,
  },
  {
    id: "5",
    descripcion: "Revisar y aprobar propuesta de proyecto",
    isCompleted: true,
    user_id: 456,
  },
];

const getAllTask = (req, res, next) => {
  res.json({ tasks: DUMMY_TASKS });
};

const getTaskById = (req, res, next) => {
  const taskId = req.params.tid;
  const task = DUMMY_TASKS.find((t) => t.id === taskId);

  if (!task) {
    throw new HttpError("Could not find a task for the provided id.", 404);
  }

  res.json({ task });
};

const updateTask = (req, res, next) => {
  const { isCompleted } = req.body;
  const taskId = req.params.tid;

  const updatedTask = { ...DUMMY_TASKS.find((t) => t.id === taskId) };
  const taskIndex = DUMMY_TASKS.findIndex((t) => t.id === taskId);

  updatedTask.isCompleted = isCompleted;

  DUMMY_TASKS[taskIndex] = updatedTask;

  res.status(200).json({ task: updatedTask });
};

const addTask = (req, res, next) => {
  const { descripcion, isCompleted, user_id } = req.body;
  const addtask = {
    id: uuiv4(),
    descripcion,
    isCompleted,
    user_id,
  };
  DUMMY_TASKS.push(addtask);
  res.status(200).json({ task: addtask });
}

const deleteTask = (req, res, next) => {
  const taskId = req.params.tid;
  DUMMY_TASKS = DUMMY_TASKS.filter((t) => t.id !== taskId);
  res.status(200).json({ message: "Tarea eliminada exitosamente" });
};

module.exports = {
  getAllTask,
  getTaskById,
  updateTask,
  addTask,
  deleteTask,
};
