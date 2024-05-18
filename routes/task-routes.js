const express = require('express');

const {v4: uuiv4} = require('uuid');
const taskController = require('../controllers/tasks-controllers');

const router = express.Router();

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

router.get('/', taskController.getAllTask);

router.get('/:tid', taskController.getTaskById);

router.post('/', (req, res, next)=>{
  const {descripcion, isCompleted, user_id} = req.body;
    const addtask = {
        id: uuiv4(),
        descripcion,
        isCompleted,
        user_id
    };
    DUMMY_TASKS.push(addtask);
    res.status(200).json({task: addtask});
});

module.exports = router;
