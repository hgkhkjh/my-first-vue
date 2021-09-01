// 时间格式化
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatDate(date, fmt) {
    // 正则表达式
    // /y/代表它本身
    // /y*/ 筛选0个或多个y
    // /y?/筛选0个或一个y
    if (/(y+)/.test(fmt)) {
      // test() 方法用于检测一个字符串是否匹配某个模式.
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
  
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
  
    return fmt;
  }
  //backtop
//   export const backtopjs = {
 
//     data() {
//         return {
//             // 小箭头默认隐藏
//         }
//     },
//     methods: {
//         backtop() {
//             this.$refs.descroll.scrollTo(0, 0);
//           }
//     }
// }