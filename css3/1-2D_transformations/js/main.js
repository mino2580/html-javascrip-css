var i = 1;                        //  set your counter to 1
var numberOfLoops = 360;
var myTimeout = 35;               //  delay in ms

function myLoop()                 //  create a loop function
{
    setTimeout(function()         //  call a 3s setTimeout when the loop is called
    {
        //  put your code here: **************************************************
        // TRANSLATE                                        translate(50px,100px)
        document.getElementById("mydiv").style.transform = "translate(" + i + "px, " + i + "px)";
        console.info("Translate: x=" + i + ", y="  + i); 

        // V index.html UKAZAT 4 CASTI !!!
        // ROTATE                                             rotate(20deg);
        //document.getElementById("mydiv").style.transform = "rotate(" + i + "deg)"; 
        //console.info("Rotate: " + i + "°");

        // SCALE                                              scale(2, 3)
        //document.getElementById("mydiv").style.transform = "scale(" + i*0.01 + ", " + i*0.01 + ")";
        //console.info("Scale: x=" + i*0.01 + ", y="  + i*0.01); 

        // SKEWX                                              skewX(20deg)
       // document.getElementById("mydiv").style.transform = "skewX(" + i + "deg)"; 
      //  console.info("SkewX: " + i + "°");

        // SKEWY                                              skewY(20deg)
        //document.getElementById("mydiv").style.transform = "skewY(" + i + "deg)"; 
        //console.info("SkewY: " + i + "°");

        // SKEWY                                              skew(20deg, 10deg);
        //document.getElementById("mydiv").style.transform = "skew(" + i + "deg, " + i + "deg)";
        //console.info("Skew:  x=" + i + "°, y="  + i + "°"); 

        // SKEWY                                              skew(20deg, 10deg);
        //document.getElementById("mydiv").style.transform = "skew(" + i + "deg, " + (360 - i) + "deg)";
        //console.info("Skew:  x=" + i + "°, y="  + (360 - i) + "°"); 

        // VYZKOUSET OBE VARIANTY
        // MATRIX matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
        //                                                    matrix(1, 0, 0.5, 1, 150, 0)
        //document.getElementById("mydiv").style.transform = "matrix(" + 1 + ", " + i*0.01 + ", " + i*0.01 + ", " + 1 + ", " + i + ", " + i + ")";
        //document.getElementById("mydiv").style.transform = "matrix(" + i*0.0001 + ", " + i*0.01 + ", " + i*0.01 + ", " + i*0.0001 + ", " + i + ", " + i + ")";
        // ***********************************************************************
        i++;                      //  increment the counter
        if (i <= numberOfLoops)   //  if the counter <= numberOfLoops, call the loop function
        {
            myLoop();             //  ..  again which will trigger another 
        }
    }, myTimeout)                 //  ..  setTimeout()
}

//myLoop();                       //  start the loop
