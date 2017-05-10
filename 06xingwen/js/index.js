/**
 * Created by LEE on 2016/11/20.
 */

var screen = document.getElementById("screen");
var ul = screen.children[0];
var lis = ul.children;
var timer = null;

timer = setInterval(play, 15);

screen.onmouseover = function () {
    clearInterval(timer);
};
screen.onmouseout = function () {
    timer = setInterval(play, 15);
};

function play() {
    //leader = leader + step
    var leader = ul.offsetLeft;
    var step = -3;
    if (leader > -3420) {
        leader = leader + step;
        ul.style.left = leader + "px";
    } else {
        ul.style.left = 0;
    }
}

