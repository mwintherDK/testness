var img = document.querySelectorAll('.slideshow img')
var index = 0
var Inteval = setInterval(timedChange, 3000)
function timedChange(){
    img.forEach(image => {
        image.classList.remove('show')
    })
    if(index < img.length-1){
        index++
        img[index].classList.add('show')
    }
    else{
        index = 0
        img[index].classList.add('show')
    }
}