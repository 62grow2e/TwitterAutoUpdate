setInterval(function(){
	var elm = document.getElementsByClassName("new-tweets-bar")[0],
	evt = document.createEvent("MouseEvents");
	if(elm){
		evt.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);
		elm.dispatchEvent(evt);
	}
}, 2000);