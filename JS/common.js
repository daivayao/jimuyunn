/**
 * Created by kaola on 2016/11/14.
 */
/**
 * 点击关闭电话
 * @param element
 * @param content
 */
var  phone=document.getElementById("phone");
var closeBut=document.getElementById("closeBut");
var phoneTop=phone.offsetTop;
var phoneLeft=phone.offsetLeft
//closeBut.onclick=function(){
//    animate()
//    shake(phone);
//    clearInterval(phoneTimer);
//};
$("#closeBut").click(function(){
    $(this).css("opacity",0);
    $("#phone").animate({"height":"50px","left":phoneLeft-200+"px","top":phoneTop-50+"px"},150).animate({"height":"0px","left":"0px"},400,function(){
        $("#phone").css("display","none");
    });
});
//phone.onmouseover=function(){
//    shake(this,"right");
//};


function client(){
    //获取整个页面可视区域宽高
    return {
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
/**
 * 获取元素文本内容的兼容写法
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    if (typeof element.innerText == "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

/**
 * 设置元素文本内容的兼容写法
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText == "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
/**
 * 获取下一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//下一个兄弟节点
        while (next && 1 !== next.nodeType) {//1有 2不是我们想要的
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var perv = element.previousSibling;//上一个兄弟节点
        while (perv && 1 !== perv.nodeType) {//1有 2不是我们想要的
            perv = perv.previousSibling;
        }
        return perv;
    }
}

/**
 * 获取元素的第一个子元素兼容写法
 * @param element
 * @returns {*}
 */
function getFirstChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;//第一个子节点
        while (first && 1 !== first.nodeType) {//1有 2不是我们想要的
            first = first.nextSibling;
        }
        return first;
    }
}
/**
 * 获取元素的最后一个子元素的兼容写法
 * @param element
 * @returns {*}
 */

function getLastChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var last = element.lastChild;//最后一个子节点
        while (last && 1 !== last.nodeType) {//1有 2不是我们想要的
            last = last.previousSibling;
        }
        return last;
    }
}


//通过currentStyle与getComputedStyle()兼容写法获取外联内联样式
//能获取但是不能修改内联外联样式，只能通过行内样式style属性去修改
/**
 * 获取内联外联样式  返回的是一个对象  如obj.width就能获取宽度
 * @param element
 * @returns {*}
 */
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj, null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

/**
 * 通过className类名获取元素的兼容方法
 * @param element
 * @param className
 * @returns {*}
 */
function  getElementsByClassName(element,className){
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    }else{
        var children = (element || document).getElementsByTagName('*');
        var elements = [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    }
}

/**
 *window.onload继续绑定
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    //检查现在的window.onload是否绑定了事件
    //console.log(oldOnLoad);
    if (typeof oldOnLoad === "function") {//说明之前绑定了事件
        window.onload = function () {
            oldOnLoad();//之前的要执行
            fn();//传入的新的要绑定的将来也要执行
        };
    } else {
        window.onload = fn;
        /*window.onload = function () {
         fn();
         };*/
    }
}
/**
 * 修改类名
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    //把类名这个字符串按照空格分割 把里面每一个类名 做判断 这样就没问题了
    var arr = element.className.split(" ");
    //console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    console.log(arr);
    element.className=arr.join(" ");
}


/**
 * 轮播图 无缝滚动
 */
    function play(){
        var leader=ul.offsetLeft;
        var step=-3;
        leader+=step;
        var targrt=-imgWidth*(lis.length-1);//imgWidth为li标签里图片的宽度 
        //也可以设置为li标签的宽度 全局变量
        if(leader>targrt){
            ul.style.left=leader+"px";
        }else{
            ul.style.left=0;
        }
    }


/**
 *  图片移动 更改一切属性 缓动
 * @param obj
 * @param target
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
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
function animateSlow(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
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
    }, 30);
}
function animateFast(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 5;
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
function animateZoom(obj,target, fn) {
    clearInterval(obj.timer);
    var target=target*100;
    var leader = getStyle(obj, "zoom") * 100;
    obj.timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style.zoom = leader / 100;//opacity没有单位
            if (leader === target) {
                clearInterval(obj.timer);
            }
        if(fn){
            fn();
        }

    }, 200);
}
/**
 * 图片移动 更改一切属性 匀速动画
 * @param obj
 * @param json
 * @param fn
 */
function animateCommon(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        var step = 10;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                step = 1;
                step = leader < target ? step : -step;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (Math.abs(target - leader) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style[k] = leader/100 + "px";
                } else {
                    obj.style[k] = target/100 + "px";

                }
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k));
                var target = json[k];
                var step = 10;
                step = leader < target ? step : -step;

                if (Math.abs(target - leader) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                } else {
                    obj.style[k] = target + "px";

                }
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
/**
 * 轮播图 动画移动效果 图片移动 缓动动画
 * @param obj
 * @param target
 */
