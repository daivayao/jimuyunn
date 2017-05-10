/**
 * Created by Administrator on 2016/11/16.
 */
jindouyun(0);
//在页面生成类似百叶窗的小盒子
var pageHeight = window.innerHeight;
var pageX = window.innerWidth;
var m_main = document.getElementById("m_main");
var m_banxin = m_main.getElementsByClassName("banxin")[0];
var xBegin = Math.ceil((1920 - pageX) / 2);
for (var i = 0; i < 70; i++) {
    var MerryOut = document.createElement("div");
    MerryOut.className = "MerryOut";
    var MerryInner = document.createElement("div");
    MerryInner.className = "MerryInner";
    MerryInner.style.width=(90-Math.floor(i / 10)*10)+"%";
    MerryInner.style.height=(85-i%10*10)+"%";
    MerryOut.appendChild(MerryInner);
    m_main.insertBefore(MerryOut, m_banxin);
}
var MerryOutDivs = document.getElementsByClassName("MerryOut");
var MerryInnerDivs = document.getElementsByClassName("MerryInner");
console.log(MerryOutDivs);
var M_outWidth = MerryOutDivs[0].offsetWidth;
var M_outHeight = MerryOutDivs[0].offsetHeight;
for (var i = 0; i < MerryOutDivs.length; i++) {
    MerryOutDivs[i].style.left = M_outWidth * (i % 10) + "px";
    MerryOutDivs[i].style.top = M_outHeight * (Math.floor(i / 10)) + "px";
    var bg_Y = -MerryOutDivs[i].offsetTop + "px ";
    var bg_X = -xBegin - MerryOutDivs[i].offsetLeft + "px ";
    MerryInnerDivs[i].style.background = 'white url(images/01.jpg) ' + bg_X + bg_Y + 'no-repeat';
}
//主页的动画效果
var mm_h2=document.getElementById("themeWord");
var mm_spans=mm_h2.getElementsByTagName("span");
for(var i=0;i<mm_spans.length;i++){
    mm_spans[i].style.right=50*(mm_spans.length-i-1)+"px";
    mm_spans[i].onmouseover=function(){
        animate(this,{"bottom":40});
    };
    mm_spans[i].onmouseout=function(){
        animate(this,{"bottom":0});
    };
}
//jump(mm_h2,10,2,100);
//下面的代码用于添加页面的精灵图背景
//积木云能做什么
//精灵图处理
//鼠标移动上滑
var container = document.getElementsByClassName("container")[0];
var cDiv = container.children[0];
var cTitle = cDiv.children[0];
var cul = container.getElementsByTagName("ul")[0];
var cspans = cul.getElementsByTagName("span");
var clis = cul.children;
for (var i = 0; i < cspans.length; i++) {
    cspans[i].style.background = "url(images/container.png) no-repeat 0px " + (-i * 70) + "px"
}
for (var i = 0; i < clis.length; i++) {
    clis[i].onmouseover = function () {
        animate(this, {"paddingTop": 33});
        //shake(this);
    };
    clis[i].onmouseout = function () {
        animate(this, {"paddingTop": 43});
    };
}

