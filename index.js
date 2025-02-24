let a=1;
let b=3;




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
 
    console.log();
 
alert(suma(1,2,3,4,5))
alert(resta(1,2,3,4,5))
alert(m(1,2,3,4,5))
alert(division(1,2,3,4,5))





