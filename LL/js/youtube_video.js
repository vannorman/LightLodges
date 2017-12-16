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

function PlayThisVideo(player,el){
	
}

