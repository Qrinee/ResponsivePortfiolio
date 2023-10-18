const div = document.getElementsByTagName('div')
div[div.length-1].style.display = "none";
const text = document.getElementById("text")
const myText = ["Krystian", "Designer", "Programmer", "Coder"]
let letter = 0; 
let index = 0;
setInterval(() => {
    if(index == myText.length)
        index = 0;
    
    text.textContent = myText[index].substring(0,letter) + "|";
    letter++;
    if(letter > myText[index].length){
        index++;
        letter = 0;
    }
        
},400);