



function makeResizable(element) {
	if (element && jQuery(element).length) {
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});


$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});

function funcion1() {
	var vid = document.getElementById('video');
	var vid2 = document.getElementById('video3');
	var vid3 = document.getElementById('videof1');
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var circint = document.getElementById('btnint');
	var endtime = 6;
	btn2.classList.remove('btncirc');
	btn2.classList.add('btn');
	circint.classList.remove('intebtncirc');
	circint.classList.add('intebtn');
	btn2.setAttribute('onclick','funcion2()');
	btn1.removeAttribute('onclick');
	vid2.classList.add('hide');
	vid.classList.remove('hide');
	vid.addEventListener("timeupdate", function() {
		if (this.currentTime >= endtime) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);
	 
	 vid.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid.currentTime = starttime;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }

	 vid3.addEventListener("timeupdate", function() {
		if (this.currentTime >= 3) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);
	 
	 vid3.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid3.currentTime = starttime;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }
 }

 function funcion2() {
	var vid = document.getElementById('video2');
	var vid2 = document.getElementById('video');
	var vid3 = document.getElementById('videof2');
	var vid4 = document.getElementById('videof1');
	var btn1 = document.getElementById('btn1');
	var btn3 = document.getElementById('btn2');
	var regre = document.getElementById('volver');
	regre.innerHTML = "Volver a comenzar";
	var starttime = 6;
	var endtime = 8;
	btn1.setAttribute('onclick','funcion4()');
	btn3.removeAttribute('onclick');
	vid2.classList.add('hide');
	vid3.classList.remove('hide');
	vid4.classList.add('hide');
	vid.classList.remove('hide');
	vid.play();
	vid.addEventListener("timeupdate", function() {
		
		if (this.currentTime >= endtime) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);//suppose that video src has been already set properly
	 
	 vid.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid.currentTime = starttime;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }
	
	 vid3.addEventListener("timeupdate", function() {
		if (this.currentTime >= 6) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);
	 
	 vid3.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid3.currentTime = 3;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }
 }

 function funcion3() {
	var vid = document.getElementById('video3');
	var vid2 = document.getElementById('video2');
	var vid3 = document.getElementById('videof2');
	var vid4 = document.getElementById('videof3');
	var btn1 = document.getElementById('btn1');
	var btn3 = document.getElementById('btn3');
	var starttime = 8;
	var endtime = 13;
	var regre = document.getElementById('volver');
	regre.innerHTML = "Volver a comenzar";
	btn1.setAttribute('onclick','funcion4()');
	btn3.removeAttribute('onclick');
	vid2.classList.add('hide');
	vid.classList.remove('hide');
	vid3.classList.add('hide');
	vid4.classList.remove('hide');
	vid.play();
	vid.addEventListener("timeupdate", function() {
		
		if (this.currentTime >= endtime) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);//suppose that video src has been already set properly
	 
	 vid.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid.currentTime = starttime;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }

	 vid4.addEventListener("timeupdate", function() {
		if (this.currentTime >= endtime) {
			 this.pause();
			 console.log(this.currentTime);
		 }
	 }, false);
	
	 vid4.play();    //must call this otherwise can't seek on some browsers, e.g. Firefox 4
	 try {
		 vid4.currentTime = 6;
		 
	 } catch (ex) {
		 //handle exceptions here
	 }
	
 }
 
 function funcion4(){
	location.reload();
 };