var i = 1;                        //  set your counter to 1
var numberOfLoops = 360;
var myTimeout = 30;               //  delay in ms

function myLoop()                 //  create a loop function
{
    setTimeout(function()         //  call a 3s setTimeout when the loop is called
    {
        //  put your code here: **************************************************
        // ROTATEX                                          rotateX(20deg);
        document.getElementById("mydiv").style.transform = "rotateX(" + i + "deg)"; 
        console.info("RotateX: " + i + "°");

        // ROTATEY                                            rotateY(20deg);
        //document.getElementById("mydiv").style.transform = "rotateY(" + i + "deg)"; 
        //console.info("RotateY: " + i + "°");

        // ROTATEZ                                            rotateZ(20deg);
        //document.getElementById("mydiv").style.transform = "rotateZ(" + i + "deg)"; 
        //console.info("RotateZ: " + i + "°");
        // ***********************************************************************
        i++;                      //  increment the counter
        if (i <= numberOfLoops)   //  if the counter <= numberOfLoops, call the loop function
        {
            myLoop();             //  ..  again which will trigger another 
        }
    }, myTimeout)                 //  ..  setTimeout()
}

//myLoop();                       //  start the loop
