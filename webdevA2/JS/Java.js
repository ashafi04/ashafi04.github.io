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

/*Basketball scoreboard point game*/
const HScore = document.querySelector(".H-SCORE");
const AScore= document.querySelector(".A-SCORE");
const Start = document.querySelector(".Start");
const End = document.querySelector(".End");
const message = document.querySelector(".Message")
let isalive = false;
let homeScore = 0;
let awayScore = 0;

Start.addEventListener("click",function()
{
    isalive = true;
    message.textContent = "Game Started";
    /*Reset scores */
    homeScore = 0;
    HScore.textContent = homeScore;
    awayScore = 0;
    AScore.textContent = awayScore;
});

End.addEventListener("click",function()
{
    if (homeScore>awayScore)
        message.textContent = "Home Team Wins!";
    else if (awayScore>homeScore)
        message.textContent = "Away Team Wins!";
    else
        message.textContent = "Draw";
});

//Adding to the home team's score
(document.querySelector(".Hbtn1")).addEventListener("click",function(){
    if (isalive)
    {
        homeScore++;
        /*Change the HTML text content to match the points*/
        HScore.textContent = homeScore;
    }
});

(document.querySelector(".Hbtn2")).addEventListener("click",function(){
    if (isalive)
    {
        homeScore+=2;
        HScore.textContent = homeScore;    
    }
});

(document.querySelector(".Hbtn3")).addEventListener("click",function(){
    if (isalive)
    {
        homeScore+=3;
        HScore.textContent = homeScore;
    }
});


//Adding to the away team's score
(document.querySelector(".Abtn1")).addEventListener("click",function(){
    if (isalive)
    {
        awayScore++;
        /*Change the HTML text content to match the points*/
        AScore.textContent = awayScore;
    }
});

(document.querySelector(".Abtn2")).addEventListener("click",function(){
    if (isalive)
    {
        awayScore+=2;
        AScore.textContent = awayScore;
    }
});

(document.querySelector(".Abtn3")).addEventListener("click",function(){
    if (isalive)
    {
        awayScore+=3;
        AScore.textContent = awayScore;
    }
});
