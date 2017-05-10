/**
 * Created by Administrator on 2016/11/17 0017.
 */
window.onload=function(){
    //banner部分
    var wrap=document.getElementById("wrap");
    var flag=true;//节流阀
    var config = [
        {
            "width": 500,
            "top": 40,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 90,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 1000,
            "top": 150,
            "left": 100,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 90,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 500,
            "top": 40,
            "left": 660,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    var wrap=document.getElementById("wrap");
    var slide=document.getElementById("slide");
    var ul=slide.children[0];
    var lis=ul.children;
    var arrow=document.getElementById("arrow");
    var arrLeft=document.getElementById("arrLeft");
    var arrRight=document.getElementById("arrRight");

    wrap.onmouseover=function(){
        animate(arrow,{"opacity":1});
    };
    wrap.onmouseout=function(){
        animate(arrow,{"opacity":0});
    };

    function assign(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function(){
                flag=true;
            });
        }
    }
    assign();

    arrRight.onclick=function(){
        if(flag){
            flag=false;
            config.push(config.shift());
            assign();
        }

    };
    arrLeft.onclick=function(){
        config.unshift(config.pop());
        assign();
    };



    //about-oudemen
    var about_ODM=document.getElementById("about_ODM");
    var message=document.getElementById("message");
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    var p3=document.getElementById("p3");

    //temman
    var team=document.getElementById("team");
    var container=document.getElementById("container");
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");
    var temman=container.children;

    img1.onmouseover=function(){
        animate(img1,{"width":370,"height":555});
    };
    img1.onmouseout=function(){
        animate(img1,{"width":350,"height":525});
    };
    img2.onmouseover=function(){
        animate(img2,{"width":370,"height":555});
    };
    img2.onmouseout=function(){
        animate(img2,{"width":350,"height":525});
    };
    img3.onmouseover=function(){
        animate(img3,{"width":370,"height":555});
    };
    img3.onmouseout=function(){
        animate(img3,{"width":350,"height":525});
    };


    //video
    var video=document.getElementById("video");

    //底部合作伙伴
    var panter=document.getElementById("panter");
    var panters=panter.children;
    //console.log(panters);


    window.onscroll = function () {
        backToTop();
        if(scroll().top>wrap.offsetTop){
            animate(p1,{"opacity":1},function(){
                animate(p2,{"opacity":1},function(){
                    animate(p3,{"opacity":1})
                })
            });
            animate(message,{"marginTop":0})
        }

        if(scroll().top>wrap.offsetHeight+about_ODM.offsetHeight+video.offsetHeight/2){
            animateCommon(temman[0],{"opacity":1,"margin-left":0},function(){
                animateCommon(temman[1],{"opacity":1,"margin-left":25},function(){
                    animateCommon(temman[2],{"opacity":1,"margin-left":25})
                })
            });
        }

        if(scroll().top>wrap.offsetHeight+about_ODM.offsetHeight+video.offsetHeight+team.offsetHeight/2){
            animateCommon(panters[0],{"opacity":1},function(){
                animateCommon(panters[1],{"opacity":1},function(){
                    animateCommon(panters[2],{"opacity":1},function(){
                        animateCommon(panters[3],{"opacity":1},function(){
                            animateCommon(panters[4],{"opacity":1},function(){
                                animateCommon(panters[5],{"opacity":1},function(){
                                    animateCommon(panters[6],{"opacity":1},function(){
                                        animateCommon(panters[7],{"opacity":1},function(){
                                            animateCommon(panters[8],{"opacity":1},function(){
                                                animateCommon(panters[9],{"opacity":1},function(){
                                                    animateCommon(panters[10],{"opacity":1},function(){
                                                        animateCommon(panters[11],{"opacity":1},function(){
                                                            animateCommon(panters[12],{"opacity":1},function(){
                                                                animateCommon(panters[13],{"opacity":1},function(){
                                                                    animateCommon(panters[14],{"opacity":1},function(){
                                                                        animateCommon(panters[15],{"opacity":1})
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
        }

        $(function(){
            var flag = null;
            $(panters).mouseenter(function(){
                $(this).siblings().css("opacity",0.5);
                $(this).css("opacity",1);
                flag = $(this);
                console.log(flag);
            });
            $(panter).mouseleave(function(){
                $(this).children("div").css("opacity",1);
            });
        });
    };

};






