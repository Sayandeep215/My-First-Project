function loading() {
    var tl = gsap.timeline()
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.3,
        ease: "expo.out"

    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.3,
        ease: "expo.out"
    }, "anim"); // Using same variable for using same time animation(anim)
           
    tl.to("#loader h1", {
        delay: 0.6,
        duration: 0.5,
        Color: "black",
    }, "anim");

    tl.to("#loader ", {
        opacity: 0,
        

    },);

    tl.to("#loader ", {
        display: "none",
    
    },);
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elems = document.querySelectorAll(".elem")
let page2 = document.querySelector(".page2")
elems.forEach( function(ele){
    ele.addEventListener("mouseenter", () => {
    var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})
