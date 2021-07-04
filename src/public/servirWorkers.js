console.log('servir workers');

self.addEventListener('push', e =>{
    
   const data = e.Data.json()
   console.log(data)
   self.registration.showNotification(data.title,{
       body: data.message,
       icon:'https://img2.pngio.com/arch-linux-logo-arch-linux-png-image-with-transparent-background-arch-linux-logo-png-840_859.png'
   });
});