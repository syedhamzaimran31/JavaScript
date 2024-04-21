window.addEventListener("mousemove",function (details) {
    

    var rectengle=document.querySelector(".Rectengle");
    let rangeValue=gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rectengle.getBoundingClientRect().width/2,
        window.innerWidth-(200+rectengle.getBoundingClientRect().width/2),
        details.clientX
    );
    gsap.to(".Rectengle",{
        left:rangeValue,
        ease:Power3,
    });
});