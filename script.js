var icon = document.getElementById("icon");
        
        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "images/sun.png";
            }else{
                icon.src = "images/moon.png"
            }
        }






var mixer = mixitup('.portfolio-gallery');


let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


const header = document.querySelector("header");
window,addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("fa-brands fa-x");
    navlist.classList.toggle("open");
}



window.onscroll = ()=>{
    menuIcon.classList.remove("fa-brands fa-x");
    navlist.classList.remove("open");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));



const scriptURL = 'https://script.google.com/macros/s/AKfycbwu3A_UmJL5tBfQerp8DYM_6jdYxPgFQLecKs9rlfidukqswwFToyri-F7e7vzxf0OC/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent !!"
        setTimeout(function(){
            msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })



