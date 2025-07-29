let div = document.querySelector('.rectangle')

function changeToCircle() {
           div.style.borderRadius = "50%";
}

function hide() {
        div.style.display = "none"
}

function show() {
        div.style.display = "block"
        div.style.borderRadius = "0%"
}

div.onmouseenter = function() {
    div.style.background = "gold"

}

div.onmouseout = function() {

    div.style.background = "none"


}