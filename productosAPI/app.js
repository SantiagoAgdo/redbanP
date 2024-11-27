const express = require('express');
const bodyParser = require('body-parser');
const productosRuta = require('./routes/productosRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/productos', productosRuta);

app.use(errorHandler);

app.listen(port, () => {
  console.log("runnnn");
});
