var i = 0;
var img = [
"Black Clover.png",
"Haikyuu.jpg",
"One piece.jpg",
"One punch man.jpg",
"Tokyo ghoul.jpg"
];



function next() {
    i += 1;
    if (i < img.length){
    var images = document.getElementById("slide");
    console.log(document.getElementById("slide").src = img[i]); 
    } else 
    i = 0;
}

function previous(){
    i -= 1;
    if (i < 0){
        i = img.length - 1;
    } else 
    var images = document.getElementById("slide");
    console.log(document.getElementById("slide").src = img[i]); 
}

