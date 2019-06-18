"use strict"
        var i;
        var f="fizz";
        var b="buzz";
        for(var j=0; j<50; j++){
            console.log(j);
        }
        
        i=0;
        while(i<51){
            console.log(i);
            i=i+2;
        
        }
        for(var k=0; k<=100; k++){
            console.log(k);
             if(k % 5 === 0) {
                console.log(b);
            }
            if(k % 3 === 0) {
                console.log(f);
                }
            if((k % 3 === 0) && (k % 5 === 0)) {
                console.log(f+b);
            }   
        } 
