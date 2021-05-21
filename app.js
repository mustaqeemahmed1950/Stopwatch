var minutes = document.getElementById("min")
var seconds = document.getElementById("sec")
var milisecond = document.getElementById("msec")
var startt = document.getElementById("btnn")

var minu = 00
var seco = 00
var milisec = 00
var interval;

function stpwatch() {
    milisec++
    milisecond.innerHTML = milisec
    if (milisec == 100) {
        seco++
        seconds.innerHTML = seco
        milisec = 00

    }
    else if (seco == 10) {
        minu++
        minutes.innerHTML = minu
        seco = 00
    }
}


function starttt() {
    interval = setInterval(stpwatch, 10)
    startt.disabled = true
}
function pause() {
    clearInterval(interval)
    startt.disabled = false
}
function reset() {
    minu = 00
    seco = 00
    milisec = 00
    milisecond.innerHTML = milisec
    seconds.innerHTML = seco
    minutes.innerHTML = minu
    clearInterval(interval)
    startt.disabled = false
}