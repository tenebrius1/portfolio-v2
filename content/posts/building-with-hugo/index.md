---
description: How to build a portfolio with Hugo
title: Building a website with Hugo
date: 2021-07-08
draft: false
tags: ["web development", "hugo", "jamstack"]
categories: ["Web Dev"]
linkToMarkdown: true
resources:
- name: "featured-image"
  src: "featured-image.webp"
- name: "featured-image-preview"
  src: "featured-image-preview.webp"
---

<!--more-->

## Hello :grinning:

Welcome to my first blog! This will primarily be a space for me to write down random thoughts, or a mini-tutorial on a particular topic I am having trouble with.

The first topic will be my challenges with creating my own website using Hugo. Don't get me wrong, Hugo is a great and fairly easy way to create a website once you get used to the syntax and how the files are built on top of each other. However, having never used Golang and having no idea what Go Templating syntax is all about, I was pretty clueless when I first looked at the files provided by the themes. I was also quite confused by the way content was generated in Hugo, as there was no "views.py" or any server-side code to tell you what files were used to render a particular URL. So I have written this post in the hope that I can provide some insight into how Hugo works to save you some problems when you start using it.

## Why Hugo?

Before I learned about Static Site Generators (SSGs) like Hugo and Gatsby.js, I built [some websites](/projects) using Python with Flask/Django, which creates more dynamic websites. Eager to build my own online portfolio, I tried several times to build a simple website using these frameworks, but always found it tedious to write HTML, CSS, and javascript codes from scratch just for a simple site. Also, I quickly realized that I was hardly using any of the features that such a framework offers and had to keep relying on CSS and javascript libraries like Bootstrap and Foundation just to have a decent looking website. Just a waste of bandwidth and power.

