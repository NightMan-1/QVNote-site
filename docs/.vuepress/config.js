module.exports = {
	dest: './dist',
	base: '/',
	title: 'QVNote',
	description: 'QVNote site',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }],
		['link', { rel: 'apple-touch-icon', href: `/icon.png` }]
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
		['minimal-analytics', {ga: 'UA-145410683-1'}],
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
