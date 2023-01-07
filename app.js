const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routeMember = require('./route/member');
const logger = require('morgan');

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/api/covid/member/',routeMember);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})