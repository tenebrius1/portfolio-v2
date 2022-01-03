---
categories: [flask]
coders: []
date: 2020-01-08
Image: {url: /images/projects/flack/flack.png, caption: Chat interface of flack}
screenshots: [/images/projects/flack/dashboard.jpg, /images/projects/flack/chat.jpg, /images/projects/flack/channels.jpg]
description: Flack is a online chat service, similar in spirit to Slack
github: [https://github.com/tenebrius1/flack]
title: Flack
site: https://cs50-project2flask.herokuapp.com/
tech:
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg, name: Python}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg, name: Flask}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg, name: Socket.IO}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg, name: Git}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg, name: Bulma}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg, name: Heroku}
library:
  js:
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js
    - js/uikit.js
  css: 
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css
    - css/uikit.css
---

## Context

Flack is one of the assignments given to learners of [CS50's Web Programming with Python and JavaScript](https://cs50.harvard.edu/summer/web/2019/projects/2/) in 2019. It was one of my earliest experiences with web development, which I think is pretty evident in the design of the app, as the logo and chat rooms are basically my best attempt at replicating Telegram.

## Main takeaways

1. Creating a chat app that uses web sockets ([Socket.IO](https://socket.io/)) to achieve real-time communication between server and client. Seperate chat rooms were achieved by using Socket.IO [rooms](https://socket.io/docs/v4/rooms/) function.
2. Trying out a different front-end framework ([Bulma](https://bulma.io/)) rather than just sticking with Bootstrap which I was familiar with. 
3. Hosting my first production server on Heroku which allows other people to use the app I created!