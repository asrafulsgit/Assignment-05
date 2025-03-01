

function getCurrentTime() {
     let hours = 0;
     let timeZoon;

     let now = new Date()
     let calculateHouse = now.getHours();
     let minutes = now.getMinutes();
     let seconds = now.getSeconds();

     if(calculateHouse > 12){
          hours += (calculateHouse-12)
          timeZoon = 'PM'
     }else{
          hours +=calculateHouse
          timeZoon = 'AM'
     }

     hours < 10 ? hours = `0${hours}` : hours 
     minutes < 10 ? minutes = `0${minutes}` : minutes 
     seconds < 10 ? seconds = `0${seconds}` : seconds 

     return (`${hours}:${minutes}:${seconds} ${timeZoon}`);
}

function getCurrentDate(){
     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     let today = new Date();
     let day = days[today.getDay()]
     let month = months[today.getMonth()]
     let date = today.getDate()
     let year = today.getFullYear();
     return {day,month,date,year}
}


