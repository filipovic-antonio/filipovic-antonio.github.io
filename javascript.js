const lightBulbSwitch = document.querySelector('#lightBulbSwitch');
const lightbulbImage = document.querySelector('#lightbulbImage');

let isLightBulbOn = false;


lightBulbSwitch.addEventListener('click', function(){
    
    if(isLightBulbOn) {
        lightbulbImage.src ='lightOff.png'
    isLightBulbOn= false;
    } else {
        lightbulbImage.src ='lightOn.png'
        isLightBulbOn= true;
    } 
    console.log(isLightBulbOn);
});
