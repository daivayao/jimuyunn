/**
 * Created by kaola on 2016/11/16.
 */
//简单的百叶窗



//用于旋转以及顶部动画
var nav_t = document.getElementById("nav_t");
var nav_l = document.getElementById("nav_l");
var nav_r = document.getElementById("nav_r");
nav_r.onmouseover=function(){
    shake(this,"right");
};
//旋转
var maps=nav_l.getElementsByTagName("div");
var cirX=200;
var cirY=100;
var  r=170;
var degree=0;
for(var i=0;i<6;i++){
    var nav = document.getElementById("nav")
    var maxOut = document.createElement("div")
    maxOut.className = "maxOut";
    var maxInner = document.createElement("div")
    maxInner.className = "maxInner";
    maxOut.appendChild(maxInner);
    nav.appendChild(maxOut);


}
var outDivHeight=maxOut.offsetHeight;
var innnerDivHeight=maxInner.offsetHeight;
var innerDivs=document.getElementsByClassName("maxInner");
var outDiv=document.getElementsByClassName("maxOut");
var ori_x=(client().width-1920)/2;
var ori_y=(client().height-598)/2;
for(var i=0;i<6;i++){
    outDiv[i].style.top = outDivHeight*i+"px";
    innerDivs[i].style.background="url(images/01.jpg)"+ ori_x+"px "+(-50+ori_y-i*outDivHeight)+"px";
    innerDivs[i].style.height=innnerDivHeight+"px";
    innnerDivHeight*=0.4;
}
$(function () {
    $(".maxInner").animate({"height":"100%"},1000,function(){
        $("#nav").css("background","url(images/01.jpg)"+ ori_x+"px "+ori_y+"px");
        $("maxOut").remove();
    });
    animate(nav_t, {"top": 80, "opacity": 1},function(){
        animate(nav_r, {"right": 600, "opacity": 1},function(){
            animate(maps[0], {"left": 96, "top": 53, "opacity": 1});
            animate(maps[1], {"left": 316, "top": 53, "opacity": 1});
            animate(maps[2], {"left": 96, "top": 141, "opacity": 1});
            animate(maps[3], {"left": 316, "top": 141, "opacity": 1},function(){
                animate(maps[0], {"left": 0, "top": 0});
                animate(maps[1], {"left": 417, "top": 0});
                animate(maps[2], {"left": 0, "top": 194});
                animate(maps[3], {"left": 417, "top": 194},function(){
                    var timeId=null;
                    clearTimeout(timeId);
                    var isTimeOut=true;
                    timeId= setTimeout(function(){
                        isTimeOut=false;
                        setInterval(function(){
                            degree++;
                            for(var i=0;i<maps.length;i++){
                                maps[i].style.left=-r*Math.sin((i*90+degree)/180*Math.PI)+cirX+"px";
                                maps[i].style.top=r*Math.cos((i*90+degree)/180*Math.PI)+cirY+"px";
                            }
                        },30);
                        if(isTimeOut){
                            clearTimeout(timeId);
                        }
                    },700);
                });

            });
        });
    });

});

var isScroll=true;
window.onscroll=function(){

    backToTop();
    if(scroll().top>nav.offsetHeight/2&&isScroll){
        $("#word").animate({"opacity":1},500);
        $("#word>h2").animate({"lineHeight":"60px","opacity":1},500,function(){
            $("#pyramid").animate({"top":"260px","opacity":1},800);
        });
        isScroll=false;
    }
};




