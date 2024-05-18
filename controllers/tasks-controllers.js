const HttpError = require('../models/http-error');
const Task = require('../models/task');

let DUMMY_TASKS = [
    {
      id: '1',
      descripcion: "Completar informe mensual",
      isCompleted: false,
      user_id: 123
    },
    {
      id: '2',
      descripcion: "Enviar correo electrónico de seguimiento",
      isCompleted: true,
      user_id: 456
    },
    {
      id: '3',
      descripcion: "Preparar presentación para reunión",
      isCompleted: false,
      user_id: 789
    },
    {
      id: '4',
      descripcion: "Llamar al cliente para confirmar cita",
      isCompleted: false,
      user_id: 123
    },
    {
      id: '5',
      descripcion: "Revisar y aprobar propuesta de proyecto",
      isCompleted: true,
      user_id: 456
    }
];

const getAllTask = (req, res, next) => {
    res.json({ tasks: DUMMY_TASKS });
};

const getTaskById = (req, res, next) => {
    const taskId = req.params.tid;
    const task = DUMMY_TASKS.find(t => t.id === taskId);

    if (!task) {
        throw new HttpError('Could not find a task for the provided id.', 404);
    }

    res.json({ task });
};

const deleteTask = (req, res, next) => {
  const TaskId = req.params.pid;
  DUMMY_TASKS = DUMMY_TASKS.filter(t => t.id !== taskId)
  res.status(200).json({message: 'Tarea eliminada exitosamente'});
};


module.exports = {
  getAllTask,
  getTaskById,
  deleteTask
};
