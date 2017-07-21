var num=[];//box的随机数组
var box_dom=document.getElementsByClassName("icon");//获取盒子的dom
function whileRun(){
    num=[];
    while (num.length<3){//q取三个数值
        box_dom_num=Math.floor(Math.random()*9);//取1到9的随机整数
        console.log(box_dom_num);//调用该console对象的log()函数，可以在控制台中打印信息
        //随机的dox赋值给box_dox_num.
        if(num.indexOf(box_dom_num)<0){//随机选择box看有没有在原先的数组里面，如果没有，重新运行函数。
            //indexOf()返回某个指定的字符串值在字符串中首次出现的位置。
            num.push(box_dom_num);//将随机选择到的box添加到数组里面去。
        }
        console.log(num);//调用该console对象的log()函数，可以在控制台中打印信息
    }
    return num;//跳出while再循环返回数组
}
function begin(){//函数声明
    whileRun();
    for (var box_color=0; box_color < 9;box_color++){//小格子的下标，从0开始循环小于9，每次循环结果加1，大于9是停止，循环代码块一定的次数
        box_dom[box_color].style.backgroundColor="orange";//初始化box的背景色
    }
    function boxColor() {//颜色选择
        var r = Math.floor(Math.random() * 256);//函数表达式
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + "," + g + "," + b + ")";//随机r,g,b.return一个rgb(r,g,b)给运算符号添加双引号，防止运算
    }// }console.log(boxColor())
    function aaa(){//声明aaa函数
        color=[];//定义color数组
        while(color.length<3) {//While 循环会在指定条件为真时循环执行代码块。数值>=3时停止循环。
            if(color.indexOf(boxColor()<0)){//当原先数组里面有这个元素的时候>0,反之会小于0
                color.push(boxColor());//当元素小于0 时，元素push进数组里面
            }
            console.log(color);//console.log 用于输出普通信息
        }
        return color;//返回
    }
    aaa();//随机三box
    console.log(num)
        box_dom[num[0]].style.backgroundColor=color[0];//选中盒子下标的赋值背景颜色
        box_dom[num[1]].style.backgroundColor=color[1];
        box_dom[num[2]].style.backgroundColor=color[2];
        ran()
    }
    var a;//时间控制变色
    function ran(){
        clearInterval(a);//取消定时器
        a=setInterval(//开始循环，
            function(){
                begin();
            },1000
            //每隔一秒再运行下一个begin()
        )
    }
    //结束btn
    function finish(){
        clearInterval(a);//取消定时器，否则还会将继续运行begin()
        for(var box_color=0; box_color < 9; box_color++){
            box_dom[box_color].style.backgroundColor="orange";//恢复背景颜色
        }
    }
    //暂停
    function stop(){
        clearTimeout(a);//取消定时器，并且不设置颜色，也不运行函数begin()
    }
