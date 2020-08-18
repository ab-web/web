$(document).ready(function(){
 	$(".loading").delay(100).fadeOut(500,function(){
 		$('.mein').fadeIn(500);
 	});
 	$(".ab").mouseenter(function(){
         $(".head2").slideToggle();
 	});
 	$(".ab").mouseleave(function(){
         $(".head2").slideUp();
 	});
 	
 });