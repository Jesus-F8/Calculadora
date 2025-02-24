document.addEventListener("DOMContentLoaded", function () {
const total=document.getElementById("display");
const btt=document.querySelectorAll(".botones button");



btt.forEach(button =>{

button.addEventListener("click", function(){
 const buttonText=this.innerText;
 if(!(buttonText==="C"|| buttonText==="←"||buttonText==="="))
 {
    alert(buttonText)
  display.value+=buttonText;
 }

     if(buttonText==="C" )                                                                                      
        {
            display.value="";
        }
    if (buttonText==="←") {
        display.value=display.value.slice(0, -1);     
    }    



    });

});

let suma =( ...b) =>
    {
     let sumt= b.reduce((acc,na)=> acc+na,0)
    return sumt;
    }

let resta =( ...b) =>
    {
        let rest= b.reduce((acc,na)=> acc-na,0)
        return rest;
    }
    
let m =( ...b) =>
    {
        let mult= b.reduce((acc,na)=> acc*na,1)
        return mult;
    }
    
let division =(  ...b) =>
    {
        let divt= b.reduce((acc,na)=> acc/na,1)
        return divt;
    }
 
});



 
