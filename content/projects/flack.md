---
categories: [flask]
coders: []
date: 2020-01-08
description: Flack is a online messaging service, similar in spirit to Slack
github: [https://github.com/tenebrius1/flack]
title: Flack
site: https://cs50-project2flask.herokuapp.com/
tech:
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg, name: Python, url: https://www.python.org/}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg, name: Flask, url: https://flask.palletsprojects.com/en/2.0.x/}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg, name: Socket.IO, url: https://socket.io/}
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

I remember being really frustrated because I could not understand how Socket. IO worked, since it was a pretty advanced concept (for beginners) of real-time communication between server and client, which were words I did not even fully understand at the time. I was probably stuck on this project for a good week before I realized that there were the [rooms](https://socket.io/docs/v4/rooms/) that needed to be created for each chatroom in order for SocketIO to work properly.

Nonetheless, it was a fun project when I finally got it working after days of reading documentation and stackoverflow articles and just having fun playing around with my new webapp. For those of you who want to have a temporary chat with someone, it actually works quite well as all the data is only stored in session memory and the chat recordings are likely gone the next time you visit the app (although I would not recommend talking about any secrets).
