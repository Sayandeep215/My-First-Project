let rect = document.querySelector("#centre");
rect.addEventListener("mousemove", (details) =>{
    let rectangle = rect.getBoundingClientRect(); 
    let insiderect = details.clientX - rectangle.left

    if(insiderect < rectangle.width/2){
        let rectRed = gsap.utils.mapRange(0, rectangle.width/2, 255, 0, insiderect) ;
        gsap.to(rect,{
            backgroundColor:`rgb(${rectRed},0,0)`,
            ease: Power4,
        })
    }
    else{
        let rectBlue = gsap.utils.mapRange(rectangle.width/2, rectangle.width, 0, 255, insiderect) ;
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${rectBlue})`,
            ease: Power4,
        })
    }
});

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect,{  // Here, we have to use gsap, because of gsap overwriting.
        // AS, we can use color in gsap,so here we can use color in gsap
        backgroundColor:"White"
    })
})
// console.log(gsap.utils.mapRange(0,250,255,0,250));