---
title: Roadmap
description: 'What TorkeKit already has and what comes next: external GPS, timeslip validation, the tree, a lap timer and geofences.'
---

## ✅ Phase 1 · The open core (0.1)

Engine (axis calibration, speed filter, analysis), `RunSession` with still, launch and finish detection, the shared `torke.run` format, the simulated run and the phone's sensors on iOS and Android.

## ✅ Phase 2 · More measurements and suspension (0.2)

0–60 mph, 100–200 km/h, 1000 ft, half mile and custom distances; rolling and braking; launch g; weather correction; estimated power; a quality grade per run; 4-link, ladder bar and torque arm geometry with holes and change comparison.

Left for later: instant center migration through suspension travel, and learning the setup's effect from many cars' runs.

## Phase 3 · External GPS and validation

- **External GPS over Bluetooth:** 10–25 Hz receivers for a more accurate quarter mile.
- **`torke-validate`:** compare the SDK's times with dragstrip timeslips or a reference GPS logger.

## Phase 4 · Track tools

- **The tree:** Pro (.400) and Sportsman (.500), reaction time and red light.
- **Lap timer** for road courses: start/finish line, sectors and predicted lap.
- **Geofences** for tracks and events.

## Outside the SDK

Leaderboard verification and anti-cheat stay on each product's server.

Want to propose something? Open an issue in [torke-kit-ios](https://github.com/elmaedesistemas/torke-kit-ios/issues) or [torke-kit-android](https://github.com/elmaedesistemas/torke-kit-android/issues).
