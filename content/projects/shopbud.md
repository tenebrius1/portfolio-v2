---
categories: [django]
coders: [tenebrius1, zihaooo9]
Image: {url: /images/projects/shopbud/shopbud.png, caption: Dashboard of ShopBud}
screenshots: [/images/projects/shopbud/dashboard.png, https://res.cloudinary.com/dgfzlpuds/image/upload/v1627458965/screenshots/expense_tracker_xl8myz.png, https://res.cloudinary.com/dgfzlpuds/image/upload/v1625210951/screenshots/owner_view_ozvzz3.png]
date: 2021-07-16
description: ShopBud is a web app that integrates multiple online shopping assistants/apps (tracking of order, expense tracking, etc.) into one unified web app so that it is a one stop experience for end users.
github: 
  - https://github.com/tenebrius1/shopbud
title: ShopBud
site: https://shopbud.herokuapp.com/
tech:
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg, name: Python}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg, name: Django}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg, name: PostgreSQL}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg, name: Git}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg, name: jQuery}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg, name: Bootstrap}
  - {logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg, name: Heroku}
  - {logo: /images/projects/shopbud/cloudinary.png, name: Cloudinary}
library:
  js:
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js
    - js/uikit.js
  css: 
    - https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css
    - css/uikit.css
---

[Orbital](https://orbital.comp.nus.edu.sg/) (Independent Software Development Project) is NUS School of Computing self-directed, independent work course. This programme gives students the opportunity to pick up software development skills on their own, using sources on the web.

## What is ShopBud?

ShopBud is a web app that integrates multiple online shopping assistants/apps (tracking of order, expense tracking, group buy) into one unified web app so that it is a one stop experience for end users.

## My Contributions

The bulk of my contributions goes towards the back-end work where I handled things such as the setting up of Heroku for deployment, handling communication of data from back-end to front-end, as well as assisting with some front-end work to make our app more intuitive.

## Main takeaways

1. Hosting PostgreSQL database on the cloud using Heroku Postgres.
2. Creating an onboarding experience using [intro.js](https://introjs.com/).
3. Streamlining registration/log in process by integrating social login using [django-allauth](https://django-allauth.readthedocs.io/en/latest/overview.html).
4. Documenting my work formally and learning Markdown and [AsciiDoc](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/) in the process.
5. Learning the basics of web scraping and tying out multiple tools such as [Selenium](https://www.selenium.dev/) using a headless chrome/firefox browser, [requests-html](https://docs.python-requests.org/projects/requests-html/en/latest/) library and also [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/). This was originally meant for a price tracker feature which we ultimately discontinued as e-commerce sites such as Amazon and Shopee actively blocks web scraping activities and we could not for the life of us figure out how to get past them ☹.