
var llybanner = document.getElementById("llybanner");
var wz = document.getElementById("wz");
 animate(llybanner, {"opacity":1});

   // animate(wz, {"left":240});

    animate(wz, {"opacity":1},function(){
        jump(wz,4,5);
    });

/**
 * Created by Administrator on 2016/11/17 0017.
 */
//按钮

var arrowanniu1 = document.getElementById("arrowanniu1");
var arrowanniu2 = document.getElementById("arrowanniu2");
var arrowanniu3 = document.getElementById("arrowanniu3");
var anniu1 = document.getElementById("anniu1");
anniu1.onmouseover =function(){
    anniu1.style.backgroundColor="#2BBFCB";
    //this.style.cursor = pointer;
    animate(arrowanniu1, {"opacity":1})
};
anniu1.onmouseout =function(){
    this.style.backgroundColor="#A1A9B7";
    animate(arrowanniu1, {"opacity":0})
};
var anniu2 = document.getElementById("anniu2");
anniu2.onmouseover =function(){
    this.style.backgroundColor="#2BBFCB";
    //anniu2.style.cursor = pointer;
    animate(arrowanniu2, {"opacity":1})
};
anniu2.onmouseout =function(){
    this.style.backgroundColor="#A1A9B7";
    animate(arrowanniu2, {"opacity":0})
};

var anniu3 = document.getElementById("anniu3");
anniu3.onmouseover =function(){
    this.style.backgroundColor="#2BBFCB";
    //anniu3.style.cursor = pointer;
    animate(arrowanniu3, {"opacity":1})
};
anniu3.onmouseout =function(){
    this.style.backgroundColor="#A1A9B7";
    animate(arrowanniu3, {"opacity":0})
};

var llybanner = document.getElementById("llybanner");
var  xiangtongs = document.getElementsByClassName("xiangtong");

var  fangan = document.getElementById("fangan");
var  zhinengs = fangan.children;
//
var pdt1=document.getElementById("product1");
$(".product").mouseenter(function(){
    $(this).animate({"height":"215px","width":"280px","padding":"20px","borderWidth":"1px"},200);

});
$(".product").mouseleave(function(){
    $(this).animate({"height":"215px","width":"280px","padding":"20px","borderWidth":"0px"},200);

});


window.onscroll=function(){
    backToTop();
    if(scroll().top > llybanner.offsetHeight/2){
        animate(xiangtongs[0], {"opacity":1, "marginLeft":10},function(){
            animate(xiangtongs[1],{"opacity":1,"marginLeft":70},function(){
                animate(xiangtongs[2],{"opacity":1,"marginLeft":75})
            })});

    }
    if(scroll().top > document.getElementsByClassName("llybox")[0].offsetTop){
        //alert("88")
        //console.log(zhinengs);
        animate(zhinengs[0], {"opacity":1, "marginTop":50},function(){
            animate(zhinengs[1],{"opacity":1, "marginTop":50},function(){
                animate(zhinengs[2],{"opacity":1,"marginTop":50});

            });
        });
    }
};







function animate(obj, json, fn) {//json attr, target
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {//json 属性名:属性值 k:json[k]
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

            if (leader!= target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 25);
}