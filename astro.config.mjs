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
					label: 'Empezar',
					items: [
						{ label: 'Qué es TorkeKit', slug: 'empezar/introduccion' },
						{ label: 'Instalación', slug: 'empezar/instalacion' },
						{ label: 'Tu primera corrida', slug: 'empezar/primera-corrida' },
					],
				},
				{
					label: 'Guías',
					items: [
						{ label: 'La sesión en vivo', slug: 'guias/sesion' },
						{ label: 'Corridas grabadas', slug: 'guias/corridas-grabadas' },
						{ label: 'Más mediciones', slug: 'guias/mediciones' },
						{ label: 'Clima y potencia', slug: 'guias/clima-y-potencia' },
						{ label: 'Calidad de la corrida', slug: 'guias/calidad' },
						{ label: 'Suspensión', slug: 'guias/suspension', badge: { text: 'Lab', variant: 'success' } },
					],
				},
				{
					label: 'Conceptos',
					items: [
						{ label: 'Cómo funciona', slug: 'conceptos/como-funciona' },
						{ label: 'Precisión', slug: 'conceptos/precision' },
					],
				},
				{
					label: 'Referencia',
					items: [
						{ label: 'API', slug: 'referencia/api' },
						{ label: 'Formato torke.run', slug: 'referencia/formato' },
						{ label: 'Versiones', slug: 'referencia/versiones' },
						{ label: 'Roadmap', slug: 'referencia/roadmap' },
					],
				},
			],
		}),
	],
});
