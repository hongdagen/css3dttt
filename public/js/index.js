var $btn = $('#btn');
var audio = document.getElementById('audio')
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div')
var radius = calculateRadius(129, 20)

for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = 'url(../img/p' + (i + 1) + '.png)no-repeat';
    arr[i].style.transform = 'rotateY(' + 360 / arr.length * i + 'deg)translatez(' + radius + 'px)';
}

function calculateRadius(length, totalNum) {
    return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3
}



/*
播放音乐模块
*/
audio.loop = true;
$btn.on('tap', function () {
    if (audio.paused) {
        audio.play()
        $btn.text('🎵')
    } else {
        audio.pause();
        $btn.text('⏸️')
    }
})
var startX = 0;
var x = 0;
var endX = 0;
var flag = true;
$('#box').on('touchstart', function (e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    startX = touch.pageX - x;
})
$('#box').on('touchmove', function (e) {
    if (flag) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX
        box.style.transform = 'rotateY(' + x + 'deg)'
    } else {
        return false
    }
})
$('#box').on('touchend', function (e) {
    console.log("over")
})
window.addEventListener('deviceorientation', function (e) {
    var gamma = e.gamma;
    if (Math.abs(gamma) > 1) {
        flag = false;
        box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
    } else {
        flag = true;
    }
})