// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del  beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		}); //cierre del vibrate
	},false); //cierre del deviceready
}); //cierre del documentready