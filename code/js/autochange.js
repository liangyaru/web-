window.onload=function()
{
var picScroll=document.getElementById('picScroll');
var picScroll1=document.getElementById('picScroll1');
var picScroll2=document.getElementById('picScroll2');
picScroll2.innerHTML=picScroll1.innerHTML;
function changeToLeft()
{
	if(picScroll.scrollLeft>picScroll1.offsetWidth)//实现循环
		picScroll.scrollLeft=0;
	else{
		picScroll.scrollLeft++;
	}
}
var a=setInterval(changeToLeft,10);
picScroll.onmouseover=function()
{
	clearInterval(a);
}
picScroll.onmouseout=function()
{
	a=setInterval(changeToLeft,10);
}
}
