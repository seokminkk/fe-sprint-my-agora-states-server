const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.o

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.o
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.0

const port = 3001;
const discussionsRouter = require('./router/discussions');
app.use(cors());//cors처리
app.use(express.json());//express.json 적용
app.use(morgan("tiny"));//morgan 적용
// TODO: /discussions 경로로 라우팅합니다. o
app.use('/discussions', discussionsRouter); //  /discussions 경로로 라우팅

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('this is agora-states-server');
  throw '';
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
