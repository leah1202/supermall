module.exports = {
    // outputDir: 'dist',
    // assetsDir: 'assets',
    // lintOnSave: false,
    // devServer: {
    //     open: true,
    //     host: "localhost",
    //     port: '8080',
    //     // https: false,
    //     hotOnly: false,
    //     proxy: {
    //         '/api': {
    //             target: 'http://152.136.185.210:8000/api/h8',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // },
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
                'assets': '@/assets',
            }
        }
    },
    publicPath: './'

}