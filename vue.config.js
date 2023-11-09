// const { defineConfig } = require('@vue/cli-service')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'api': '@/api',
                'common': '@common'
            },
            //web3配置
            fallback: {
                crypto: false,
                url: require.resolve("url/"),
            }
        },
    },
    publicPath: './',

    //跨域前端代理
    devServer: {
        proxy: {
            '/api': {
                //代理配置

                //测试
                //http://47.108.71.61/api/v1
                //开发
                //http://192.168.2.25:5010/api/v1
                
                target: "http://47.108.71.61/api/v1",
                //路径重写
                pathRewrite: {
                    '^/api': ''
                },
                //开启跨域代理
                changeOrigin: true
            }
        }
    }
}
