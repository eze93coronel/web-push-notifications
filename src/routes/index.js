const {Router} = require('express');//importamos del frentword router utiloizado parav definir rutas 
const router = Router();
 const webpush = require('../webpush')   // web push encargado de manejar las notificaciones
  let pushSubscription;

   router.post('/subscription', async (req,res) =>{ // escuchamos la ruta llamada subscriptions 
     pushSubscription =req.body; // vemos el coebpùshhntenido de lo que envimos
     res.status(200).json();//esta sintaxis espara poner json vacio "res.status().json(), respondemos ala peticion copmn jsonm vacio "

   });

   router.post('/new-message', async (req,res) =>{

    const {message} = req.body;
    const myDate = JSON.stringify({
      title: 'usamos servirs workers mans yeahhh ',
      message: message
    })

  try {
   await webpush.sendNotification(pushSubscription, myDate);
  } catch (error) {
    console.log(error)
  }

  });



module.exports = router; 
