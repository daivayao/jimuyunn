/**
 * Created by Administrator on 2016/11/14.
 */
/**
 *顶部导航
 * @param element
 * @returns {*}
 */
window.onload = function () {
    var h = $(".banner").height();
    h = h / 2;
    $(window).scroll(function () {
        var str = $(document).scrollTop();
        if (str >= h) {
            $(".icons0").animate({
                "opacity": 1
            }, 500, function () {
                $(".icons1").animate({
                    "opacity": 1
                }, 500, function () {
                    $(".icons2").animate({
                        "opacity": 1
                    }, 500, function () {
                        $(".icons3").animate({
                            "opacity": 1
                        }, 500, function () {
                            $(".icons4").animate({
                                "opacity": 1
                            }, 500, function () {
                                $(".icons5").animate({
                                    "opacity": 1
                                }, 500, function () {
                                    $(".icons6").animate({
                                        "opacity": 1
                                    }, 500, function () {
                                        $(".icons7").animate({
                                            "opacity": 1
                                        }, 500)
                                    })
                                })
                            })
                        });
                    })
                })
            })
        }



    });
    //backToTop();
    var trTop = document.getElementById("tr_top");
    var bs = trTop.getElementsByTagName("b");
    for (var i = 0; i < bs.length; i++) {
        bs[i].style.background = "url(images/top_pic.png)  0px " + (-i * 20) + "px no-repeat";
    }
//icons循环加图标
    var icons = document.getElementsByClassName("icons");
    var ems = document.getElementsByTagName("em");
    for (var i = 0; i < ems.length; i++) {
        ems[i].style.background = "url(images/sprite.png) 0px " + (-i * 50) + "px no-repeat";
    }
//banner开始
    var banner = document.getElementById("banner");
    var word_top = document.getElementById("word_top");
    var word_bottom = document.getElementById("word_bottom");
    var word_bottom_t = document.getElementById("word_bottom_t");
    var word_bottom_b = document.getElementById("word_bottom_b");
    var jimu = document.getElementById("jimu");
    animate(banner, {"height": 592}, function () {
        animate(word_top, {"width": 478, "height": 60, "opacity": 0}, function () {
            animate(banner, {"opacity": 1}, function () {
                animate(word_top, {"opacity": 1}, function () {
                    animate(jimu, {"width": 0, "height": 0}, function () {
                        animate(jimu, {"width": 287, "height": 370}, function () {
                            animate(word_bottom_b, {"left": 100});
                            animate(word_bottom_t, {"left": 100});
                        })
                    })
                })
            })
        })
    });
    //生成banner百叶窗
    for(var i=0;i<5;i++){
        var maskOut=document.createElement("div");
        maskOut.className="maskOut";
        var maskInner=document.createElement("div");
        maskInner.className="maskInner";
        maskOut.appendChild(maskInner);
        banner.appendChild(maskOut);
    }
    var innerDivs=document.getElementsByClassName("maskInner");
    var outDivs=document.getElementsByClassName("maskOut");
    var innerDivWidth=innerDivs[0].offsetWidth;
    var outDivWidth=outDivs[0].offsetWidth;
    var ori_x=(client().width-1567)/2;
    var ori_y=(client().height-592)/2;
    for(i=0;i<innerDivs.length;i++){
        innerDivs[i].style.width=innerDivWidth+"px";
        outDivs[i].style.left=outDivWidth*i+"px";
        innerDivWidth*=0.6;
        innerDivs[i].style.background="url(images/images/banner.jpg) "+(ori_x-i*outDivWidth)+"px "+ori_y+"px";
    }
    $(".maskInner").animate({"width":"100%"},1000,function(){
        $("#banner").css("background","url(images/images/banner.jpg) "+ori_x+"px "+ori_y+"px");
        $(".maskOut").remove();
    });
//banner结束

//鼠标经过圆圈
    var circles = document.getElementsByClassName("circle");
    for (var i = 0; i < icons.length; i++) {
        icons[i].index = i;
        icons[i].onmouseover = function () {
            animate(this,{"marginTop":3});
            animate(circles[this.index], {
                "height": 96,
                "width": 96,
                "top": -5,
                "left": 80,
                "opacity": 0.5,
                "opacity": 1
            })
        };
        icons[i].onmouseout = function () {
            animate(this,{"marginTop":18});
            animate(circles[this.index], {
                "height": 90,
                "width": 90,
                "top": -2,
                "left": 83,
                "opacity": 0.5,
                "opacity": 0
            })
        }
    }

//service结束
//缓动动画函数
    function animate(obj, json, fn) {//json attr, target
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }

                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
};



