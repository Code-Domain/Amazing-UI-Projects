gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".video-ctn",
        start: "top-=100px",   // starts when section hits middle of screen
        end: "+=600",          // controls scroll distance for animation
        scrub: true,           // ties animation to scroll
        pin: true              // keeps the section stuck while animating
    }
});

/* Card expands */
tl.to(".video-holder", {
    width: "99vw",
    height: "120vh",
    borderRadius: 0,
    ease: "none"
}, 0);

/* Video reveals more scene */
tl.to(".video-holder video", {
    scale: 1,
    ease: "none"
}, 0);


let blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
    block.addEventListener("mouseover",()=>{
        block.querySelector(".back-color").style.height = "100%";
        let url = block.getAttribute("data-url");
        document.querySelector(".img-experience").style.backgroundImage = "url(" + url + ")";
        document.querySelector(".img-experience").style.display = "block";
    })

    block.addEventListener("mouseout",()=>{
        block.querySelector(".back-color").style.height = "0%";
        document.querySelector(".img-experience").style.display = "none";
    })
})
