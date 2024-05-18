const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuiv4} = require('uuid');

const taskRoutes = require('./routes/task-routes');

const app = express();

app.use(bodyParser.json());
app.use('api/task', taskRoutes);


app.listen(4000);