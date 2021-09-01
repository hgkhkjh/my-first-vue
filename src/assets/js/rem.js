export function remjs(){
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            //js获取当前设备得大小；document.documentElement.clientWidth;
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {//宽度》750  平板或者电脑桌面
                docEl.style.fontSize = '100px' //设置根元素为固定为100px
            } else {
                //设置移动端适配
                //设置html根元素大小   100设计稿得html大小  750设计稿（根据设计稿变化）
                //测试设计稿大小：测量得值px px转rem 测量得px/100=？rem 直接css里面写？rem
                //假设设计稿的字体大小为100px  所用的设备宽度为750px
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
console.log("remjs生效了");

}