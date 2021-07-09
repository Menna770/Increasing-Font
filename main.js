var myParagraph = document.getElementById("myParagraph");

myParagraph.style.fontSize = "90px";


setInterval(function() {

    var fontSize = parseInt(myParagraph.style.fontSize);

    if(fontSize < 100)
    {
        fontSize++;
        myParagraph.style.fontSize = fontSize + "px";

    }
    else
    {
        clearInterval();
    }

}, 1000);