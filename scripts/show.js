const button = document.getElementById("button")
const textshow = document.getElementById("show-more");
let show = true;
function showMore(){
    show ? textshow.style.display = "block" : textshow.style.display = "none";
    show ? button.innerText = "Show less" : button.innerText = "Show more";
    show = !show;
}