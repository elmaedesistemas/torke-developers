---
title: Versões
description: O que cada versão do TorkeKit traz, para iOS e Android.
---

iOS e Android saem juntos, com o mesmo número e os mesmos resultados. As tags não levam `v`.

## 0.2.0 · 21 de novembro de 2026

Mais medições, qualidade da arrancada e geometria de suspensão.

- **Marcas:** `elapsed(toDistance:)`, `speedKmh(atDistance:)`, `time(toKmh:)`, `time(fromKmh:toKmh:)`, `zeroTo60mph`, `thousandFeet`, `halfMile`. A análise pode ler além do quarto de milha (`stopDistance`).
- **Forças:** `launchG` e `peakG` no resultado.
- **Retomada e frenagem:** `arm(mode:)` com `rolling` e `braking`, o evento `intervalFinished`, `IntervalResult` e o erro `noInterval`.
- **Clima:** `Weather` com densidade do ar, altitude de densidade e correção SAE J1349; `RunResult.corrected(for:)`.
- **Potência:** `PowerEstimate` com a fórmula de Hale (velocidade final e tempo) e potência nas rodas.
- **Qualidade:** `RunQuality` com nota e motivos.
- **Suspensão:** `SuspensionSetup`, `SuspensionGeometry`, `TargetWindow`, `FourLinkHoles` e `SetupChange`.
- **Formato:** `altitude` no GPS; `interval`, `weather` e `suspension` no `TorkeRun`. Todos opcionais: o formato continua na versão 1.
- `PhoneSensorProvider` envia a altitude do GPS.

## 0.1.0 · 21 de novembro de 2026

Primeira versão aberta.

- **Motor:** `AxisCalibration`, `SpeedFilter`, `RunAnalyzer`, `DemoRun`.
- **Sessão:** `RunSession` com `RunSnapshot`, `RunEvent` e `RunSessionOptions`. A largada é detectada mesmo quando a aceleração sobe em alguns décimos; uma batida com o carro armado não desarma mais, andar devagar sim.
- **Formato:** `torke.run` (`TorkeRun`) com o arquivo de referência `demo-42.torkerun.json`.
- **Fontes:** `RunDataProvider`, `RecordedRunProvider` e `SensorSample`; `PhoneSensorProvider` para iOS e Android.
