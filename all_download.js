var i = 0;
var click = document.getElementsByClassName('yt-uix-sessionlink spf-link playlist-video clearfix spf-link');
var b = click.length;
var m = function() {
		var d = document.getElementsByClassName("sf-quick-dl-btn");
			d = d[0];
      d.click();
}
var me;
var c = function () {
		 if (i != b)
			click[i].click();
      setTimeout(m,3000);
     // console.log(i);
     if (i == b-1) {
				clearInterval(me);
			}
     
			i++;
}
me = setInterval(c,5000);