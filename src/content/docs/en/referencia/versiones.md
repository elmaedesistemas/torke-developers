---
title: Releases
description: What each TorkeKit release brings, for iOS and Android.
---

iOS and Android ship together, with the same number and the same results. Tags have no `v`.

## 0.2.0 · November 21, 2026

More measurements, run quality and suspension geometry.

- **Marks:** `elapsed(toDistance:)`, `speedKmh(atDistance:)`, `time(toKmh:)`, `time(fromKmh:toKmh:)`, `zeroTo60mph`, `thousandFeet`, `halfMile`. The analysis can read past the quarter mile (`stopDistance`).
- **Forces:** `launchG` and `peakG` in the result.
- **Rolling and braking:** `arm(mode:)` with `rolling` and `braking`, the `intervalFinished` event, `IntervalResult` and the `noInterval` failure.
- **Weather:** `Weather` with air density, density altitude and SAE J1349 correction; `RunResult.corrected(for:)`.
- **Power:** `PowerEstimate` with Hale's formula (trap speed and ET) and wheel power.
- **Quality:** `RunQuality` with a grade and the reasons.
- **Suspension:** `SuspensionSetup`, `SuspensionGeometry`, `TargetWindow`, `FourLinkHoles` and `SetupChange`.
- **Format:** `altitude` in the GPS; `interval`, `weather` and `suspension` in `TorkeRun`. All optional: the format stays at version 1.
- `PhoneSensorProvider` sends the GPS altitude.

## 0.1.0 · November 21, 2026

First open release.

- **Engine:** `AxisCalibration`, `SpeedFilter`, `RunAnalyzer`, `DemoRun`.
- **Session:** `RunSession` with `RunSnapshot`, `RunEvent` and `RunSessionOptions`. The launch is caught even when the acceleration ramps up over a few tenths; a bump while armed no longer disarms, creeping forward does.
- **Format:** `torke.run` (`TorkeRun`) with the reference file `demo-42.torkerun.json`.
- **Sources:** `RunDataProvider`, `RecordedRunProvider` and `SensorSample`; `PhoneSensorProvider` for iOS and Android.
