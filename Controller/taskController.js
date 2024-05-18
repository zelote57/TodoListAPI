const DUMMY_TASKS = [
    {
      "id": 1,
      "descripcion": "Completar informe mensual",
      "isCompleted": false,
      "user_id": 123
    },
    {
      "id": 2,
      "descripcion": "Enviar correo electrónico de seguimiento",
      "isCompleted": true,
      "user_id": 456
    },
    {
      "id": 3,
      "descripcion": "Preparar presentación para reunión",
      "isCompleted": false,
      "user_id": 789
    },
    {
      "id": 4,
      "descripcion": "Llamar al cliente para confirmar cita",
      "isCompleted": false,
      "user_id": 123
    },
    {
      "id": 5,
      "descripcion": "Revisar y aprobar propuesta de proyecto",
      "isCompleted": true,
      "user_id": 456
    }
];

const getAllTask = (req, res, next) => {    
    res.json({DUMMY_TASKS});
};

const deleteTask = (req, res, next) => {
  const TaskId = req.params.pid;
  DUMMY_TASKS = DUMMY_TASKS.filter(t => t.id !== taskId)
  res.status(200).json({message: 'Tarea eliminada exitosamente'});
};


exports.getAllTask = getAllTask;
exports.deleteTask = deleteTask;