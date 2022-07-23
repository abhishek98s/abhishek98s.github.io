window.addEventListener('load', () => {
var i = 0;
var img = [
"Black Clover.png",
"Haikyuu.jpg",
"One piece.jpg",
"One punch man.jpg",
"Tokyo ghoul.jpg"
];
var time = 3000;


window.next = function() {
    i += 1;
    if (i < img.length){
    var images = document.getElementById("slide");
    console.log(document.getElementById("slide").src = img[i]); 
    } else {
    i = 0;
    console.log(document.getElementById("slide").src = img[i]); 
    }
}

window.previous = function() { 
    i -= 1;
    if (i < 0){
        i = img.length - 1;
    } else 
    var images = document.getElementById("slide");
    console.log(document.getElementById("slide").src = img[i]); 
}

window.changeImg = function(){
    console.log(document.getElementById("slide").src = img[i]); 
    if (i < img.length-1){
        i++;
    } else{
        i = 0;
    }
}

setInterval(changeImg, time);
document.onload = changeImg();
});

