// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Google Analytics (GA4), opcional. Vacío = sin analítica (builds locales y previews).
const gaId = process.env.PUBLIC_GA_MEASUREMENT_ID;
const analytics = gaId
	? [
			{ tag: 'script', attrs: { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true } },
			{
				tag: 'script',
				content: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`,
			},
		]
	: [];

const fonts = [
	{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
	{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
	{
		tag: 'link',
		attrs: {
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,800;1,800;1,900&family=Barlow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
		},
	},
];

// https://astro.build/config
export default defineConfig({
	site: 'https://developers.torke.today',
	integrations: [
		starlight({
			title: 'Torke for Developers',
			description:
				'Documentación de TorkeKit, el SDK abierto para medir piques con el teléfono: 60 pies, 1/8, 1/4, 0 a 100, clima, potencia y suspensión. iOS y Android.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
				en: { label: 'English', lang: 'en' },
				pt: { label: 'Português', lang: 'pt-BR' },
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'Torke',
			},
			favicon: '/favicon.svg',
			head: [...fonts, ...analytics],
			customCss: ['./src/styles/torke.css'],
			social: [
				{ icon: 'github', label: 'GitHub (iOS)', href: 'https://github.com/elmaedesistemas/torke-kit-ios' },
				{ icon: 'github', label: 'GitHub (Android)', href: 'https://github.com/elmaedesistemas/torke-kit-android' },
			],
			editLink: {
				baseUrl: 'https://github.com/elmaedesistemas/torke-developers/edit/main/',
			},
			lastUpdated: true,
			// iOS y Android tienen la misma API: cada página trae los ejemplos en pestañas Swift / Kotlin,
			// sincronizadas en todo el sitio.
			sidebar: [
				{
					label: 'Empezar', translations: { en: 'Get started', 'pt-BR': 'Começar' },
					items: [
						{ label: 'Qué es TorkeKit', translations: { en: 'What is TorkeKit', 'pt-BR': 'O que é o TorkeKit' }, slug: 'empezar/introduccion' },
						{ label: 'Instalación', translations: { en: 'Installation', 'pt-BR': 'Instalação' }, slug: 'empezar/instalacion' },
						{ label: 'Tu primera corrida', translations: { en: 'Your first run', 'pt-BR': 'Sua primeira arrancada' }, slug: 'empezar/primera-corrida' },
					],
				},
				{
					label: 'Guías', translations: { en: 'Guides', 'pt-BR': 'Guias' },
					items: [
						{ label: 'La sesión en vivo', translations: { en: 'The live session', 'pt-BR': 'A sessão ao vivo' }, slug: 'guias/sesion' },
						{ label: 'Corridas grabadas', translations: { en: 'Recorded runs', 'pt-BR': 'Arrancadas gravadas' }, slug: 'guias/corridas-grabadas' },
						{ label: 'Más mediciones', translations: { en: 'More measurements', 'pt-BR': 'Mais medições' }, slug: 'guias/mediciones' },
						{ label: 'Clima y potencia', translations: { en: 'Weather and power', 'pt-BR': 'Clima e potência' }, slug: 'guias/clima-y-potencia' },
						{ label: 'Calidad de la corrida', translations: { en: 'Run quality', 'pt-BR': 'Qualidade da arrancada' }, slug: 'guias/calidad' },
						{ label: 'Suspensión', translations: { en: 'Suspension', 'pt-BR': 'Suspensão' }, slug: 'guias/suspension', badge: { text: 'Lab', variant: 'success' } },
					],
				},
				{
					label: 'Conceptos', translations: { en: 'Concepts', 'pt-BR': 'Conceitos' },
					items: [
						{ label: 'Cómo funciona', translations: { en: 'How it works', 'pt-BR': 'Como funciona' }, slug: 'conceptos/como-funciona' },
						{ label: 'Precisión', translations: { en: 'Accuracy', 'pt-BR': 'Precisão' }, slug: 'conceptos/precision' },
					],
				},
				{
					label: 'Referencia', translations: { en: 'Reference', 'pt-BR': 'Referência' },
					items: [
						{ label: 'API', slug: 'referencia/api' },
						{ label: 'Formato torke.run', translations: { en: 'torke.run format', 'pt-BR': 'Formato torke.run' }, slug: 'referencia/formato' },
						{ label: 'Versiones', translations: { en: 'Releases', 'pt-BR': 'Versões' }, slug: 'referencia/versiones' },
						{ label: 'Roadmap', slug: 'referencia/roadmap' },
					],
				},
			],
		}),
	],
});
