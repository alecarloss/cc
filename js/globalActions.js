 function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();
        img1.src = "https://dl.dropbox.com/u/8963910/cc/images/txsimples.jpg";
        img2.src = "https://dl.dropbox.com/u/8963910/cc/images/lamak.jpg";
        img3.src = "https://dl.dropbox.com/u/8963910/cc/images/claro tv.jpg";
        img4.src = "https://dl.dropbox.com/u/8963910/cc/images/itop - tv globo.jpg"; 
        img5.src = "https://dl.dropbox.com/u/8963910/cc/images/uva.jpg";
        img6.src = "https://dl.dropbox.com/u/8963910/cc/images/mercatto.jpg";
        img7.src = "https://dl.dropbox.com/u/8963910/cc/images/pqagea - tv futura.jpg";
        img8.src = "https://dl.dropbox.com/u/8963910/cc/images/clara barros.jpg";
        img9.src = "https://dl.dropbox.com/u/8963910/cc/images/via embratel.jpg";
        img10.src = "https://dl.dropbox.com/u/8963910/cc/images/ibmr.jpg";    
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);

$(document).ready(function() {
   // put all your jQuery goodness in here.
   
	$('a[href*="art"], a[href*="front"]').css({'display':'block','color':'#000','padding-right':'5px'});
	
	
	$('.cardimgcrop').parents('.project_thumb').mouseover(function(){
		var bgName = 'https://dl.dropbox.com/u/8963910/cc/images/'+$(this).find('.thumb_title span').html()+'.jpg';
		$(this).find('.cardimgcrop').css({'background':'url("'+bgName+'")'});
		
		$(this).find('.cardimgcrop').children('img').stop().animate({
			opacity: 0
		},200)		
	})
	$('.cardimgcrop').parents('.project_thumb').mouseout(function(){
		$(this).find('.cardimgcrop').children('img').stop().animate({
			opacity: 1
		},200)		
	}) 

 });