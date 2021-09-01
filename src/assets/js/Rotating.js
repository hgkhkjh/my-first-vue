//设置动态的css样式
var lunbo = document.querySelector('.lunbo')
var lul = document.querySelector('.lul')
var fimg = document.querySelectorAll('li')[0];
var limg = document.querySelectorAll('li')[2];
//   cloneNode复制一个元素
// appendChild() 方法可向节点的子节点列表的末尾添加新的子节点，再最后一张图片后面添加第一张图片
lul.appendChild(fimg.cloneNode(true))
//在第一张图片前面添加最后一张图片  
lul.insertBefore(limg.cloneNode(true), lul.firstChild)
// 获取lul下面全部的li
var lis = lul.querySelectorAll('li')

//   获取li元素的数量
var licount = lis.length;
// 获取轮播图总共的宽度
var lwidth = lunbo.offsetWidth;
// 设置图片盒子的宽度
lul.style.width = licount * lwidth + 'px';
//设置每一个li元素的样式 给他们定义宽度 他的宽度就等于我们页面的宽度也就是lunbo的宽度
for (i = 0; i < lis.length; i++) {
    lis[i].style.width = lwidth + 'px'
}
//设置偏移距离
lul.style.left = -lwidth + 'px'

// 设置自动轮播
// 设置索引(设置索引为1，因为图片已经偏移了)
var index = 1
// 设置定时器先去封装他，因为后面要开启定时器，调用这个函数就行了
var time;//要在外面定义time不然后面清除定时器接收不到函数
//当手指滑动轮播图过快的时候后面的轮播图就不会显示，因为滑动过快时过度没有完成就不会触发webkitTransitionEnd（监听当元素执行完过度效果）
//所以设置一个变量用来控制，（过度效果未完成不能滑动图片）
var con = true
var ltime = function () {
    time = setInterval(function () {
        index++
        // 设置偏移 每次偏移都是以最初的点为参照点点的，所以如果每次都便宜一个width的话图片就不动
        lul.style.left = (-index * lwidth) + 'px'

        // 添加过度效果,在最后一张跳到第一张时要清除过度效果所以要加上如果在清除过度后面添加else{ lul.style.transition='all 1s'}的话因为有个定时器所以不能流畅执行
        lul.style.transition = 'all 1s'

        setTimeout(function () {
            // 判断是否到最后一张
            // 当显示为最后一幢图片时进行操作，最后一张图片的索引值为licount-1
            if (index == licount - 1) {
                index = 1;
                // 偏移到最开始的位置
                lul.style.left = (-index * lwidth) + 'px'
                //当显示最后一张的时候会移回去，所以要清除过度效果
                lul.style.transition = 'none'
            }
            //如果直接清除过度效果的话最后一张就直接跳过去了，所以让他延迟一会在进行判断（跳转），这就是为什么在最后一张后面要添加第一张图片了   
        }, 1000)

    }, 2000)
}
ltime();
//设置触摸事件
// 定义手指的坐标 分为x和y
var sx, sy, mx, my, dis;
lul.addEventListener('touchstart', function (q) {
    clearInterval(time);
    sx = q.targetTouches[0].clientX;
})

lul.addEventListener('touchmove', function (q) {
    if (con == true) {
        mx = q.targetTouches[0].clientX;
        dis = mx - sx;
        lul.style.left = -index * lwidth + dis + 'px'
        //  为了使过度效果流畅  去除lul的过渡效果
        lul.style.transition = 'none'
    }

})
lul.addEventListener('touchend', function () {
    con = false;
    // 判断是否切换图片
    if (Math.abs(dis) > 100) {//切换图片 如果手指触摸滑动的距离超过100进行图片切换
        if (dis > 0) {//如果偏移值为正数则向下一张偏移（向右滑动）
            index--
        }
        else {//如果偏移值为负数则向下一张偏移（向左滑动）
            index++
        }
        //设置轮播图的最终偏移，添加过度
        lul.style.left = -index * lwidth + 'px';
        lul.style.transition = 'all 0.5s'
    }
    else if (Math.abs(dis) > 0) {//确定用户做出拖拽事件，点一下的话不需要做出相关操作
        //设置轮播图回弹，添加过度效果
        lul.style.left = -index * lwidth + 'px';
        lul.style.transition = 'all 0.5s'
    }
    //执行完触摸事件就可以从新开启定时器了
    sx = 0;
    mx = 0;
    dis = 0;
    ltime()
})
//解决轮播图划到第一张或者最后一张时没有图片
//添加 webkitTransitionEnd 事件，webkitTransitionEnd事件是监听当元素执行完过度效果

lul.addEventListener('webkitTransitionEnd', function () {
    con = true

    if (index == licount - 1) {//当滑动到最后一个图片时展示的是倒数第二张图片让图片展示的为第一张
        index = 1;//index时从0开始的
        lul.style.left = -index * lwidth + 'px';
        lul.style.transition = 'none'

    }
    else if (index == 0) {//当展示的时最后一张图片时，就是第一个位置的图片向前滑动时让他展示最后一张图片
        index = licount - 2;
        lul.style.left = -index * lwidth + 'px';
        lul.style.transition = 'none'


    }

})