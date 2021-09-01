module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // @代表src
                'assets': './src/assets/',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router'
            }
        }
    }
}
// module.exports = {
//     pages: {
//       index: {
//         // page 的入口
//         entry:"src/assets/js/rem.js",
//       },
//     },
//     // configureWebpack: {
//     //     resolve: {
//     //         alias: {
//     //             // @代表src
//     //             'assets': './src/assets',
//     //             'components': '@/components',
//     //             'network': '@/network',
//     //             'router': '@/router'
//     //         }
//     //     }
//     // }
//   }
// module.exports = {
//     configureWebpack: {
//       resolve: {
//         alias: {
//           assets: "@/assets",
//           components: "@/components",
//           views: "@/views",
//           home:"@/views/home",
//           classa:"@/views/classa",
//           mine:"@/views/mine",
//           shopcart:"@/views/shopcart"
//         }
//       }
//     }
//   };