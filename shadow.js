function shadow(element, duration) {
    var oldTime = performance.now();
    var originWidth = element.offsetWidth;
    var targetWidth = 95;
    var variation = targetWidth - originWidth;
    var waitingTime = duration / 10;
    var runningTime = duration / 5 * 4;

    function step(newTime) {
        var progress = newTime - oldTime;

        if (progress >= duration) {
            oldTime = newTime;
        }

        else {

            if (progress >= waitingTime && progress <= (waitingTime + runningTime)) {
                var x = progress - waitingTime;
                var t = runningTime;
                var width = -4 * variation * (Math.pow(x/t, 2) - x/t) + originWidth;
                element.style.width = width.toString() + 'px';
            }

            else {
                element.style.width = originWidth.toString() + 'px';
            }
        }

        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

shadow(document.getElementById('shadow'), 1500);