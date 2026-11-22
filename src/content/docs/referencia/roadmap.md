---
title: Roadmap
description: 'Lo que ya trae TorkeKit y lo que viene: arbolito, cronómetro de vueltas y geocercas.'
---

## ✅ Fase 1 · El núcleo abierto (0.1)

Motor (calibración de ejes, filtro de velocidad, análisis), `RunSession` con detección de quieto, arranque y fin, el formato `torke.run` compartido, la corrida simulada y los sensores del teléfono en iOS y Android.

## ✅ Fase 2 · Más mediciones y suspensión (0.2)

0 a 60 mph, 100 a 200 km/h, 1000 pies, media milla y distancias propias; rodando y frenado; g en la salida; corrección por clima; potencia estimada; nota de calidad por corrida; geometría de 4-link, ladder bar y torque arm con hoyos y comparación de cambios.

Quedó para después: la migración del centro instantáneo con el recorrido de la suspensión, y aprender el efecto del setup con las corridas de muchos carros.

## ✅ Fase 3 · Validación y el GPS del teléfono (0.3)

`torke-validate` para comparar con boletas de pista (biblioteca y comando), la tasa real del GPS en vivo, seguimiento GNSS completo con satélites y señal en Android, y el barómetro para la presión de la estación.

TorkeKit se queda solo con el teléfono: sin receptores externos ni otro hardware.

## Fase 4 · Herramientas de pista

- **Arbolito:** Pro (.400) y Sportsman (.500), tiempo de reacción y luz roja.
- **Cronómetro de vueltas** para circuitos: línea de meta, sectores y vuelta proyectada.
- **Geocercas** para pistas y eventos.

## Fuera del SDK

La verificación del ranking y el antitrampa se quedan en el servidor de cada producto.

¿Querés proponer algo? Abrí un issue en [torke-kit-ios](https://github.com/elmaedesistemas/torke-kit-ios/issues) o [torke-kit-android](https://github.com/elmaedesistemas/torke-kit-android/issues).
