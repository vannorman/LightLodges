$ = jQuery;

var player1, player2, player3, player4;

function onYouTubeIframeAPIReady() {

	player1 = createPlayer("video_1");
	player2 = createPlayer("video_2");
	player3 = createPlayer("video_3");
	player4  = createPlayer("video_4");
	

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

	$('.episodes-carousel .item').each(function(){
		$(this).find('.videoWrapper').hide();
//		$(this).find('.img').css('height',regVidHeight);
		$(this).find('.play-episode').show();
	});
	$(el).parent().find('.play-episode').hide();
	$(el).parent().find('.videoWrapper').show();
//	$(el).parent().find('.img').css('height','12px');
	console.log('el:'+$(el).attr('class')+", el par:"+$(el).parent().attr('class'));
	player.playVideo();
	
}

function StopAllVideos(){
	player1.stopVideo();
	player2.stopVideo();
	player3.stopVideo();
	player4.stopVideo();
	console.log('stopped vids. player1,2,3,4 state:'+player1.getPlayerState()+','+player2.getPlayerState()+','+player3.getPlayerState()+','+player4.getPlayerState()+' ..');
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

// if offset width is at 860, we should keep yoffset 0 and adjust the width of iframe to become larger
	// iff offset width is at 1170, the top offset should be about -100

	$('.mainVid iframe').css('top',offY);
}

$(document).ready(function(){
	Resize();
});

var sliding = false;
var rubberBumpDist = 25;
var slideDuration = 350;
function NextVideo(){
	if (sliding) return;
	var slideAmount = $('.episodes-carousel .item').first().width();
	sliding = true;
	wid = $(window).width();
	all_children_width = 0;
	$('.episodes-carousel .item').each(function(){ 
		all_children_width += $(this).width();
	});

	var minL = wid - all_children_width;
	
	prevL = parseInt($('.episodes-carousel').css('left'));
	prevL -= slideAmount;
	
	if (prevL < minL){
		prevL = minL - rubberBumpDist;
		var leftDelta = parseInt($('.episodes-carousel').css('left'))-prevL;
		leftDelta = Math.min(slideDuration,leftDelta);
		console.log('bumpdist:'+leftDelta);
		if (leftDelta == rubberBumpDist){

			$('.episodes-carousel').animate({'left':prevL+"px"},100).animate({'left':minL},slideDuration,function(){sliding=false;});
		} else {
			$('.episodes-carousel').animate({'left':minL},leftDelta,function(){sliding=false;});
		
		}
	
	} else {
		$('.episodes-carousel').animate({'left':prevL+"px"},slideDuration,function(){sliding=false});
	
	}
}

function PreviousVideo(){
	if (sliding) return;
	prevL = parseInt($('.episodes-carousel').css('left'));
	var slideAmount = $('.episodes-carousel .item').first().width();
	prevL += slideAmount;
	
	if (prevL > 0){
		prevL = rubberBumpDist;
		var leftDelta = prevL - parseInt($('.episodes-carousel').css('left'));
		leftDelta = Math.min(slideDuration,leftDelta);
		if (leftDelta == rubberBumpDist){	
			$('.episodes-carousel').animate({'left':prevL+"px"},100).animate({'left':0},slideDuration,function(){sliding=false});
		} else {
			$('.episodes-carousel').animate({'left':0},leftDelta,function(){sliding=false});
		
		}
		console.log('bumpdist:'+leftDelta);
	
	} else {
		$('.episodes-carousel').animate({'left':prevL+"px"},slideDuration,function(){sliding=false});
	
	}
}
