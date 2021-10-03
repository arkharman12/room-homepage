// Image slide
let slider = document.getElementById('slider');
let heroHeading = document.getElementById('hero-text__heading');
let heroSubHeading = document.getElementById('hero-text__sub-heading');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let counter = 1;

nextBtn.addEventListener("click", () => {
    if (counter == 1) {
        slider.src = "images/desktop-image-hero-2.jpg";
        heroHeading.innerHTML = "We are available all across the globe";
        heroSubHeading.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
        counter++;
    } else if (counter == 2) {
        slider.src = "images/desktop-image-hero-3.jpg";
        heroHeading.innerHTML = "Manufactured with the best materials";
        heroSubHeading.innerHTML = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`;
        counter++;
    } else {
        return;
    }
})

prevBtn.addEventListener("click", () => {
    if (counter == 1) {
        return;
    } else if (counter == 2) {
        slider.src = "images/desktop-image-hero-1.jpg";
        heroHeading.innerHTML = "Discover innovative ways to decorate";
        heroSubHeading.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`;
        counter--;
    } else {
        slider.src = "images/desktop-image-hero-2.jpg";
        heroHeading.innerHTML = "We are available all across the globe";
        heroSubHeading.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
        counter--;
    }
})

// Hamburger menu
const hamIcon = document.getElementById("ham-menu");
const myNavigation = document.getElementById("close-btn");

hamIcon.addEventListener("click", function() {
    document.getElementById("my-nav").style.display = "block";
    document.body.style.position = "fixed";
    
    (function() {
        window.onresize = displayWindowSize;
        window.onload = displayWindowSize;
        
        function displayWindowSize() {
            let myWidth = window.innerWidth;
            
            if (myWidth > 768) {
                document.getElementById("my-nav").style.display = "none";
                document.body.style.position = "static";
            }
            
        }
    })();  
});

myNavigation.addEventListener("click", function() {
    document.getElementById("my-nav").style.display = "none";
    document.body.style.position = "static";
});
