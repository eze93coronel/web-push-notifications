const PUBLIC_VAPID_KEY = 'BK0Adim_ieF3PfYxRSz4qXQ5XoZwhr1AEw-ORvZrvhvRqZqwTGtGvLpUE1WylLQNAKzMaTLDXTSQzpJKIRN0KVw';


const subscription = async () =>{

   // swervir worker
  const register =  await navigator.serviceWorker.register('/servirWorkers.js',{
        scope :'/'
    });
    console.log('new servir worker!!!');

 const subscription = await register.pushManager.subscribe({
        userVisibleOnly:  true,
        applicationServerKey : PUBLIC_VAPID_KEY

    });

    await fetch('/subscription',{
       method: 'POST',
       body: JSON.stringify(subscription),
       headers: {
           "content-type": "application/json"
       }
   });

   console.log('SUBSCRIBED!!!');
};
  const form = document.querySelector('#myForm');
 
 const message =  document.querySelector('#message');
  console.log(message.value);
form.addEventListener('submit', e =>{
    e.preventDefault();
    fetch('/new-message',{
        method: 'POST',
        body : JSON.stringify({
            message : message.value
        }),
        headers : {
            'Content-Type': 'application/json'
        }
    })
    form.reset();
})

subscription();