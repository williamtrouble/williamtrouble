function getAmplitudeValue() {
    return Math.random(.5, .75);
}

function flicker(letter) {
    setInterval( () => {
        $(letter).addClass('flicker');
        setTimeout( () => {
            $(letter).removeClass('flicker');
        }, Math.random(550, 1500));
    }, Math.random(1250, 4500))
}

let play = $('.play'),
    pause = $('.pause'),
    runaway = new Howl({
        src: ['assets/run_away.mp3'],
        format: 'mp3',
        buffer: false,
        autoplay: true
    }),
    o = $('.o'),
    m = $('.m'),
    a = $('.a');

$(window).on('load', () => {
        $('body').hide();
        $('body').fadeIn();
        flicker(a);
        flicker(o);
});

const wave = new SiriWave({
        container: document.getElementById('wave'),
        width: 400,
        height: 30,        
        speed: 0.1,
        color: '#e0e0e0',
        frequency: 20,
        autostart: false,
        amplitude: 0.8
});

$('.resource').on('mouseover', (e) => {
    $(e.target).removeClass('hover-off');
    $(e.target).addClass('hover-on');
});

$('.resource').on('mouseleave', (e) => {
    $(e.target).addClass('hover-off');
    $(e.target).removeClass('hover-on');
});