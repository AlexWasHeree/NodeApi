import express from 'express';

const app = express();

app.use(express.json());

//CONFIGURE CORS

const port = process.env.PORT || 3000;

app.listen(8000, function () {
  console.log('Running on port -' + port);
});
