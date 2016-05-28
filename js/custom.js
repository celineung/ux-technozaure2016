$("body").on('keydown click', function(){
	if($("#focus").hasClass("visible")){
		$("#positive-emotions").html("of generating <span style='color:rgb(170, 255, 0);font-weight:bold;z-index:10;position:relative;'>positive emotions</span> among people");
	}
	else {
		$("#positive-emotions").html("of generating positive emotions among people");
		}
});
