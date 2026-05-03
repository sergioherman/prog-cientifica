document.addEventListener('DOMContentLoaded', function() {

    const videoContainers = document.querySelectorAll('.video-wrapper');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const button = container.querySelector('.play-button');

        if (!video || !button) return;

        button.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                button.innerHTML = "⏸";
            } else {
                video.pause();
                button.innerHTML = "▶";
            }
        });

        video.addEventListener('ended', function() {
            button.innerHTML = "▶";
        });
    });

});