function animateSlider(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader === target) {
            clearInterval(obj.timer);
        }
    }, 15);
}
/**
 * 获取元素计算后样式属性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 *页面滚动坐标距离
 * @returns {{top: number, left: number}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
/**
 * //获取整个页面可视区域宽高
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
/**
 * 顶部导航
 * @param element
 * @returns {*}
 */
var trTop=document.getElementById("tr_top");
var bs=trTop.getElementsByTagName("b");;
for(var i=0;i<bs.length;i++){
    bs[i].style.background="url(images/top_pic.png)  0px "+ (-i*20)+ "px no-repeat";
}
/**
 * 下面的代码用于给右侧固定栏添加动态效果
 */
//改变鼠标透明度
//显示联系方式
var frContactUs=document.getElementsByClassName("fixed-right-contactUs")[0];
var cantactWay=document.getElementById("cantact-popover");
frContactUs.onmousemove=function(){
    animate(cantactWay,{"opacity":1});
};
frContactUs.onmouseout=function(){
    animate(cantactWay,{"opacity":0});
};
//返回顶部
function backToTop(){
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||
        document.body.scrollTop||0;
    var timeId=null;
    var backtoTop=document.getElementsByClassName("back-to-top")[0];
    if(scrollTop!==0){
        backtoTop.style.visibility="visible";
        var leader=scrollTop;
        backtoTop.onclick= function () {
            clearInterval(timeId);
            timeId=setInterval(function(){
                var step=Math.ceil(leader/10);
                leader-=step;
                window.scrollTo(0,leader);
                if(leader<=0){
                    clearInterval(timeId);
                }
            },15);
        };
    }else{
        backtoTop.style.visibility="hidden";
    }
}
//跳动
function jump(obj,speedX,speedY){
    var speedX=speedX;//水平速度
    var speedY=speedY;//垂直速度
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        speedY+=3;//垂直方向加速度为3 默认方向向左向上
        var x = obj.offsetLeft+speedX;//获取运动后对象的坐标
        var y = obj.offsetTop+speedY;
        if(y>obj.parentNode.clientHeight-obj.offsetHeight){
            speedY*=-0.8;
            speedX*=0.8;
            y=obj.parentNode.clientHeight-obj.offsetHeight;
        }
        if(y<0){
            speedY*=-1;
            y=0;
        }
        if(x>obj.parentNode.clientWidth-obj.offsetWidth){
            speedX*=-0.8;
            x=obj.parentNode.clientWidth-obj.offsetWidth;
        }
        if(x<0){
            speedX*=-0.8;
            x=0;
        }
        if(Math.abs(speedX)<1){
            speedX=0;
        }
        if(Math.abs(speedY)<1){
            speedY=0;
        }
        if(speedX==0&&speedY==0&&y==obj.parentNode.clientHeight-obj.offsetHeight){
            clearInterval(obj.timer);
        }
        obj.style.left=x+"px";
        obj.style.top=y+"px";
       // document.title=speedY;
    },30);
}
//筋斗云
//var lastPosition = 0;
//var lastWidth = 58;
function jindouyun(index){

    var backLava = document.getElementById("backLava");
    var ul = document.getElementById("tr_bottom");
    var lis = ul.children;
    var arrWidth = [];
    var isClicked=false;
    var lastPosition =lis[index].offsetLeft ;
    var lastWidth =lis[index].offsetWidth ;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            backLava.style.width =this.offsetWidth + "px";
            animate(backLava, {"left": this.offsetLeft});
        };
        lis[i].onmouseout = function () {
            animate(backLava, {"left": lastPosition});
            backLava.style.width = lastWidth+"px";

        };
        lis[i].onclick = function () {
            lastPosition = this.offsetLeft+"px";
            lastWidth = this.offsetWidth+ "px";
        }
        backLava.style.width = this.offsetWidth + "px";
    }
}
jindouyun(0);
//默认执行一次；
function shake(obj,direction,endFn){
    var arr=new Array();
    var num=0;
    for(var i=10;i>0;i--){
        arr.push(i,-i);
    }
    arr.push(0);
    var position=parseInt(getStyle(obj,direction));
    clearInterval(obj.shaketimer);
    obj.shaketimer=setInterval(function(){
        obj.style[direction]=position+arr[num]+"px";
        num++;
        if(num==arr.length){
            clearInterval(obj.shaketimer);
            num=0;
            endFn&&endFn();
        }
    },50);
    //}
}
