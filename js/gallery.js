$(document).ready(function () {

    // Builds the html for the gallery.
    function buildGallery(videos) {
        if (videos.length > 0) {
            videos.forEach(function (element, index) {
                thumbs.append("<li class='gallery-thumb'>" + ++index + "</li>");
            });
            setActive(0);
            loadVideo(0);
        }
    }

    // Assigns the 'active' class to the correct '.gallery-thumb'.
    function setActive(index) {
        thumbs.children().removeClass("active");
        element = thumbs.children().eq(index);
        element.addClass("active");
    }

    // Loads a new video into the player.
    function loadVideo(index) {
        player.attr("src", videos[index]);
    }

    var thumbs = $("#gallery-thumbs");
    var player = $("#gallery-player");

    var videos = [
        "videos/gallery/1.mp4",
        "videos/gallery/2.mp4",
        "videos/gallery/3.mp4",
        "videos/gallery/4.mp4",
        "videos/gallery/5.mp4",
        "videos/gallery/6.mp4",
        "videos/gallery/7.mp4",
        "videos/gallery/8.mp4",
        "videos/gallery/9.mp4",
        "videos/gallery/10.mp4"
    ];

    buildGallery(videos);

    $('.gallery-thumb').bind('click', function () {
        var index = $(this).index();
        setActive(index);
        loadVideo(index);
    });
});