//为什么选择欧德蒙
//精灵图
//加边框
var m_selection = document.getElementById("m_selection");
var msul = m_selection.getElementsByTagName("ul")[0];
var msspans = msul.getElementsByTagName("span");
var ms_lis = msul.children;
var ms_reason = document.getElementById("ms_reason");
for (var i = 0; i < msspans.length; i++) {
    msspans[i].style.background = "#A1A9B7 url(images/mselection.png) no-repeat 0px " + (-i * 90) + "px"
}
for (var i = 0; i < ms_lis.length; i++) {
    ms_lis[i].onmouseover = function () {
        var msDiv = this.children[0];
        var ms_span = msDiv.children[0];
        animate(msDiv, {"borderWidth": 3, "height": 100, "width": 100});
        animate(ms_span, {"marginTop": 5});
    };
    ms_lis[i].onmouseout = function () {
        var msDiv = this.children[0];
        var ms_span = msDiv.children[0];
        animate(msDiv, {"borderWidth": 0, "height": 90, "width": 90});
        animate(ms_span, {"marginTop": 0});
    };
}
//鼠标移动的动态效果
//他们都在使用欧德蒙
var m_users = document.getElementById("m_user");
var mu_ul = m_users.getElementsByTagName("ul")[0];
var mu_lis = mu_ul.children;
var users = ["中国人寿", "中国移动", "中国教育", "REALTEK", "爱慕", "四季沐歌", "唯品会", "清华大学"]
//添加用户名
var userName = mu_ul.getElementsByClassName("m_username");
for (var i = 0; i < userName.length; i++) {
    userName[i].innerHTML = users[i];
}
for (var i = 0; i < mu_lis.length; i++) {
    mu_lis[i].style.background = "url(images/mu_0" + (i + 1) + ".jpg) center center no-repeat";
    var mu_mask = document.createElement("div");
    mu_mask.className = "mu_mask";
    mu_mask.style.background = "rgba(250,250,250,0.6) url(images/mu_small0" + (i + 1) + ".png) center center no-repeat";
    mu_lis[i].appendChild(mu_mask)
    mu_lis[i].onmousemove = function () {
        animateFast(this.children[1], {"height": 0});
        animate(this.children[0], {"bottom": 100, "opacity": 1});
    }
    mu_lis[i].onmouseout = function () {
        animateFast(this.children[1], {"height": 285});
        animate(this.children[0], {"bottom": 0, "opacity": 0});
    }
}
var mu_person = document.getElementById("mu_person");
$(document).ready(function () {
    $("#m_user").children("ul").children("li").hide();
    $(".MerryInner").animate({"height": "100%", "width": "100%"}, 2000, function () {
        $(".MerryOut").remove();
        //主页背景以及动画
        $("#m_main").css("background", 'url(images/01.jpg) ' + (-xBegin) + 'px 0px no-repeat');
        $("#m_main .mm_jimuyun>img").eq(0).animate({"opacity": 1}, 1000);
        $("#m_main .mm_jimuyun>img").eq(1).animate({"bottom": "40px", "opacity": 1}, 1000,function(){
            $("#m_main h2").animate({"left":"0","opacity":1},3000,function(){
                $("#m_main h4").animate({"opacity":1},1000,function(){
                    $("#m_main p").animate({"opacity":1},1000);
                });
            });
        });
    });

});

//动态计数器
var m_counter = document.getElementById("m_counter");
var mc_spans = m_counter.getElementsByClassName("mc_pic");
var mc_num = m_counter.getElementsByClassName("num");
for (var i = 0; i < mc_spans.length; i++) {
    mc_spans[i].style.background = "url(images/counter.png) no-repeat 0px " + (-i * 70) + "px"
}
$("#m_counter>ul>li").hide();
var mtimeId = [null, null, null, null];


//联系我们 背景图片放大缩小
var m_contactUs = document.getElementById("m_contactUs");
//底部
var m_footer = document.getElementById("m_footer");
var footImgs = m_footer.children;


