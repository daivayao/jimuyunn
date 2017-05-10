/**
 * Created by kaola on 2016/11/14.
 */

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
function getStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    } else {
        return getComputedStyle(element);
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
        for (var k in json) {
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = 10;

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
                var step = 5;
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
    }, 30);
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
