window.addEventListener("mousemove", (details)=>{
    let rect = document.querySelector(".container");

    let xval = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,
    window.innerWidth-(100+rect.getBoundingClientRect().width/2),details.clientX);
    gsap.to(".container",{
        left: xval + "px",
        ease: Power3,
    });

});