let $pointerHour = document.querySelector('[data-js="pointerHour"]');
let $pointerMin = document.querySelector('[data-js="pointerMin"]');
let $pointerSec = document.querySelector('[data-js="pointerSec"]');




function movePointers() {
    const now = new Date();

    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360) + 90;
    $pointerHour.style.transform = `rotate(${hourDegrees}deg)`

    const min = now.getMinutes();
    const minDegrees = ((min/60) * 360) + 90;
    $pointerMin.style.transform = `rotate(${minDegrees}deg)`

    const sec = now.getSeconds();
    const secDegrees = ((sec/60) * 360) + 90;
    $pointerSec.style.transform = `rotate(${secDegrees}deg)`

    const allPointers = document.querySelectorAll('.pointer')

    if(secDegrees === 90) {
    allPointers.forEach(pointer => pointer.style.transition = 'none')

    } else {
        allPointers.forEach(pointer => pointer.style.transition = '')
    }
}

setInterval(movePointers, 1000);




