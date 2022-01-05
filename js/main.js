const nav = document.getElementById("nav");
const ulBar = document.querySelector("nav ul");
const navA = document.querySelectorAll("nav ul li a");
const menuBar = document.getElementById("menu-bar");
let boxGallery = document.querySelectorAll("#gallery .container .box-container .box");
const btnToTop = document.querySelector(".container-top");
let boxAccordion = document.querySelectorAll(".container-accordion .box-accordion .accordion");
let iconsAccordion = document.querySelectorAll(".container-accordion .box-accordion .accordion .icons");
const email2 = document.querySelector(".subcribe .email input");
const h4email2 = document.querySelector(".subcribe .email h4");
const imageErenAttack = document.querySelector(".about .scroll-image");
console.log(email2);
// console.log(iconsAccordion);
// console.log(boxGallery);
// console.log(navA);

email2.addEventListener("focus", function() {
    h4email2.classList.add("focus");
});

email2.addEventListener("blur", function() {
    if(email2.value == "") {
        h4email2.classList.remove("focus");
    }
});

iconsAccordion.forEach((accordion) => {
    accordion.addEventListener("click", function() {
    //    console.log("dapat nih");
        accordion.classList.toggle("active");
        console.log(accordion);
        accordion.parentElement.classList.toggle("active");
    });
});

menuBar.addEventListener("click", function() {
    nav.classList.toggle("active");
    menuBar.classList.toggle("fa-times");
    menuBar.classList.toggle("active");
});

window.onscroll = function() {
    let value = window.scrollY;
    // console.log(value);
    // console.log(image);
    if(window.scrollY <= 500) {
        nav.classList.add("background-white");
        nav.classList.remove("background-black");
        menuBar.classList.add("color-white");
        menuBar.classList.remove("color-black");
        btnToTop.classList.remove("active");
        // imageErenAttack.style.right = "-100%";
    } else {
        // nav.style.background = 'rgba(1,1,1,0.3)'.replace(/[^,]+(?=\))/, '0.5');
        // navA.forEach(a => {
        //     a.style.color = "#fff";
        // });
        nav.classList.add("background-black");
        nav.classList.remove("background-white");
        menuBar.classList.add("color-black");
        menuBar.classList.remove("color-white");
        btnToTop.classList.add("active");
        // imageErenAttack.style.right = "-100%";
    }
    
}

boxGallery.forEach((g) => {
    g.addEventListener("click", function() {
        document.querySelector(".popup-img").style.display = "block";
		document.querySelector(".popup-img img").src = g.querySelector("img").getAttribute("src");
        // console.log(g.querySelector("img"));
    });
});




document.querySelector(".popup-img span").onclick = () => {
	document.querySelector(".popup-img").style.display = "none";
}

// window.onscroll = () => {
// 	setTimeout(function() {
// 		document.querySelector(".popup-img").style.display = "none";
// 	}, 400);
// }

let slideIndex = 1;

const plusSlides = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
  }
  
  const showSlides = (n) => {
    const slides = document.querySelectorAll("#gallery .container .box-container");
    let pageNumber = document.querySelector("#gallery .container .page-number #page span");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "grid";
    // console.log(slideIndex);
    pageNumber.innerText = slideIndex;
  }

  showSlides(slideIndex); 


// const loadWindow = document.querySelector(".load-site");

// // window.addEventListener("load", function() {
// //     setTimeout(function() {
// //         loadWindow.style.display = "block";
// //     }, 1000);
// //     loadWindow.classList.toggle("active");
// // });

// var opacity=0;
// var intervalID=0;

//     window.onload=fadeout;
//         function fadeout(){
//                setInterval(hide, 600);
//         }
//     function hide(){
//           var body = document.querySelector(".load-site");
//           opacity =
//  Number(window.getComputedStyle(body).getPropertyValue("opacity"))
  
//             if(opacity>0){
//                 opacity=opacity-1;
//                 body.style.opacity=opacity;
//                 body.style.zIndex= "-3";
//                 // audio.autoplay = true;
//                 // audio.load();
//             }
//             else{
//                 clearInterval(intervalID); 
//             }
//         }
        
