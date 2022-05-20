let affich = document.getElementById('affich');
let img = affich.firstElementChild;
console.log(img);
let thumbCol = document.getElementsByClassName('thumb');
//console.log(thumbCol);
let thumbs = Array.from(thumbCol);
//console.log(thumbs);
thumbs.forEach(function(thumb){
    let imgUrl = thumb.src;
    thumb.onclick = function(){
        img.src = imgUrl;
        affich.style.visibility ='visible';
    }
});
affich.onclick = function(){
    affich.style.visibility = 'hidden';
}