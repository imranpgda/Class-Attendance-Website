const normal=document.querySelector(".normal");
const sname =document.querySelector(".name");
const spass =document.querySelector(".pass");
const click =document.querySelector(".click");

const akname =document.querySelector("#akname");
const akpass =document.querySelector("#akpass");
const aklogin =document.querySelector(".inpdata");



window.addEventListener("load",() =>{
    normal.classList.add("active");
    // click.classList.remove("active");
    // spass.classList.remove("active");
    // sname.classList.remove("active");
    // normal.classList.remove("active");
})

akname.addEventListener("click",()=>{
    click.classList.remove("active");
    spass.classList.remove("active");
    sname.classList.add("active");
    normal.classList.remove("active");
})
akpass.addEventListener("click",()=>{
    click.classList.remove("active");
    spass.classList.add("active");
    sname.classList.remove("active");
    normal.classList.remove("active");

})
aklogin.addEventListener("click",()=>{
     click.classList.add("active");
    spass.classList.remove("active");
    sname.classList.remove("active");
    normal.classList.remove("active");

})


function buttonhover(){
    click.classList.add("active");
    spass.classList.remove("active");
    sname.classList.remove("active");
    normal.classList.remove("active");


}