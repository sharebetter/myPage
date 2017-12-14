$(function(){
	$('.intro-social li').mouseenter(function(){
  		$(this).addClass('over').siblings().removeClass('over');
  		let audio = $('audio')[0]
  		audio.play()
   });
//	bgChange();
//	function bgChange(){
//		var lis= $('.lib');
//		for(var i=0; i<lis.length; i+=2)
//		lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
//	}
})
