module.exports = {
	dest: './dist',
	base: '/',
	title: 'QVNote',
	description: 'QVNote site',
	head: [
		['meta', { name: 'viewport', content: `width=device-width, initial-scale=1.0` }],
		['link', { rel: 'icon', href: `/favicon.png` }],
		['link', { rel: 'apple-touch-icon', href: `/icon.png` }],
		['link', { rel: 'preconnect', href: `https://www.google-analytics.com`, crossorigin: 'true'}],
	],
	themeConfig: {
		repo: '',
		editLinks: false,
		editLinkText: '',
		lastUpdated: '',
		search: false,
		searchMaxSuggestions: 10,
		locales:{
			en_US: {url: '/', title: 'English', icon: 'us.png'},
			ru_RU: {url: '/ru/', title: 'Русский', icon: 'ru.png'}
		},
		nav: [
			{
				en_US: 'Documentation',
				ru_RU: 'Документация',
				link: 'docs/'
			},
			{
				en_US: 'Changes',
				ru_RU: 'Изменения',
				link: 'changes/'
			},
			{
				en_US: 'Download',
				ru_RU: 'Скачать',
				link: 'download/'
			}
		],
		docsDir: 'docs'
	},
	postcss: {
		plugins: require("./plugins")
	},
	plugins: [
		['sitemap', { hostname: 'https://qvnote.fsky.info'} ],
		['@vuepress/google-analytics', {ga: 'UA-145410683-1'}],
		[
			'vuepress-plugin-canonical',
			{
			  baseURL: 'https://qvnote.fsky.info', // base url for your canonical link, optional, default: ''
			  stripExtension: true // strip '.html' , optional, default: false
			}
		],
	]
}
