# Outrun
Outrun is a simple, clean, and fast one page portfolio accompanied by a blog.

## Features
* Minimalist, clean, and uncluttered theme
* Portfolio display gallery
* Contact form by [Formspree](https://formspree.com)
* Responsive Flexbox Grid
* Styling done in SCSS
* Minimized/compressed CSS and JavaScript files
* SEO-friendly
* Fast loading

## Installation
In the root of your Hugo site directory run:

$ git submodule add https://github.com/tomanistor/outrun.git themes/outrun

## Configuration
Outrun comes with many configuration options to aid in site customization. This is an example config.toml file:

```toml
title = "Toma Nistor"
baseURL = "https://tomanistor.com"
tags = ["portfolio", "web design", "web developer", "ruby on rails", "javascript", "San Diego"]
languageCode = "en-US"
config = "config.toml"
theme = "outrun"
canonifyurls = true
googleAnalytics = ""

[Params]
    author = "Toma Nistor"
    description = "Full-stack web developer and UI/UX enthusiast based in San Diego, CA. I enjoy using multiple tools to engineer and build powerful websites and apps."
    logoBig = "/images/logo/Toma-Nistor-Logo-450px.png"
    logoSmall = "/images/logo/Toma-Nistor-Logo-150px.png"
    favicon = "favicon.ico"
    opengraphImage = "/images/logo/Toma-Nistor-Logo-Banner-Dark.png"
    twitter = "TomaNistor"
    linkedin = "tomanistor"
    github = "tomanistor"
    email = "toma@tomanistor.com"
    googleTagManger = ""
    highlightJS = true
    copyright = true
    credit = true

[[menu.main]]
    name = "Work"
    url  = "/#work"
    weight = 1
[[menu.main]]
    name = "Blog"
    url  = "/#blog"
    weight = 2
[[menu.main]]
    name = "Contact"
    url  = "/#contact"
    weight = 3
```

## License
This theme is released under the GNU 3.0 license. For more information read the [license](https://github.com/tomanistor/outrun/LICENSE.md).
