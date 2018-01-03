$(function(){
	$('.intro-social li').mouseenter(function(){
  		$(this).addClass('over').siblings().removeClass('over');
  		let audio = $('#audio')[0];
  		audio.play()
    });
    function IsPC() {
	    var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone",
	                "SymbianOS", "Windows Phone",
	                "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
	    return flag ;
	}
   	var isPc=IsPC();
   	var myVid=$("#video");
	var videoBox=$("#videoBox")

	if(isPc){
     	  videoBox.html('<video id="video" autoplay loop="loop" muted="" align="middle" preload="auto"><source src="http://oxto2zus6.bkt.clouddn.com/vooo.mp4" type="video/mp4"></source></video>')
        }		  
})
