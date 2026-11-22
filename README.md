# Torke for Developers

Documentación de [TorkeKit](https://github.com/elmaedesistemas/torke-kit-ios) en developers.torke.today, hecha con [Starlight](https://starlight.astro.build) (Astro), igual que la de Kinesia.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sitio estático en dist/
```

- Las páginas están en `src/content/docs/` (español), `en/` (inglés) y `pt/` (portugués de Brasil), con las mismas rutas. El menú lateral y sus traducciones se definen en `astro.config.mjs`.
- Los componentes interactivos toman el idioma de la ruta (`src/components/i18n.ts`): un texto nuevo va en los tres idiomas.
- Los ejemplos van en pestañas `<Tabs syncKey="platform">` con las etiquetas `Swift` y `Kotlin`: la elección se recuerda en todo el sitio.
- Los componentes interactivos están en `src/components/`: fases de la sesión, calculadora de clima y laboratorio 4-link. Usan las mismas fórmulas que el SDK; si cambian en el SDK, cambialas acá.
- Los colores y la tipografía de marca están en `src/styles/torke.css`.
- Al publicar una versión nueva del SDK, actualizá `referencia/versiones.md` y la versión en `empezar/instalacion.mdx` en los tres idiomas, y los tiempos de la corrida demo si cambiaron.
