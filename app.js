var acc=document.getElementsByClassName("accordion_item");
var i;
for (i=0; i<acc.length;i++){
	acc[i].onclick=function(){
		this.classList.toggle("active");
	}}
