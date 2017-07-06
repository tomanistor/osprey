![Logo](https://github.com/tomanistor/osprey/blob/master/images/osprey-logo.png)

# Osprey
Osprey is a simple, clean, and fast one-page [Hugo](https://gohugo.io/) portfolio accompanied by a blog.

## Features
* Minimalist, clean, and uncluttered theme
* Portfolio display gallery
* [Disqus](https://disqus.com) comments
* [Formspree](https://formspree.io) AJAX contact form
* Responsive Flexbox Grid
* [SASS](http://sass-lang.com/) styling
* Minimized/compressed CSS and JavaScript files with cachebusting hash setup
* Syntax highlighting with [Highlight.js](https://highlightjs.org/)
* SEO-friendly construction
* [Google Analytics](https://analytics.google.com) and [Google Tag Manager](https://tagmanager.google.com) integration
* [OpenGraph](http://ogp.me/) and [Twitter Cards](https://dev.twitter.com/cards/overview) integration
* Quick loading speeds
* Custom CSS

## Screenshot
![Screenshot](https://github.com/tomanistor/osprey/blob/master/images/tn.png)

## Installation

### Option 1: Clone Repository
In the root of your Hugo site directory run:

```console
$ cd themes
$ git clone https://github.com/tomanistor/osprey.git
```

### Option 2: Create Submodule
Create a submodule linked directly to the theme's GitHub repository in order to receive updates:

```console
$ git submodule add https://github.com/tomanistor/osprey.git themes/osprey
```

Then run:

```console
$ git submodule init
$ git submodule update
```

To update theme submodule, run:

```console
$ git submodule foreach git pull
```

## Configuration
Osprey comes with several configuration options to aid in site customization. This is an example config.toml file:

```toml
title = "Osprey Example Site"
baseURL = "https://tomanistor.com"
tags = ["portfolio", "web design", "blog"]
languageCode = "en-US"
config = "config.toml"
theme = "osprey"
canonifyURLS = true
googleAnalytics = ""
disqusShortname = "tomanistor"
disableKinds = ["taxonomy", "taxonomyTerm"] # This theme does not currently use "tag" and "category" taxonomies

[Params]
    tagline = "Osprey Example Site"
    author = "Toma Nistor"
    description = "Full-stack web developer and UI/UX enthusiast based in San Diego, CA."
    logoBig = "/images/osprey-logo.png"
    logoSmall = "/images/osprey-logo.png"
    favicon = "favicon.ico"
    opengraphImage = "/images/osprey.png"
    twitter = "TomaNistor"
    linkedin = "tomanistor"
    github = "tomanistor"
    email = ""
    googleTagManager = ""
    highlightJS = true
    copyright = true
    credit = true
    customCSS = false
    cacheBustCSS = false
    cacheBustJS = false
    ajaxFormspree = true

[permalinks]
    gallery = "/" # Redirect gallery index to home page

[[menu.main]]
    name = "About"
    url  = "/#about"
    weight = 1
[[menu.main]]
    name = "Work"
    url  = "/#work"
    weight = 2
[[menu.main]]
    name = "Blog"
    url  = "/#blog"
    weight = 3
[[menu.main]]
    name = "Contact"
    url  = "/#contact"
    weight = 4
```

## Using Osprey
The two main content types are blog posts and gallery images.

### About Section
To create an about section that renders on the home page, run:

```console
$ hugo new about.md
```

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

### Custom CSS
To implement custom CSS sitewide, change the config.toml parameter `customCSS` from `false` to `true` and then create a `css.html` file in your `layouts/partials/` folder like the example below:

```html
<style>
  <!-- This will remove the shadow on the navbar -->
  nav {
    box-shadow: none;
  }
</style>
```

This will render inline CSS in the head of your site and without adding an extra HTTP request.

### Cache Busting
To implement cache busting of CSS and JS static assets with something like Gulp.js and [gulp-hash](https://www.npmjs.com/package/gulp-hash), change the config.toml parameters `cacheBustCSS` and `cacheBustJS` from `false` to `true` and follow [this setup guide](http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/#building-a-gulp-pipeline:c9938300a3bdba2018b469c2485ca2b6).

## Contributions
If you'd like to help with the development of this theme, I encourage you to submit a pull request or create an issue if you find a bug. All help is appreciated.

## License
This theme is released under the GNU 3.0 license. For more information read the [license](https://github.com/tomanistor/osprey/blob/master/LICENSE.md).
