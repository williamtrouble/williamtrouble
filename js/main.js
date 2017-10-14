let play = $('.play'),
    pause = $('.pause'),
    runaway = new Howl({
        src: ['assets/run_away.mp3']
    });

const wave = new SiriWave({
        container: document.getElementById('wave'),
        width: 400,
        height: 30,        
        speed: 0.05,
        color: '#cecece',
        frequency: 10,
        autostart: false,
        amplitude: .5,
        amplitudeInterpolationSpeed: 100
});

$('.resource').on('mouseover', (e) => {
    $(e.target).removeClass('hover-off');
    $(e.target).addClass('hover-on');
});

$('.resource').on('mouseleave', (e) => {
    $(e.target).addClass('hover-off');
    $(e.target).removeClass('hover-on');
});

$(play).on('click', () => {
    console.log(wave);
    wave.start();
    play.hide();
    pause.show();
    runaway.play();

});

$(pause).on('click', () => {
    console.log('click');
    pause.hide();
    play.show();
    runaway.pause();
    wave.stop();
});





