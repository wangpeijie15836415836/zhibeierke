var goTop = 0;
var box111 = document.getElementById("box111");
//当浏览器窗口发生滚动时，触发时间
window.onscroll = function(){
	goTop = document.documentElement.scroll || document.body.scrollTop;
	//console.log(goTop);
	//当浏览器窗口发生滚动时，不断判断当前的goTop值
	//当距离顶部大于200，时，显示出来

	if(goTop >= 600){
		box111.style.display = 'block';
	}else{
		box111.style.display = "none";
		
	}

}