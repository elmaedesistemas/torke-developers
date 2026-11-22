---
title: Roadmap
description: 'O que o TorkeKit já traz e o que vem por aí: GPS externo, validação contra tickets, árvore, cronômetro de voltas e geocercas.'
---

## ✅ Fase 1 · O núcleo aberto (0.1)

Motor (calibração de eixos, filtro de velocidade, análise), `RunSession` com detecção de parado, largada e fim, o formato `torke.run` compartilhado, a arrancada simulada e os sensores do celular no iOS e no Android.

## ✅ Fase 2 · Mais medições e suspensão (0.2)

0 a 60 mph, 100 a 200 km/h, 1000 pés, meia milha e distâncias próprias; retomada e frenagem; g na largada; correção por clima; potência estimada; nota de qualidade por arrancada; geometria de 4-link, ladder bar e torque arm com furos e comparação de mudanças.

Ficou para depois: a migração do centro instantâneo com o curso da suspensão, e aprender o efeito do acerto com as arrancadas de muitos carros.

## Fase 3 · GPS externo e validação

- **GPS externo por Bluetooth:** receptores de 10 a 25 Hz para um quarto de milha mais preciso.
- **`torke-validate`:** comparar os tempos do SDK com tickets de pista ou com um registrador GPS de referência.

## Fase 4 · Ferramentas de pista

- **Árvore:** Pro (.400) e Sportsman (.500), tempo de reação e queima de largada.
- **Cronômetro de voltas** para circuitos: linha de chegada, setores e volta projetada.
- **Geocercas** para pistas e eventos.

## Fora do SDK

A verificação do ranking e o antifraude ficam no servidor de cada produto.

Quer propor algo? Abra uma issue em [torke-kit-ios](https://github.com/elmaedesistemas/torke-kit-ios/issues) ou [torke-kit-android](https://github.com/elmaedesistemas/torke-kit-android/issues).
