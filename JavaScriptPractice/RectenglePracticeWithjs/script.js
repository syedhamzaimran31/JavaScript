var rectengle=document.querySelector(".rectengle");

rectengle.addEventListener("mousemove",function (details) {
    // var rectengleLocation=GeolocationCoordinates;
    var rectengleLocation=rectengle.getBoundingClientRect();
    var insideRectengleLocation=details.clientX - rectengleLocation.left;
    
    if (insideRectengleLocation < rectengleLocation.width/2) {
        var redColor = gsap.utils.mapRange(0, rectengleLocation.width / 2 ,
        255 , 0, insideRectengleLocation);
        gsap.to(rectengle,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4,
        });
    }else{
        var blueColor = gsap.utils.mapRange(rectengleLocation.width/2, rectengleLocation.width ,
        0 , 255, insideRectengleLocation);
        gsap.to(rectengle,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease:Power4,
        });
    }
});
rectengle.addEventListener("mouseleave",function () {
   gsap.to(rectengle,{
        backgroundColor:"white",
   });
});






