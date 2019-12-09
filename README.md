![Logo](https://github.com/tomanistor/osprey/blob/master/images/osprey-logo.png)

# Osprey
Osprey is a simple, clean, and fast one-page [Hugo](https://gohugo.io/) portfolio accompanied by a blog.

## Features
* Minimalist, clean, and uncluttered theme
* Portfolio display gallery
* [Disqus](https://disqus.com) comments
* [Formspree](https://formspree.io) AJAX contact form (with Formspree Gold)
* [Basin](https://usebasin.com/) AJAX contact form (free)
* Responsive Flexbox Grid
* [SASS](http://sass-lang.com/) styling
* Minimized/compressed CSS and JavaScript files with cachebusting hash setup
* Syntax highlighting with [Highlight.js](https://highlightjs.org/)
* SEO-friendly construction
* [Google Analytics](https://analytics.google.com) and [Google Tag Manager](https://tagmanager.google.com) integration
* [OpenGraph](http://ogp.me/) and [Twitter Cards](https://dev.twitter.com/cards/overview) integration
* Quick loading speeds
* Custom CSS option

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
$ git submodule update --init --recursive --remote
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
  email = ""
  googleTagManager = ""
  customCSS = false

  # Social media links in footer
  twitter = "TomaNistor"
  linkedin = "tomanistor"
  github = "tomanistor"
  facebook = ""

  # Copyright and theme author credit in footer
  copyright = false
  credit = false

  # Cache busting of static resources (additional set up required)
  cacheBustCSS = true
  cacheBustJS = true

  # Code highlighting with highlight.js
  highlightJS = true
  highlightJSStyle = "" # For custom highlight.js styles, add your /path/to/styles/default.css
  highlightJSScript = "" # For custom highlight.js languages config, add your /path/to/highlight.pack.js

  # Choose either Formspree contact form or Basin contact form
  ajaxFormspree = false
  ajaxFormspreeGold = false
  ajaxBasin = "https://usebasin.com/f/0eae7044d4c2"

  # Lazy loading with lazysizes
  lazyloading = true

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

### Contact Form
Two contact forms services are offered as options: Formspree and Basin.

#### Formspree
_Update 4/15/18 - [Formspree no longer offers newly set up AJAX contact forms for free. This is now a Formspree Gold feature.](https://github.com/formspree/formspree/pull/173)_ You can either use the non-AJAX version of Formspree (which redirects to a Captcha page on form submit) by setting the config.toml parameter `ajaxFormspreeGold` to `false`, sign up for Formspree Gold and set the parameter to `true`, or sign up for Basin and use their contact form service for free.

The email address specified in the config.toml file will be the one receiving messages sent through the contact form. The contact form is operated by Formspree and requires that the form must be submitted once initially to confirm the email address being used. See instruction [here](https://formspree.io/).

#### Basin
Basin is an alternative, free AJAX contact form service. To use Basin, [sign up for a free account](https://usebasin.com/users/sign_up) and create a form. Copy and paste your form's URL endpoint to the `ajaxBasin` config.toml parameter. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://github.com/tomanistor/osprey/blob/master/images/basin-ajax-setup.png)

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
As of `v2.1.0`, this theme uses native [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) for cache busting of assets. Generated assets will be served from the `resources` folder and will no longer require any additional setup with Gulp.

## Contributions
If you'd like to help with the development of this theme, I encourage you to submit a pull request or create an issue if you find a bug. All help is appreciated.

## License
This theme is released under the Apache 2.0 license. For more information read the [license](https://github.com/tomanistor/osprey/blob/master/LICENSE).
