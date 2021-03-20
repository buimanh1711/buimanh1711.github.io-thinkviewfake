slideimg=[];
slideimg[0]='./img/thinkads.png';
slideimg[1]='./img/thinkads-1.png';
slideimg[2]='./img/thinkads-2.png';
var button=document.getElementsByClassName('main__ads-slide');
var button1=button[0];
var button2=button[1];
function buttonDisplay(){
    button1.style.display='block';
    button2.style.display='block';
}
function buttonHide(){
    button1.style.display='none';
    button2.style.display='none';
}
var ads_hover=document.getElementsByClassName('main__ads-item-horizontal');
var adshover=ads_hover[0];
var slideads=document.getElementsByClassName('big_ads');
var slidebackground = slideads[0];

var i=0;  
slidebackground.src=slideimg[0];  

function slideshow(){  
    if(button1.style.display!='block'){
    slidebackground.src=slideimg[i];
    if(i<2) i++;
    else i=0;
    setTimeout("slideshow()",2500);  
    }
    else setTimeout("slideshow()",2500); 
}
window.onload=slideshow();
button1.addEventListener('click',function(){
    if(i<2){
        i++;
        slidebackground.src=slideimg[i];}
    else 
    {
        i=0;
        slidebackground.src=slideimg[i];
    }
})

button2.addEventListener('click',function(){
    if(i<=2&&i>0){
        i--;
        slidebackground.src=slideimg[i];}
    else if (i==0)
    {
        i=2;
        slidebackground.src=slideimg[i];
    }
});