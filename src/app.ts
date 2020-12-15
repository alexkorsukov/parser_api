import express from 'express';
import bodyParser from 'body-parser';

import apiRouterV1 from './v1/routes/apiRouter';
import apiRouterV2 from './v2/routes/apiRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
  res.send('Root');
});

app.use('/api/v1', apiRouterV1);
app.use('/api/v2', apiRouterV2);

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});
