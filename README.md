# Outrun
Outrun is a simple, clean, and fast one-page [Hugo](https://gohugo.io/) portfolio accompanied by a blog.

## Features
* Minimalist, clean, and uncluttered theme
* Portfolio display gallery
* Contact form by [Formspree](https://formspree.com)
* Responsive Flexbox Grid
* Styling done in SCSS
* Minimized/compressed CSS and JavaScript files
* SEO-friendly
* Quick loading speeds

## Installation
In the root of your Hugo site directory run:

```console
$ git submodule add https://github.com/tomanistor/outrun.git themes/outrun
```

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
    description = "Full-stack web developer and UI/UX enthusiast based in San Diego, CA."
    logoBig = "/images/logo/Toma-Nistor-logo-big.png"
    logoSmall = "/images/logo/Toma-Nistor-logo-small.png"
    favicon = "favicon.ico"
    opengraphImage = "/images/logo/Toma-Nistor-banner.png"
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

## Using Outrun

### Blog Posts
To create a new blog post, run:

```console
$ hugo new blog/post-title.md
```
### Gallery Images
To add a new image to your portfolio, run:

```console
$ hugo new gallery/image-title.md
```

The gallery archetype comes with its own configuration. Here is an example:

```md
+++
date = "2017-05-10T21:35:17-07:00"
title = "Image Title"
image = "image-file.png"
alt = "This is a description of the image"
color = "#7ac143"
link1 = "https://tomanistor.com"
link2 = "https://github.com/tomanistor"
+++
```

## License
This theme is released under the GNU 3.0 license. For more information read the [license](https://github.com/tomanistor/outrun/LICENSE.md).
