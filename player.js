require('./embed.js');
require('./jquery-3.4.1.min.js')


(function($) {
    $(document).ready(function() {

        const embed = new Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "400px",
            channel: "dansgaming",
            theme: "dark",
            chat: "mobile",
            allowfullscreen: "false",
            layout: "video"
            });
        
        embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
            console.log('The video is ready');
        });

        
        
        $('#rewind').click(function($) {
            console.log('clicked')
            let currentTime = embed.getPlayer().getCurrentTime()
            embed.getPlayer().seek(currentTime-5);
        });
        
        $('#live').click(function($) {
            let currentTime = embed.getPlayer().getCurrentTime()
            // embed.getPlayer().seek(currentTime);
            embed.getPlayer().pause().play();
        }); 
    });
})(jQuery);


