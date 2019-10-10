require('./embed');

// jQuery(document).ready(function($) {
//     $('.twitch-embed').append('<div id="twitch-embed"></div>')
//     $('.post-text').append('<button id="rewind">rewind</button>')
//     $('.post-text').append('<button id="live">live</button>')

    const embed = new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "400px",
        channel: "xqcow",
        theme: "dark",
        chat: "mobile",
        allowfullscreen: "false",
        layout: "video"
      });



    embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
        console.log('The video is ready');
    });

    console.log('loaded')

    // $('#rewind').click(function($) {
    //     let currentTime = embed.getPlayer().getCurrentTime()
    //     embed.getPlayer().seek(currentTime-5);
    // });
    
    // $('#live').click(function($) {
    //     let currentTime = embed.getPlayer().getCurrentTime()
    //     // embed.getPlayer().seek(currentTime);
    //     embed.getPlayer().pause().play();

    // });    
// });



