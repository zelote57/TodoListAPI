const { v4: uuidv4 } = require("uuid");

class Task {
  constructor(descripcion, isCompleted, user_id) {
    this.id = uuidv4();
    this.descripcion = descripcion;
    this.isCompleted = isCompleted;
    this.user_id = user_id;
  }
}

module.exports = Task;
