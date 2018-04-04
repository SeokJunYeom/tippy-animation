function jumping(element, duration) {
    var oldTime = performance.now();
    var originTop = element.offsetTop;
    var originLeft = element.offsetLeft;
    var height = element.offsetHeight / 2;
    var waitingTime = duration / 10;
    var runningTime = duration / 5 * 4;

    element.style.margin = '0 0';
    element.style.top = originTop.toString() + 'px';
    element.style.left = originLeft.toString() + 'px';

    function step(newTime) {
        var progress = newTime - oldTime;

        if (progress >= duration) {
            oldTime = newTime;
        }

        else {

            if (progress >= waitingTime && progress <= (waitingTime + runningTime)) {
                var x = progress - waitingTime;
                var t = runningTime;
                var jump = -4 * height * (Math.pow(x/t, 2) - x/t);
                element.style.top = originTop - jump.toString() + 'px';
                sizeWhenRunning(element);
            }

            else {
                element.style.top = originTop.toString() + 'px';
                sizeWhenWaiting(element);
            }
        }

        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function sizeWhenWaiting(element) {
    element.style.webkitTransform = "scale(0.5, 0.4) translateY(10%)";
    element.style.transform = "scale(0.5, 0.4) translateY(10%)";
}

function sizeWhenRunning(element) {
    element.style.webkitTransform = "scale(0.5, 0.5)";
    element.style.transform = "scale(0.5, 0.5)";
}

jumping(document.getElementById('rabbit'), 1500);