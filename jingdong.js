/**
 * Created by viola on 2017/9/11.
 */


//图片轮播
/*DOM元素的操作 动态创建DOM元素 淡入淡出的图片轮播*/
//在窗体加载完成之后
/*声明全局变量*/
var num_index = 0;
var timer;
var leftorright = "rightb";
window.onload = function () {
    //网页加载完成时 调用函数
   /* 图片轮播的窗体加载*/
    ShowImage();
   /*倒计时的窗体加载*/
    showTimer();

    //获取容器  鼠标进入容器  停止计时器   离开启动计时器
    var block = document.getElementsByClassName("top")[0];
    block.onmouseenter = function () {
        clearTimeout(timer);
    }
    block.onmouseleave = function () {
        timer = setTimeout("ShowImage()", 2000);
    }
    //点击左右  切换图片
    var leftspan = document.getElementsByClassName("lefta")[0];
    var rightspan = document.getElementsByClassName("rightb")[0];
    leftspan.onclick = function () {
        leftorright = "lefta";
        ShowImage();
        clearTimeout(timer);
    }
    rightspan.onclick = function () {
        leftorright = "rightb";
        ShowImage();
        clearTimeout(timer);
    }
    //获取所有的点   鼠标悬停切换图片  顺便改色
    var dian = document.getElementsByClassName("diandian");
    for (var i = 0; i < dian.length; i++) {
        dian[i].index = i;
        dian[i].onmouseover = function () {
            for (var i = 0; i < dian.length; i++) {
                dian[i].style.backgroundColor = "white";
            }
            this.style.backgroundColor = "red";
            //鼠标悬停谁切换谁对应的图片
            var img = document.getElementById("top_img");
            var number = this.index + 1;
            num_index = number;
            img.src = "./img/10" + number + ".jpg";
        }
    }
}
function ShowImage() {
    //网页加载完成之后第一个默认变色
    var dian = document.getElementsByClassName("diandian");
    for (var i = 0; i < dian.length; i++) {
        dian[i].style.backgroundColor = "white";
    }
    /*?:三元运算符 ？之前是判断条件  ？之后是成立的代码  ：之后不成立的代码*/
    /* dian[num_index == 3 ? num_index = 0 : num_index].style.backgroundColor = "red";*/
    var img = document.getElementById("top_img");
    if (leftorright == "rightb") {
        //窗体加载完成之后   获取所需要变化的元素
        num_index++;
        if (num_index > 8) {
            num_index = 1;
        }
    }
    else {
        num_index--;
        if (num_index < 1) {
            num_index = 8;
        }
    }
    /*让当前对应的点变红*/
    dian[num_index-1].style.backgroundColor = "red";
    img.src = "./img/10" + num_index + ".jpg";
    timer = setTimeout("ShowImage()", 2000);
}

//倒计时
function showTimer()
{
    //获取现在的时间
    var time_now=new Date();
    //时间设置  2017,9,1,0,0,0设置几月就是几月   2017-9-1 0:0:0 这种设置方式少一个月
    var time_go=new Date(2017,9,1,0,0,0);
    //计算中间的时间差
    /*getTime() 获取的是当前时间到1970年之间的总时间*/
    var time=parseFloat((time_go.getTime()-time_now.getTime())/1000);
    //开始换算月 天 时 分 秒
    var day=parseInt(time/(3600*24)%30)
    var hour=parseInt(time/3600%24)
    var min=parseInt(time/60%60)
    var sec=parseInt(time%60);
    document.getElementsByClassName("timespan")[0].innerHTML=day;
    document.getElementsByClassName("timespan")[1].innerHTML=hour;
    document.getElementsByClassName("timespan")[2].innerHTML=min;
    document.getElementsByClassName("timespan")[3].innerHTML=sec;
    setTimeout("showTimer()",1000);
}

/*
一个页面只能有一个窗体加载 */
