var interval;

function countdown() {
  clearInterval(interval);
  var timer = document.querySelector('.js-timeout')
  var second = document.querySelector('.second')
  var minute = document.querySelector('.minute')
  var minutes = 15
  var seconds = 0

  interval = setInterval( function() {
    let cached = JSON.parse(window.sessionStorage.getItem('time'));
    if(window.sessionStorage.getItem('time')){
        if (cached.minute  == 0 && cached.minute  == 0){
            cached.minute = 0
            cached.second = 0
            clearInterval(interval);
            return

        } 
        minutes = cached.minute   
        seconds = cached.second   
    }
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) {
        seconds = '0' + seconds;    
     }

     minute.innerHTML = minutes
     second.innerText = seconds
    window.sessionStorage.setItem( 'time', JSON.stringify({
       minute: minutes,
       second: seconds
   }));
   
     if (minutes == 0 && seconds == 0){
        console.log('done')
        clearInterval(interval);

     } 

  }, 1000);

}

countdown()
let cached = JSON.parse(window.sessionStorage.getItem('hotelreservation-cached'));

// submit
const submit_input = document.querySelector('.submit_input')
submit_input.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.input.value)

})

// file chosen
window.pressed = function(){
  var a = document.getElementById('aa');
  if(a.value == "")
  {
      fileLabel.innerHTML = "No Choose File";
  }
  else
  {
      var theSplit = a.value.split('\\');
      fileLabel.innerHTML = theSplit[theSplit.length-1];
  }
};
