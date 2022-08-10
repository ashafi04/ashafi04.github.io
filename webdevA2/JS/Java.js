/*Card flip interaction */
const card = document.querySelector('.card');

card.addEventListener('click',function(e){
    card.classList.toggle('is-flipped');
});

/*Navbar interactions */
const icon = document.querySelector(".Menu");
const navMenu = document.querySelector(".Links");

icon.addEventListener("click", ()=> {
    icon.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".NavItem").forEach(n => n.addEventListener ("click",()=>{
    icon.classList.remove("active");
    navMenu.classList.remove("active");
} ))

/*Extra info button interaction*/
const ExtraInfo = document.querySelector(".Extra");
const button = document.querySelector(".Button");

button.addEventListener("click",()=>{
    ExtraInfo.classList.toggle("active");
})
