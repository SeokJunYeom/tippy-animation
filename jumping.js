function jumping(element, duration) {
    var height = element.offsetHeight / 2;
    var waitingTime = duration / 10;
    var runningTime = duration / 5 * 4;
    var oldTime = performance.now();
    
    function step(newTime) {
        var progress = newTime - oldTime;

        if (progress >= duration) {
            oldTime = newTime;
        }

        else {

            if (progress >= waitingTime && progress <= (waitingTime + runningTime)) {
                var x = progress - waitingTime;
                var t = runningTime;
                var jump = 8 * height * (Math.pow(x/t, 2) - x/t) + 8;
                element.style.transform = 'translateY(' + jump.toString() + '%)';
            }

            else {
                element.style.transform = "scaleY(0.8) translateY(20%)";
            }
        }

        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

jumping(document.getElementById('rabbit'), 1500);