I came across Hugo by accident when I saw a [YouTube video](https://www.youtube.com/watch?v=927wgzzNMEA) introducing Hugo and started reading more about it. Some features that caught my eye while browsing the [documentation](https://gohugo.io/documentation/) are:

* Hugo has an extensive [themes](https://themes.gohugo.io/) library that gives me a blank canvas that is flexible and easy to configure, and more importantly, it looks beautiful right off the bat!
* Instead of fiddling around with the usual HTML, CSS and javascript, pages in Hugo are largely written in Markdown, which has a much simpler and more elegant syntax than a whole bunch of HTML tags.
* Minimal dependencies
* Static web pages - Blazing fast through pre-rendered pages!
* Secure - You can not hack into a database if you do not have a database.

I decided Hugo was the perfect choice for me because I did not need database support and I had very limited requirements for an online portfolio.

## Install Hugo

To install hugo on Windows, from your terminal run

```shell
scoop install hugo
```

If the `scoop` command does not exist on your machine, check the installation process at [scoop.sh](https://scoop.sh/).

For macOS and Linux, check the [official installation guide](https://gohugo.io/getting-started/installing/) on Hugo's website.

## Create a Hugo site

After installing Hugo, you can create a site by running

```shell
hugo new site <sitename>
```

Do note that this will create a new `<sitename>` folder where you run it.

{{< image src="/images/blogs/hugo/hugo-init.png" caption="Output Screenshot" alt="output">}}

## Choose a theme

Head to <https://themes.gohugo.io/> to see a complete list of themes available on Hugo. If you like the way this website looks, check out [FeelIt](https://github.com/khusika/FeelIt) and !

If you do have some web development knowledge and would like to be able to tweak the theme yourself in the future, I would recommend you to download the zip file and unzip it into your themes folder instead of using the `git submodule` or `git clone` command. This will ensure that you have a single repository for both your content and theme which simplifies your version control and deployment process.

{{< admonition note "Note" >}}
If you do choose to use `git submodule` or `git clone` and you use VSCode, you will notice that there are 2 active repository that are connected to your `Source Control` tab. This makes it difficult to tweak the HTML/JS/CSS codes in the themes folder since your changes does not get uploaded into your own repository. However, the benefit of doing a `git submodule` is that you can easily update your theme to the latest version by running `git submodule update --rebase --remote`. This is great for users who do not wish to tweak the themes files themselves.
{{< /admonition >}}

If the specific theme that you are interested in does not have a live demo page for you to see, after you have unzipped the theme into the `themes` folder, run the commands

```shell
cd themes/exampleSite
hugo server --themesDir ../..
```

The above commands will run a development server which you can access by going to `http://localhost:1313/` on a browser. This is a sample site that the authors of the theme has developed for you to visualize how your website will look like.

If you want to customize the theme on your own, I would highly recommend you to go through the [Functions](https://gohugo.io/functions/) and [Variables](https://gohugo.io/variables/) section of Hugo's Documentation. This will give you an overview of what those template tags encased in `{{ }}` mean so you know what to use to extend the theme. Additionally, you can also take a more in-depth look at [Go's templating language](https://pkg.go.dev/text/template) for an even more comprehensive look of how the templates are used. Personally, I find that looking through Hugo's documentation and also digging through and understanding how your theme of choice utilizes the different templating features is generally more than enough to let you extend the theme.

## Configuration

When you first created your hugo site you may have noticed that a file named `config.toml` has been automatically generated alongside other template folders. This is the Hugo configuration file which tells Hugo some details of the configuration without you having to hardcode information in the theme.

Most themes do come with their own documentation of what can be configured. For reference this is the [documentation](https://github.com/luizdepra/hugo-coder/wiki/Configurations#menu-items-configurations) for Hugo Coder theme. Feel free to customize this to suit your own preference!

My personal `config.toml`:

```toml
baseURL = "https://yiguan.me/"
defaultContentLanguage = "en"
languageCode = "en"
title = "Yi Guan"
theme = "FeelIt"
canonifyURLs = true
enableRobotsTXT = true
enableEmoji = true
googleAnalytics = ""

[params]
  version = "1.0.X"
  description = "Yi Guan is a second year Computer Science undergraduate at the National University of Singapore (NUS). Click here to view his profile!"
  keywords = ["blog","developer","personal","portfolio","yiguan","hugo"]
  defaultTheme = "auto"
  dateFormat = "Jan 2, 2006"
  SourceMap = true

  [params.pwa]
    enable = false

  [params.search]
    enable = true
    type = "algolia"
    contentLength = 4000
    placeholder = ""
    maxResultLength = 10
    snippetLength = 30
    highlightTag = "em"
    [params.search.algolia]
      index = "index.en"
      appID = ""
      searchKey= ""

  [params.header]
    desktopMode = "auto"
    mobileMode = "auto"

  [params.footer]
    enable = true
    hugo = true
    copyright = true
    author = true
    since = 2021

  [params.section]
    paginate = 20
    dateFormat = "Jan 02"

  [params.list]
    paginate = 20
    dateFormat = "Jan 02"

  [params.home]
    [params.home.profile]
      enable = true
      avatarURL = "https://res.cloudinary.com/dgfzlpuds/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1627452521/portfolio_a7hatg.jpg"
      title = "Hello, welcome to my site! 👋🏼"
      social = true
    [params.home.posts]
      enable = true
      paginate = 6
      imagePreview = true

  [params.social]
    GitHub = "XXXX"
    Linkedin = "XXXX"
    Email = "XXXX"
    Telegram = "XXXX"
    codersrank = "XXXX"

  [params.cdn]
    data = "jsdelivr.yml"

  [params.page]
    linkToMarkdown = true
    [params.page.share]
      enable = true
      Twitter = true
      Facebook = true
      Linkedin = true
    [params.page.comment]
      enable = true
      [params.page.comment.valine]
        enable = true
        appId = ""
        appKey = ""
        placeholder = "Comment annonymously without filling up any personal information!"
        avatar = "robohash"
        pageSize = 10
        lang = "en"
        visitor = true
        recordIP = true
        highlight = true
        enableQQ = false

[menu]
  [[menu.main]]
      identifier = "about"
      name = "About me"
      url = "/about/"
      title = "About me"
      weight = 1
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/posts/"
    title = "View my blogs"
    weight = 2
  [[menu.main]]
    identifier = "projects"
    name = "Projects"
    url = "/projects/"
    title = "View my projects"
    weight = 3
  [[menu.main]]
    identifier = "contact"
    name = "Contact"
    url = "/contact/"
    title = "Contact me!"
    weight = 4

[markup]
  [markup.highlight]
    noClasses = false
    codeFences = true
    guessSyntax = true
    lineNos = true
    lineNumbersInTable = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 6

[outputs]
  home = ["HTML", "RSS", "JSON"]

[mediaTypes]
  [mediaTypes."text/plain"]
    suffixes = ["md"]

[outputFormats.MarkDown]
  mediaType = "text/plain"
  isPlainText = true
  isHTML = false

[author]
  name = "Yi Guan"
  email = "tanyg1@outlook.sg"
  link = "https://yiguan.me"

[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5

[minify]
  [minify.tdewolff]
    [minify.tdewolff.html]
      keepWhitespace = false

```

Breaking down the `config.toml` file further:

* The `baseURL` should be filled with the URL your website is hosted on. This serve as the root URL for your website.
* `languageCode` tells Hugo what to include in the `Content-Language` meta tag when it generates the HTML files. This is useful since hugo supports il8n by default which is used for creating multi-lingual sites.
* `title` will affect what is displayed in tabs of your browser.
* `theme` should be filled with the theme that you are using so Hugo can automatically render your website with the theme configured.
* Hugo also supports syntax highlighting by default  but what syntax highlighter are enabled depends on what theme you use. For FeelIt, the [`chrome`](https://github.com/alecthomas/chroma) syntax highlighter is used. Chroma supports a variety of styles to be used which can be viewed on [their GitHub page](https://github.com/alecthomas/chroma).
* the `params` section defined in the `config.toml` file can be accessed in any of the HTML files using .Site.Params.<param_name>
* Arguably the most important part of the `config.toml` file is your `menu.main` section. This is where you will include what nav-links are available and also where to load the contents from. For each nav-link you want, `name` is what will be shown to the user, `weight` tells Hugo where to place it in the navbar - i.e weight of 1 will always come first. `url` serves 2 purpose:
  * Firstly it tells Hugo the path at which the content is coming from. For example, I have configured the content of my blog posts to come from the `/posts` folder inside the `content` folder. This means that any new blog post I want to create, I will have to create it under `/posts` for it to appear in the blogs page.
  * Secondly, it is the URL that is used for your website. For example, when people click on the `blogs` nav-link they will be brought to `<base_website>/posts`.
* For all the available configurations available visit the [configuration](https://gohugo.io/getting-started/configuration/) page on Hugo websuite and for more specific configuration for the FeelIt theme, visit [their GitHub page](https://github.com/khusika/FeelIt).

## Running the development server

Before you run your development server, do note that some themes would require you to have some files such as `about.md` already written in the `content` folder before there are any visible content on your page. If this is the case you can copy the relevant files in `themes/<themename>/exampleSite/content` into the `content` folder of your site.

Ensure that you have `cd` back into your site folder before running

```shell
hugo server -D
```

{{< image src="/images/blogs/hugo/hugo-serve.png" caption="Output Screenshot" alt="output">}}

If you are wondering what the -D flag does, it basically tells Hugo that you want to include contents that are marked as drafts, which from my experience many of the themes enable by default.

Open `http://localhost:1313` in your browser, and you should be able to see the site live! By default, the Hugo server will watch for any changes you make and automatically rebuild the site everytime you press save. It will then live reload on any opened browser which you can then see your updates live.

If something is not looking like you want, you can open the `themes/<themename>/layouts` folder and tweak it. The templating language used by Hugo is the Go templating syntax which you can learn more of [here](https://gohugo.io/templates/introduction/). Additionally, some themes allow you to link custom CSS and JS files in your `config.toml` for more customizations.

## Deploying to Netlify

1. Create a GitHub repository to host the site.
2. In your site folder, run `git init` to initialize a git repository for your project.
3. Set up a remote by running `git remote add <remote_name> <github_repo_url>`.
4. Verify that you have set your remote correctly by running `git remote -v`.
5. Next, head to [Netlify](https://www.netlify.com/) and sign up/login with your GitHub account.
6. After the onboarding process (if you are a new user), from the Netlify dashboard, press the "New site from Git" button.
7. Select GitHub and authorize Netlify to access your repository.
8. Netlify automatically identifies it as a Hugo repo and will proceed to enter the build command automatically.
9. A random `.netlify.com` subdomain will be attached to the site with HTTPS automatically enabled (Netlify is secured with Lets Encrypt CA).
10. If you would like to learn more about Netlify, you can read [this blog](https://flaviocopes.com/netlify/).
