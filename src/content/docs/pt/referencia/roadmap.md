---
title: Roadmap
description: 'O que o TorkeKit já traz e o que vem por aí: bracket racing e aprender com o acerto.'
---

## ✅ Fase 1 · O núcleo aberto (0.1)

Motor (calibração de eixos, filtro de velocidade, análise), `RunSession` com detecção de parado, largada e fim, o formato `torke.run` compartilhado, a arrancada simulada e os sensores do celular no iOS e no Android.

## ✅ Fase 2 · Mais medições e suspensão (0.2)

0 a 60 mph, 100 a 200 km/h, 1000 pés, meia milha e distâncias próprias; retomada e frenagem; g na largada; correção por clima; potência estimada; nota de qualidade por arrancada; geometria de 4-link, ladder bar e torque arm com furos e comparação de mudanças.

Ficou para depois: a migração do centro instantâneo com o curso da suspensão, e aprender o efeito do acerto com as arrancadas de muitos carros.

## ✅ Fase 3 · Validação e o GPS do celular (0.3)

`torke-validate` para comparar com tickets de pista (biblioteca e comando), a taxa real do GPS ao vivo, rastreamento GNSS completo com satélites e sinal no Android, e o barômetro para a pressão da estação.

O TorkeKit fica só com o celular: sem receptores externos nem outro hardware.

## ✅ Fase 4 · Ferramentas de pista (0.4)

Árvore Pro e Sportsman com tempo de reação e queima de largada, cronômetro de voltas com setores e delta ao vivo, e geocercas para pistas e eventos.

## O que vem

- **Bracket racing:** dial-in, *breakout* e quem ganha numa bateria.
- **Aprender com o acerto:** o efeito da suspensão nos 60 pés com as arrancadas de muitos carros.

## Fora do SDK

A verificação do ranking e o antifraude ficam no servidor de cada produto.

Quer propor algo? Abra uma issue em [torke-kit-ios](https://github.com/elmaedesistemas/torke-kit-ios/issues) ou [torke-kit-android](https://github.com/elmaedesistemas/torke-kit-android/issues).
