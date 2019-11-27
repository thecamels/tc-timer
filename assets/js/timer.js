var clock = $('.your-clock').FlipClock({
    clockFace: 'MinuteCounter',
    autoPlay: false,
    autoStart: false
});

var playBtn = $('.btn-play');
var pauseBtn = $('.btn-pause');
var stopBtn = $('.btn-stop');

playBtn.on('click', function() {
    clock.start(function() {
    });
});

pauseBtn.on('click', function() {
    clock.stop(function() {
    });
});

stopBtn.on('click', function() {
    clock.stop(function() {
    });

    setTimeout(function() {
        clock.reset(function() {
        });
    }, 0);
});
