import gsap from "gsap";

const footerLogo = document.querySelector('.footerlogo img');
let step = 0;
let direction = 1; 

function slideLogo() {
    const imgWidth = footerLogo.clientWidth; 
    const stepWidth = imgWidth / 8; 

    gsap.to(footerLogo, { 
        x: -step * stepWidth, 
        duration: 0.5, 
        ease: "power2.out" 
    });

    step += direction;

    if (step === 7 || step === 0) {
        direction *= -1; 
    }
}

setInterval(slideLogo, 500); 


let as = document.querySelectorAll("a");

as.forEach((a) => {
    a.addEventListener("mouseenter", () => {
        gsap.to(a.querySelector("span"), {
            padding: "0 1em",
            duration: 0.5,
            ease: "power2.out" 
        });
    });

    a.addEventListener("mouseleave", () => {
        gsap.to(a.querySelector("span"), {
            padding: "0",
            duration: 0.5,
            ease: "power2.out" 
        });
    });
});


let button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
    gsap.to(button.querySelector("span"), {
        padding: "0 1em",
        duration: 0.5,
        ease: "power2.out" 
    });
});

button.addEventListener("mouseleave", () => {
    gsap.to(button.querySelector("span"), {
        padding: "0",
        duration: 0.5,
        ease: "power2.out" 
    });
});

let follower = document.querySelector(".follower");

window.addEventListener("mousemove", function(dets) {
    gsap.to(follower , {
        x:dets.x - 15,
        y:dets.y - 15,
        duration:0.5
    })
})

gsap.to(".plus", {
    rotateZ: "360deg",
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "power1.inOut"
});
