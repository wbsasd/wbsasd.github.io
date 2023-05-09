window.onload = function() {
    //Audio Config
    var settingAutoplay = 'yes';
    window.settingAutoplay = settingAutoplay === 'disable' ? false : true;
    var vid = document.getElementById("player");
    vid.volume = 0.5;
    $(".btn-player").click(function (e) { 
        e.preventDefault();
        if (vid.paused == false) {
            vid.pause();
            $(".btn-player i").addClass("fa-play");
            $(".btn-player i").removeClass("fa-pause");
            // alert('music paused');
        } else {
            vid.play();
            $(".btn-player i").addClass("fa-pause");
            $(".btn-player i").removeClass("fa-play");
            // alert('music playing');
        }