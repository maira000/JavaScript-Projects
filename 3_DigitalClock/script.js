const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') //where clock is an id
//we can use both

setInterval(function () { //setInterval method 

  let date = new Date(); //date is an object
  // console.log(date.toLocaleTimeString());
  
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);