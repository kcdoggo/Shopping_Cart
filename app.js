const express = require('express');
const cors = require('cors');
const checkoutHandler = require('./Handler/checkoutHandler'); 
const Item = require('./Handler/Enums/Items'); 
const PriceHandler = require('./Handler/PriceHandler');

const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'))

app.use(cors({
    origin: '*', 
}));



app.get('/', (req, res) => {
    res.send("ok!");
  });
  

app.post('/process', checkoutHandler.checkoutHandler);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
