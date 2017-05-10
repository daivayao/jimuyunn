/**
 * Created by kaola on 2016/11/14.
 */
/**
 * ����رյ绰
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
    //��ȡ����ҳ�����������
    return {
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
/**
 * ��ȡԪ���ı����ݵļ���д��
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
 * ����Ԫ���ı����ݵļ���д��
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
 * ��ȡ��һ���ֵ�Ԫ�صļ���д��
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//��һ���ֵܽڵ�
        while (next && 1 !== next.nodeType) {//1�� 2����������Ҫ��
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * ��ȡ��һ���ֵ�Ԫ�صļ���д��
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var perv = element.previousSibling;//��һ���ֵܽڵ�
        while (perv && 1 !== perv.nodeType) {//1�� 2����������Ҫ��
            perv = perv.previousSibling;
        }
        return perv;
    }
}

/**
 * ��ȡԪ�صĵ�һ����Ԫ�ؼ���д��
 * @param element
 * @returns {*}
 */
function getFirstChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;//��һ���ӽڵ�
        while (first && 1 !== first.nodeType) {//1�� 2����������Ҫ��
            first = first.nextSibling;
        }
        return first;
    }
}
/**
 * ��ȡԪ�ص����һ����Ԫ�صļ���д��
 * @param element
 * @returns {*}
 */

function getLastChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var last = element.lastChild;//���һ���ӽڵ�
        while (last && 1 !== last.nodeType) {//1�� 2����������Ҫ��
            last = last.previousSibling;
        }
        return last;
    }
}


//ͨ��currentStyle��getComputedStyle()����д����ȡ����������ʽ
//�ܻ�ȡ���ǲ����޸�����������ʽ��ֻ��ͨ��������ʽstyle����ȥ�޸�
/**
 * ��ȡ����������ʽ  ���ص���һ������  ��obj.width���ܻ�ȡ���
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
 * ͨ��className������ȡԪ�صļ��ݷ���
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
 *window.onload������
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    //������ڵ�window.onload�Ƿ�����¼�
    //console.log(oldOnLoad);
    if (typeof oldOnLoad === "function") {//˵��֮ǰ�����¼�
        window.onload = function () {
            oldOnLoad();//֮ǰ��Ҫִ��
            fn();//������µ�Ҫ�󶨵Ľ���ҲҪִ��
        };
    } else {
        window.onload = fn;
        /*window.onload = function () {
         fn();
         };*/
    }
}
/**
 * �޸�����
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    //����������ַ������տո�ָ� ������ÿһ������ ���ж� ������û������
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
 * �ֲ�ͼ �޷����
 */
    function play(){
        var leader=ul.offsetLeft;
        var step=-3;
        leader+=step;
        var targrt=-imgWidth*(lis.length-1);//imgWidthΪli��ǩ��ͼƬ�Ŀ�� 
        //Ҳ��������Ϊli��ǩ�Ŀ�� ȫ�ֱ���
        if(leader>targrt){
            ul.style.left=leader+"px";
        }else{
            ul.style.left=0;
        }
    }


/**
 *  ͼƬ�ƶ� ����һ������ ����
 * @param obj
 * @param target
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//�㼶����Ҫ���� ֱ�����ü���
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
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//�㼶����Ҫ���� ֱ�����ü���
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
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//�㼶����Ҫ���� ֱ�����ü���
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
                obj.style.zoom = leader / 100;//opacityû�е�λ
            if (leader === target) {
                clearInterval(obj.timer);
            }
        if(fn){
            fn();
        }

    }, 200);
}
/**
 * ͼƬ�ƶ� ����һ������ ���ٶ���
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
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
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
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//�㼶����Ҫ���� ֱ�����ü���
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
 * �ֲ�ͼ �����ƶ�Ч�� ͼƬ�ƶ� ��������
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
 * ��ȡԪ�ؼ������ʽ����
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
 *ҳ������������
 * @returns {{top: number, left: number}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
/**
 * //��ȡ����ҳ�����������
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client(){
    return {
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
/**
 * ��������
 * @param element
 * @returns {*}
 */
var trTop=document.getElementById("tr_top");
var bs=trTop.getElementsByTagName("b");;
for(var i=0;i<bs.length;i++){
    bs[i].style.background="url(images/top_pic.png)  0px "+ (-i*20)+ "px no-repeat";
}
/**
 * ����Ĵ������ڸ��Ҳ�̶�����Ӷ�̬Ч��
 */
//�ı����͸����
//��ʾ��ϵ��ʽ
var frContactUs=document.getElementsByClassName("fixed-right-contactUs")[0];
var cantactWay=document.getElementById("cantact-popover");
frContactUs.onmousemove=function(){
    animate(cantactWay,{"opacity":1});
};
frContactUs.onmouseout=function(){
    animate(cantactWay,{"opacity":0});
};
//���ض���
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
//����
function jump(obj,speedX,speedY){
    var speedX=speedX;//ˮƽ�ٶ�
    var speedY=speedY;//��ֱ�ٶ�
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        speedY+=3;//��ֱ������ٶ�Ϊ3 Ĭ�Ϸ�����������
        var x = obj.offsetLeft+speedX;//��ȡ�˶�����������
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
//���
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
//Ĭ��ִ��һ�Σ�
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
