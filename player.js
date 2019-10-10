require('./embed.js');
require('./jquery-3.4.1.min.js')


(function($) {
    $(document).ready(function() {
        const { app, BrowserWindow } = require('electron')
        const embed = new Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "100%",
            channel: "m0xyy",
            theme: "dark",
            chat: "mobile",
            allowfullscreen: "false",
            layout: "video"
            });
        
        embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
            console.log('The video is ready');
        });

        $('#multi-view').click(function($) {
            const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;
            const win = new BrowserWindow({
                backgroundColor: "#1a1a1a",
                height: 800,
                width: 600
            });
        })

        $('#add').click(function($) {
            console.log('clicked')
            $("#nav").append("<div style={height: 10px, width: 100px}>item</div>")
        });
        
        $('#rewind').click(function($) {
            console.log('clicked')
            let currentTime = embed.getPlayer().getCurrentTime()
            embed.getPlayer().seek(currentTime-5);
        });
        
        $('#live').click(function($) {
            let currentTime = embed.getPlayer().getCurrentTime()
            // embed.getPlayer().seek(currentTime);
            embed.getPlayer().pause();
            embed.getPlayer().play();
        }); 
    }); 
})(jQuery);


