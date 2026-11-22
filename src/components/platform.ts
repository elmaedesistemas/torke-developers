// La plataforma elegida (Swift o Kotlin) es la de las pestañas de Starlight con syncKey="platform".
// Los componentes interactivos la siguen para mostrar sus nombres y su código en el mismo lenguaje.

export type Platform = 'swift' | 'kotlin';

const KEY = 'starlight-synced-tabs__platform';
const EVENT = 'tk-platform';

export function getPlatform(): Platform {
	try {
		return localStorage.getItem(KEY)?.trim().toLowerCase() === 'kotlin' ? 'kotlin' : 'swift';
	} catch {
		return 'swift';
	}
}

function apply(p: Platform) {
	document.documentElement.dataset.tkPlatform = p;
	window.dispatchEvent(new CustomEvent(EVENT, { detail: p }));
}

/** Cambia la plataforma en todo el sitio, también las pestañas de código de la página. */
export function setPlatform(p: Platform) {
	try {
		localStorage.setItem(KEY, p === 'kotlin' ? 'Kotlin' : 'Swift');
	} catch {}
	const label = p === 'kotlin' ? 'Kotlin' : 'Swift';
	const tab = [...document.querySelectorAll<HTMLElement>('starlight-tabs[data-sync-key="platform"] [role="tab"]')].find(
		(t) => t.textContent?.trim() === label && t.getAttribute('aria-selected') !== 'true',
	);
	tab?.click();
	apply(p);
}

export function onPlatform(cb: (p: Platform) => void) {
	window.addEventListener(EVENT, (e) => cb((e as CustomEvent<Platform>).detail));
	cb(getPlatform());
}

let installed = false;
/** Lleva el atributo data-tk-platform del <html> al día con las pestañas. */
export function followPlatform() {
	if (installed) return;
	installed = true;
	apply(getPlatform());
	const sync = (e: Event) => {
		const tab = (e.target as HTMLElement).closest?.('starlight-tabs[data-sync-key="platform"] [role="tab"]');
		if (tab) setTimeout(() => apply(getPlatform()), 0);
	};
	document.addEventListener('click', sync);
	document.addEventListener('keydown', sync);
}
