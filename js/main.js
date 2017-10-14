$('.resource').on('mouseover', (e) => {
    $(e.target).removeClass('hover-off');
    $(e.target).addClass('hover-on');
});

$('.resource').on('mouseleave', (e) => {
    $(e.target).addClass('hover-off');
    $(e.target).removeClass('hover-on');
});

$('.play').on('click', (e) => {
    console.log("Play song");
    $(e.target).html('pause');
});