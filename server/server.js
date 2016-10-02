const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Port number
const port = 4000;

// User bodyParser in app
app.use(bodyParser.json());

const rootRouter = require('./routes').rootRouter;

app.use('/api', rootRouter);

// Start server
app.listen(port);
console.log(`Server listening on port ${port}`)
