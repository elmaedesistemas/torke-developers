// Idioma de la página según la ruta: /en/… inglés, /pt/… portugués, el resto español.
export type Lang = 'es' | 'en' | 'pt';

export function langOf(url: URL): Lang {
	const first = url.pathname.split('/')[1];
	return first === 'en' || first === 'pt' ? first : 'es';
}

/** Para toLocaleString: comas o puntos decimales según el idioma. */
export const numberLocale: Record<Lang, string> = { es: 'es-CR', en: 'en-US', pt: 'pt-BR' };
