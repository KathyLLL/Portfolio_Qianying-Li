function navSlide() {
    const five = document.querySelector(".five");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    five.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        // Animation
        five.classList.toggle("toggle");
    });
    
}

navSlide();
