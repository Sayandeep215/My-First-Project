// let box = document.querySelector(".centre");
// box.addEventListener("mousemove", (details) => {

//     console.log(details.clientX , details.clientY );

// });


const btn = document.querySelector(".centre");
        const throttleFunction = (func, delay) => {
 
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                 // console.log(now - prev, delay);
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }
        
document.querySelector(".centre").addEventListener("mousemove",
        throttleFunction((details) => {
        
        let div = document.createElement("div");
        div.classList.add("imagediv") // Don't use any "." or "#" , because we use classList.
        div.style.left = details.clientX + "px";
        div.style.top = details.clientY + "px";

        let img = document.createElement("img");
        img.setAttribute("src","https://images.unsplash.com/photo-1704669694528-65a9e108555a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

        div.appendChild(img);

        document.body.appendChild(div);

       gsap.to(img,{
        y : "0",  //In the context of the y-axis, "0" typically represents the top position. So, the element will be animated to the top of its container.
        ease: Power1,
        duration : 0.6
       })
       
       gsap.to(img,{
        y : "100%",  //The "100%" value means it will move to the bottom of its container.
        delay : 0.5,
        ease: Power2
        
       })

        setTimeout( () => {
            div.remove()

        },2000)
 
 }, 500));

