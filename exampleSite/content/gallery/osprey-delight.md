---
date: "2017-05-18T21:57:17-07:00"
title: "Osprey Delight"
image: "osprey-delight.png"
color: "#b2ebf2"
type: "github"
github:
    repo: "kdevo/osprey"
    showInfo: true
terminal:
    lines:
    - type: input
      data: mkdir themes
      wait: 200
    - type: input
      data: cd themes
      wait: 200
    - type: input
      data: git clone https://github.com/kdevo/osprey-delight.git
      wait: 300
    - type: progress
      data: 100
      wait: 1000
    - data: ☕ Done! Have fun using Osprey Delight!
      wait: 900
    - type: input
      data: exit
      wait: 500
---

{{! github-description !}}

> It tastes a bit different than the original (hence the *light* in the name) but also adds some new functionality to your ***delight***.