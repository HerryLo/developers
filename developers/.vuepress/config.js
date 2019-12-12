module.exports = {
    base: '/',
    title: "Google性能优化文档",
    description: 'Yopai Blog 拾人牙慧 不是技术的创造者，只是技术的搬运工',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    themeConfig: {
        sidebarDepth: 5,
        repo: '',
        repoLabel: 'Github, 欢迎 🌟',
        lastUpdated: '更新于',
        editLinks: true,
        editLinkText: '欢迎斧正',
        nav:[ // 导航栏配置
            {text: '#原文链接 🌟', link: 'https://developers.google.com/web/fundamentals/performance/why-performance-matters?hl=zh-cn' },
            {text: '#本项目地址', link: 'https://github.com/HerryLo/developers' },
        ],
        sidebar: [
            ['/', '性能为何至关重要'],
            '/rail/',
            {
                title: 'Loading 性能',
                children: [
                    '/load-preformance/Overview',
                    '/load-preformance/user-centric-performance-metrics'
                ]
            }
            
        ],
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                return new Date(timestamp).toLocaleString()
                }
            }
        ],
        '@vuepress/nprogress',
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
    ]
}