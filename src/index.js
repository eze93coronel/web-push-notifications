require('dotenv').config();
const express  = require('express')
 const morgan  = require('morgan');
 const path = require('path'); // modulo q nos permite unir direccions de directorio 
 const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded ({extended: false}))// para transcribir los datos que llegan en formato  de formulario del frontend.
app.use(express.json())  //  esesto es para convertir los datos que llegan del servidor del frontend en un formato json 
  

//routes 

app.use(require('./routes/index'));

// conntent stactic 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('server listening....');