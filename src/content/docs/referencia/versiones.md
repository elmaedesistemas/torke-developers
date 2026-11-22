---
title: Versiones
description: Qué trae cada versión de TorkeKit para iOS y Android.
---

iOS y Android salen juntos, con el mismo número y los mismos resultados. Las etiquetas no llevan `v`.

## 0.2.0 · 21 de noviembre de 2026

Más mediciones, calidad de la corrida y geometría de suspensión.

- **Marcas:** `elapsed(toDistance:)`, `speedKmh(atDistance:)`, `time(toKmh:)`, `time(fromKmh:toKmh:)`, `zeroTo60mph`, `thousandFeet`, `halfMile`. El análisis puede leer más allá del cuarto de milla (`stopDistance`).
- **Fuerzas:** `launchG` y `peakG` en el resultado.
- **Rodando y frenado:** `arm(mode:)` con `rolling` y `braking`, el evento `intervalFinished`, `IntervalResult` y el error `noInterval`.
- **Clima:** `Weather` con densidad del aire, altitud de densidad y corrección SAE J1349; `RunResult.corrected(for:)`.
- **Potencia:** `PowerEstimate` con la fórmula de Hale (trampa y tiempo) y potencia en las ruedas.
- **Calidad:** `RunQuality` con nota y motivos.
- **Suspensión:** `SuspensionSetup`, `SuspensionGeometry`, `TargetWindow`, `FourLinkHoles` y `SetupChange`.
- **Formato:** `altitude` en el GPS; `interval`, `weather` y `suspension` en `TorkeRun`. Todos opcionales: el formato sigue en la versión 1.
- `PhoneSensorProvider` manda la altitud del GPS.

## 0.1.0 · 21 de noviembre de 2026

Primera versión abierta.

- **Motor:** `AxisCalibration`, `SpeedFilter`, `RunAnalyzer`, `DemoRun`.
- **Sesión:** `RunSession` con `RunSnapshot`, `RunEvent` y `RunSessionOptions`. El arranque se detecta aunque la aceleración suba en unas décimas; un golpe con el carro armado ya no desarma, avanzar despacio sí.
- **Formato:** `torke.run` (`TorkeRun`) con el archivo de referencia `demo-42.torkerun.json`.
- **Fuentes:** `RunDataProvider`, `RecordedRunProvider` y `SensorSample`; `PhoneSensorProvider` para iOS y Android.
