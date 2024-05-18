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

const updateTask = (req, res, next)=>{
  const { isCompleted } = req.body;
  const TaskId = req.params.tid;

  //console.log(placeId);

  const updatedTask = {... DUMMY_TASKS.find(t => t.id === TaskId)};
  const taskIndex = DUMMY_TASKS.findIndex(t => t.id === taskId);

  updatedTask.isCompleted = isCompleted;

  DUMMY_TASKS[taskIndex] = updatedTask;

  res.status(200).json({task: updatedTask});

};


const deleteTask = (req, res, next) => {
  const TaskId = req.params.pid;
  DUMMY_TASKS = DUMMY_TASKS.filter(t => t.id !== taskId)
  res.status(200).json({message: 'Tarea eliminada exitosamente'});
};


exports.getAllTask = getAllTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
