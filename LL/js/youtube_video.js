$ = jQuery;

var player1;
var player2;

function onYouTubeIframeAPIReady() {

	player1 = createPlayer("video_1");
	player2 = createPlayer("video_2");
	

}

function createPlayer(playerId) {
	 return new YT.Player(playerId);
} 


var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerReady(eventData){}

function onPlayerStateChange(eventData){}

function PlayVideo(player,el){
	StopAllVideos();
	var regVidHeight = 238;

	$('.episodes-carousel .item').each(function(){
		$(this).find('.videoWrapper').hide();
		$(this).find('.img').css('height',regVidHeight);
		$(this).find('.play-episode').show();
	});
	$(el).parent().find('.play-episode').hide();
	$(el).parent().find('.videoWrapper').show();
	$(el).parent().find('.img').css('height','12px');
	console.log('el:'+$(el).attr('class')+", el par:"+$(el).parent().attr('class'));
	player.playVideo();
	
}

function StopAllVideos(){
	player1.stopVideo();
	player2.stopVideo();
}

offset = 0;
$(window).resize(function(){
	Resize();
});

	
function Resize(){
	offset = parseInt($('.mainVid').css('width').replace('px',''));
	var offY = 0;
	if (offset > 860) {
		offY = "-" + parseInt((offset - 860)/5) + "px";
	}
	console.log('off:'+offY);

// if offset width is at 860, we should keep yoffset 0 and adjust the width of iframe to become larger
	// iff offset width is at 1170, the top offset should be about -100

	$('.mainVid iframe').css('top',offY);
}

$(document).ready(function(){
	Resize();
});
