
let loader = document.getElementById("loader");
document.addEventListener('DOMContentLoaded', function() {
    loader.style.display = "none";
  });

  
// navmenu
let hamburger = document.querySelector(".hamburger");
let navmenu = document.querySelector(".navlinks");
let navlink = document.querySelectorAll(".navlink");

hamburger.addEventListener("click",()=>
{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("change");
});
navlink.forEach((link)=>
{
link.addEventListener("click",()=>
{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("change");   
})
});

// DropDown Menu
let droptoggle = document.querySelectorAll(".dropdownparent");
let dropmenu = document.querySelector(".dropdown");
console.log(droptoggle);
console.log(dropmenu);
droptoggle.forEach((droplink)=>{
    console.log(droplink)
    droplink.addEventListener("click",()=>{
        dropmenu.classList.toggle("showing");
    });
});


// Increment Counter
let counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>
{
    counter.innerHTML = 0;

    let updateCounter = ()=>
    {
        // data target attribute gives data in string form so
        // to convert to number ad starting +
        let targetCount = +counter.getAttribute("data-target");
        let startingCount = Number(counter.innerHTML);
        let incr = targetCount / 100;
        if(startingCount < targetCount){
            counter.innerHTML = `${Math.ceil(startingCount + incr)}`;
            setTimeout(updateCounter,50)
        }
        else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
});


