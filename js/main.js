
function authenticate() {
    return new Promise( (resolve, reject) => {
        password = 'markus';
        userInput = prompt('Password, plz');
        if (userInput === password) {
            resolve()
        } else {
            alert('Wrong, sorry');
        }
    });
}

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

runaway.play();

$('body').hide();

$(window).on('load', () => {
    authenticate()
    .then( () => {
        $('body').fadeIn();
        flicker(a);
        flicker(o);
        // runaway.play()
    });
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

$(play).on('click', () => {
    console.log(wave);
    wave.start();
    play.hide();
    pause.show();
    runaway.play();

});

$(pause).on('click', () => {
    pause.hide();
    play.show();
    runaway.pause();
    wave.stop();
});

$(document).on('keyup', (e) => {
    if (e.keyCode == 32) {
        $('.trouble').toggleClass('darken');
    }
});