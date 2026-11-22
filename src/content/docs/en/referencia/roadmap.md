---
title: Roadmap
description: 'What TorkeKit already has and what comes next: bracket racing and learning from the setup.'
---

## ✅ Phase 1 · The open core (0.1)

Engine (axis calibration, speed filter, analysis), `RunSession` with still, launch and finish detection, the shared `torke.run` format, the simulated run and the phone's sensors on iOS and Android.

## ✅ Phase 2 · More measurements and suspension (0.2)

0–60 mph, 100–200 km/h, 1000 ft, half mile and custom distances; rolling and braking; launch g; weather correction; estimated power; a quality grade per run; 4-link, ladder bar and torque arm geometry with holes and change comparison.

Left for later: instant center migration through suspension travel, and learning the setup's effect from many cars' runs.

## ✅ Phase 3 · Validation and the phone's GPS (0.3)

`torke-validate` to compare with dragstrip timeslips (library and command), the GPS's real rate live, full GNSS tracking with satellites and signal on Android, and the barometer for the station pressure.

TorkeKit stays phone-only: no external receivers or other hardware.

## ✅ Phase 4 · Track tools (0.4)

Pro and Sportsman Christmas tree with reaction time and red light, a lap timer with sectors and live delta, and geofences for tracks and events.

## What's next

- **Bracket racing:** dial-in, breakout and who wins a pair.
- **Learning from the setup:** the suspension's effect on the 60 ft from many cars' runs.

## Outside the SDK

Leaderboard verification and anti-cheat stay on each product's server.

Want to propose something? Open an issue in [torke-kit-ios](https://github.com/elmaedesistemas/torke-kit-ios/issues) or [torke-kit-android](https://github.com/elmaedesistemas/torke-kit-android/issues).
