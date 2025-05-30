


function scheduleTask(taskname , delay , repeat = false)
{
    if(repeat)
    {
            let id = setInterval(function(){
              console.log(`task ${taskname} started after ${delay} ms`);
            },delay);

           return id
    }else{
           let id = setInterval(function(){
              console.log(`task ${taskname} started after ${delay} ms`);
            },delay);

           return id
    }
}



function cancelRepeatingTask(id)
{
    clearInterval(id);
}



function scheduleTaskPromise(taskname , delay)
{
   let promise1 = new Promise(function(resolve)
   { 
       setTimeout(function(){
        resolve(`Task ${taskname} completed after ${delay} ms`);
       },delay);
   });
}







scheduleTask("Log Session", 1000);    
                 
let intervalId = scheduleTask("Check Notifications", 2000, true);

setTimeout(function() {
   cancelRepeatingTask(intervalId); 
}, 8000)


scheduleTaskPromise("Data Export", 1500).then(function (message){
    console.log(message)
});

