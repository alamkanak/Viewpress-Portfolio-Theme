require('dotenv').config()
module.exports = {
    title: 'Raquib-ul Alam',
    description: 'Portfolio of Raquib-ul Alam',
    theme: 'theme',
    themeConfig: {
        social: [
            { name: 'Github', icon: ['fab', 'github'], url: 'https://github.com/alamkanak' },
            { name: 'Stack Overflow', icon: ['fab', 'stack-overflow'], url: 'https://stackoverflow.com/users/1113765/raquib-ul-alam'},
            { name: 'Mail', icon: ['fas', 'envelope'], url: 'mailto:alam.kanak@gmail.com' },
            { name: 'LinkedIn', icon: ['fab', 'linkedin'], url: 'https://www.linkedin.com/in/alamkanak/' },
            { name: 'Dribbble', icon: ['fab', 'dribbble'], url: 'https://dribbble.com/kanak'}
        ],
        tag_order: ['Android Development', 'Machine Learning', 'Web Development', 'UX Design', 'Drawing']
    },
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    plugins: [
        '@vuepress/pwa',
        [
            '@vuepress/google-analytics',
            {
                'ga': process.env.GOOGLE_ANALYTICS_TRACKING_ID
            }
        ],
        [
            'sitemap', {
                hostname: 'https://alamkanak.github.io'
            }
        ]
    ]
}