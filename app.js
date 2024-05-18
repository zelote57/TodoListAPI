const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuiv4} = require('uuid');

const taskRoutes = require('./routes/task-routes');
const HttpError = require('./models/http-error');

const app = express();

app.listen(4000);
