---
categories: [telebot]
coders: [tenebrius1, kleonang, zihaooo9]
date: 2022-01-08
Image: {url: /images/projects/venues/venues.png, caption: Logo of veNUeS}
screenshots: [/images/projects/venues/venues_1.jpg, /images/projects/venues/venues_2.jpg, /images/projects/venues/venues_3.jpg]
description: veNUeS is a Telegram Bot that helps NUS students find empty tutorial/seminar rooms to study in.
github: [https://github.com/NUS-veNUeS/veNUeS]
title: veNUeS
site: https://t.me/NUS_veNUeSBot
tech:
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg, name: Python}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg, name: Firebase}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg, name: Heroku}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg, name: Git}
library:
  js:
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js
    - js/uikit.js
  css: 
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css
    - css/uikit.css
---

## What is veNUeS?

veNUeS is a Telegram Bot that helps NUS students find empty tutorial/seminar rooms to study in. It was a project made for Hack&Roll 2022 which won the **Top 8 Teams** prize! 

## My Contributions

I handled most of the time related functions such as making sure the correct timezone was used, rounding up or down to the nearest 30 mins depending on the current time as well as formatting the time to a more user friendly format. I also set up the hosting of the bot on Heroku using webhooks instead of long polling to reduce the number of requests sent to the server. 

## Main takeaways

1. Finally learning the Telegram Bot API which I wanted to learn for a long time!
2. Having a feasible (being able to complete in the timeframe) and executable (having at least the basic knowledge) idea for the hackathon helps a lot. Basically don't be too ambitious... 
3. It is probably a good idea to have a development database to use instead of using Firestore immediately if you have lots of data points updated per refresh (we manage to exceed the free tier and had to switch databases halfway through 🤡). 