var cU_img = document.getElementById("cU_img");
var flag1 = true;
var flag2 = true;
var flag3 = true;
var flag4 = true;
var flag5 = true;
var timerAnimate = null;
animateSan();
timerAnimate = setInterval(function () {
    animateSan();
}, 20500);
window.onscroll = function () {
    backToTop();
    //欧德蒙能做什么
    var m_main = document.getElementById("m_main");
    var m_selection = document.getElementById("m_selection");
    var ms_reason = document.getElementById("ms_reason");
    var cU_img = document.getElementById("cU_img");
    var pageX = window.innerWidth;

    if (document.body.scrollTop > m_main.offsetTop && document.body.scrollTop < m_selection.offsetTop && flag1) {
        animate(cTitle, {"lineHeight": 80});
        animateSlow(clis[3], {"opacity": 1}, function () {
            animateSlow(clis[2], {"opacity": 1, "left": 292}, function () {
                animateSlow(clis[1], {"opacity": 1, "left": 584}, function () {
                    animateSlow(clis[0], {"opacity": 1, "left": 876});
                })
            });
        });

        flag1 = false;
    }

    if ((document.body.scrollTop + 500) > m_selection.offsetTop && flag2) {
        //为什么选择欧德蒙
        animateSlow(ms_reason, {"lineHeight": 100});
        animate(ms_lis[0], {"opacity": 1, "top": 100}, function () {
            animate(ms_lis[1], {"opacity": 1, "left": 292}, function () {
                animateSlow(ms_lis[2], {"opacity": 1, "left": 584}, function () {
                    animateSlow(ms_lis[3], {"opacity": 1, "left": 876}, function () {
                        animate(ms_lis[4], {"opacity": 1, "top": 420}, function () {
                            animate(ms_lis[5], {"opacity": 1, "left": 292}, function () {
                                animateSlow(ms_lis[6], {"opacity": 1, "left": 584}, function () {
                                    animateSlow(ms_lis[7], {"opacity": 1, "left": 876})
                                });
                            });
                        });
                    });
                });
            });
        });
        flag2 = false;
    }
    //他们都在使用欧德蒙
    if ((document.body.scrollTop + 600) > m_users.offsetTop && flag3) {
        $("#m_user").children("ul").children("li").eq(1).show(1000, function () {
            $("#m_user").children("ul").children("li").eq(0).show(1000, function () {
                $("#m_user").children("ul").children("li").eq(5).show(1000, function () {
                    $("#m_user").children("ul").children("li").eq(4).show(1000);
                });
            });
        });

        $("#m_user").children("ul").children("li").eq(2).show(1000, function () {
            $("#m_user").children("ul").children("li").eq(3).show(1000, function () {
                $("#m_user").children("ul").children("li").eq(6).show(1000, function () {
                    $("#m_user").children("ul").children("li").eq(7).show(1000);
                });
            });
        });
        animateSlow(mu_person, {"lineHeight": 100});
        flag3 = false;
    }
    //动态计数器
    if ((document.body.scrollTop + m_counter.offsetHeight * 2) > m_counter.offsetTop && flag4) {
        $("#m_counter>ul>li").eq(1).slideDown(1000, function () {
            $("#m_counter>ul>li").eq(0).slideDown(1000);
        });
        $("#m_counter>ul>li").eq(2).slideDown(1000, function () {
            $("#m_counter>ul>li").eq(3).slideDown(1000, function () {
                mtimeId[0] = setInterval(function () {
                    mc_num[0].innerHTML = mc_num[0].innerHTML / 1 + 7;

                    if (mc_num[0].innerHTML >= 100) {
                        mc_num[0].innerHTML = 100;
                        clearInterval(mtimeId[0]);
                    }
                }, 300);
                mc_num[1] = 1999;
                mtimeId[1] = setInterval(function () {
                    mc_num[1].innerHTML = mc_num[1].innerHTML / 1 + 333;
                    if (mc_num[1].innerHTML >= 10000) {
                        mc_num[1].innerHTML = 10000;
                        clearInterval(mtimeId[1]);
                    }
                }, 200);
                mc_num[2] = 3;
                mtimeId[2] = setInterval(function () {
                    mc_num[2].innerHTML = mc_num[2].innerHTML / 1 + 6;
                    if (mc_num[2].innerHTML >= 100) {
                        mc_num[2].innerHTML = 100;
                        clearInterval(mtimeId[2]);
                    }
                }, 300);
                mc_num[3].innerHTML = 1;
                mtimeId[3] = setInterval(function () {
                    mc_num[3].innerHTML++;
                    if (mc_num[3].innerHTML >= 10) {
                        mc_num[3].innerHTML = 10;
                        clearInterval(mtimeId[3]);
                    }
                }, 1000);
            });
        });
        flag4 = false;
    }
    if ((document.body.scrollTop + m_contactUs.offsetHeight) > m_footer.offsetTop && flag5) {
        //console.log($("#m_footer>img").eq(0));
            $("#m_footer>img").eq(3).animate({"left": "1007px", "opacity": 1}, 800,'easeOutElastic',function () {
                $("#m_footer>img").eq(2).animate({"left": "800px", "opacity": 1}, 800,'easeOutElastic', function () {
                    $("#m_footer>img").eq(1).animate({"left": "400px", "opacity": 1}, 800,'easeOutElastic',  function () {
                        $("#m_footer>img").eq(0).animate({"left": "50px","opacity": 1}, 500, 'easeOutElastic');
                    });
                });
            });
        flag5 = false;
    }
};
function animateSan() {
    $("#cU_img").animate({
        "height": "599px",
        "width": client().width +100+ "px"
    }, 10000, function () {
        //console.log(client().width);
        $("#cU_img").animate({
            "height": "500px",
            "width": client().width + "px"
        }, 10000);
    });
}







