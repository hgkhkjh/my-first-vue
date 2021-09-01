import { request } from "./request";
export function detailjs(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
//商品详情
//面向对象
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }
}
//商家信息
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}
// 导入尺寸信息
export class deparams {
    constructor(info, rule) {
        // 有些商品没有images值
        this.image = info.images ? info.images[0] : "";
        this.infos = info.set;
        this.sizes = rule.tables;
   }
}
// 商品推荐
export function goodsrecommend() {
    return request({
        url: '/recommend'
    })
}