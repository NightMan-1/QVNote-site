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
		['link', { rel: 'preconnect', href: `https://fonts.googleapis.com`, crossorigin: 'true'}],
		['link', { rel: 'preconnect', href: `https://fonts.gstatic.com`, crossorigin: 'true'}],
		['link', { rel: 'preload', href: `https://fonts.googleapis.com/css?family=Alegreya+Sans:400,400i,500,500i,700,700i&subset=cyrillic&display=swap`, as: 'style'}],
		['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Alegreya+Sans:400,400i,500,500i,700,700i&subset=cyrillic&display=swap`, media: 'print', onload: `this.media='all'`}],
		
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
		// '@vuepress/plugin-nprogress',
		// serviceWorker скачивает сайт ЦЕЛИКОМ!!!
		/*
		['@vuepress/plugin-pwa', {
			serviceWorker: true,
			updatePopup: {
				message: "Новый контент доступен.",
				buttonText: "Обновить"
			}
		}]
		*/
	]
}
