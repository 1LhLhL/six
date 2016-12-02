/**
 *
 * Created by Administrator on 2016/11/29.
 */
        var img =document.querySelector(".img"),
            slide =document.querySelector(".slide"),
            left =document.querySelector(".left"),
            right =document.querySelector('.right'),
            circle =document.querySelector('.circle'),
            circleli =circle.querySelectorAll('li');
        var i= 0,
            square=0;
        var timer=null;
//动画函数
        function animate(obj,target){
        clearInterval(obj.timer);
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=15)
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
            },10)
        }
//左箭头
        left.addEventListener("click", function () {
            i++;
            if(i>4){
                img.style.left=0;
                i=1;
            }
            animate(img,-i*735);
            follow();
        });
//右箭头
        right.addEventListener("click", function () {
            i--;
            if(i==-1){
                img.style.left=-4*735+"px";
                i=3;
            }
            square=i;
            animate(img,-i*735);
            if(square>3){
                square=0;
            }
            for(var j=0;j<circleli.length;j++){
                circleli[j].className="";
            }
            circleli[square].className="current";



        });
//小圆点控制
for(var j=0;j<circleli.length;j++){
    circleli[j].index=j;
    circleli[j].addEventListener=('mouseover',function () {
        for(k=0;k<circleli.length;k++){
            circleli[k].className = "";
        }
        this.className="current";
        animate(img,-this.index*735);
        square=i=this.index;
    })
}
//定时器控制
        timer = setInterval(autoplay,1500);
        function autoplay() {
            i++;
            if (i > 4) {
                img.style.left = 0;
                i = 1;
            }
            animate(img, -i * 735);
            follow();
        }
//
        slide.onmouseover = function() {
            clearInterval(timer);
        };
        slide.onmouseout = function() {
            timer = setInterval(autoplay,1500);  // 开始轮播图定时器
        };
function follow(){
    square++;
    if(square>3){
        square=0;
    }
    for(var j=0;j<circleli.length;j++){
        circleli[j].className="";
    }
    circleli[square].className="current";

}