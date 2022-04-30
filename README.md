<a href="https://git.io/osprey-delight" target="_blank">
    <img alt="Osprey Delight Logo" src="https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/osprey-delight-logo.png" width="250">
</a>
<a href="https://kdevo.netlify.app/" target="_blank">
    <img align="right" alt="Nelify Continous Deployment Status" src="https://api.netlify.com/api/v1/badges/aff9a674-45e1-4437-89f7-2aabb281780f/deploy-status">
</a>

---
[![GitHub Release](https://img.shields.io/github/v/release/kdevo/osprey-delight?style=flat-square&color=%230097a7&logo=github)](https://github.com/kdevo/osprey-delight/releases/latest)
[![Discussions](https://img.shields.io/badge/GitHub-Discussions-%230097a7?logo=github&style=flat-square)](https://github.com/kdevo/osprey-delight/discussions)
[![Hugo Minimum Version](https://img.shields.io/badge/hugo-%3E=v0.83-%230097a7?logo=hugo&style=flat-square)](https://github.com/gohugoio/hugo/releases)
[![Built with hugo-mods](https://img.shields.io/static/v1?label=%E2%9D%A4&message=hugo-mods&color=0097a7&style=flat-square)](https://github.com/hugo-mods)

## Overview

Osprey Delight is the free-minded artist's choice for a clutter-free and blazingly fast single-page portfolio. 

It's perfectly suited to show off your awesome work!

> It tastes a bit different than [the great Osprey theme](https://github.com/tomanistor/osprey) and adds awesome modular functionality to your **delight**.

### Showcase

Check out how Osprey Delight performs in the real-world:

- [Hugo Mods](https://hugo-mods.github.io/) - This theme is built around the Hugo Mods presented on the site. This site also has the [complete source code available](https://github.com/hugo-mods/hugo-mods.github.io).
- [Protonaut Music](https://protonautmusic.com/) - Musician and top contributor whose highly recognizable site got kickstarted by the theme.
- [KDEVO](https://kdevo.github.io/) - It wouldn't be me if I would not run this theme personally to ensure that everything runs smoothly.

### Features

- Modular and made out of extensible section building blocks:
  - About: Introduce yourself
  - Gallery: Show your work using a grid-based gallery with interactive modal boxes
  - Blog: Lightweight blog features
  - Contact: Contact form with Basin support and built-in spambot protection
- Use your high-quality images [assets](https://gohugo.io/categories/asset-management):
    - Lazy image loading plus completely automatic resizing using [lazyimg](https://github.com/hugo-mods/lazyimg) module
    - Blur-up technique using automatic low-quality image placeholders (LQIP)
    - Modern WebP support with fallback for older browsers
- SEO:
  - [Score 100 at PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io%2F). Every bit is fine-tuned with performance in mind! 
  - Auto-generated structured ensures that everyone finds you
- Delightful UX:
    - Choose between different themes
    - Awesome social icons in footer via [icons module](https://github.com/hugo-mods/icons)
    - Smooth scrolling plus scroll-spy
    - Automatically fetches GitHub repo data
    - Sane fallbacks for No-Script/No-JS users
- Heavily [customizable](#customize-it) - no need to maintain a fork!

In general, many [open issues](https://github.com/tomanistor/osprey/issues) of the original theme have been resolved and code has been rewritten.

### Contribute and show your support

There are multiple ways to show your support if you like this project:

- ❤️ [Become a sponsor](https://github.com/sponsors/kdevo)
- ⭐ Give the project a star to ensure everyone finds it
- Start [contributing](https://github.com/kdevo/osprey-delight/blob/master/CONTRIBUTING.md)

## Quickstart

> Please make sure to have [Hugo's extended version](https://github.com/gohugoio/hugo/releases) and [Go](https://go.dev/) installed.
> If you're new to Hugo, [visit the docs](https://gohugo.io/getting-started/quick-start/) for more info and general site setup.

Initialize your repo as a module (replace `<username>` and `<projectname>`):

```sh
hugo mod init github.com/<username>/<projectname>
```

Download the [documented config file](https://github.com/kdevo/osprey-delight/blob/master/exampleSite/config.yaml), e.g. via curl:

```sh
curl https://raw.githubusercontent.com/kdevo/osprey-delight/master/exampleSite/config.yaml -O
```

Continue reading for [configuration options](#config).

### Upgrade

Receive the latest features of the theme:

```
hugo mod get -u
```

> It is good practice to [check the release notes](https://github.com/kdevo/osprey-delight/releases) before upgrading (especially before using new major versions).

## Configuration and Usage <a href="config"></a>

It's best if you simply check out the fully commented [config file](https://github.com/kdevo/osprey-delight/blob/master/exampleSite/config.yaml).
This theme follows a learning-by-doing approach.

### Images 

This theme is asset-driven! It "knows" how to handle your precious assets, and there usually is no need for manual resizing.
For that to work, provide all of the following images in the [`assets` directory](https://gohugo.io/hugo-pipes/introduction/#asset-directory) (do not use the `static` directory).

The following table shows recommendations regarding the required assets:

Image Type          | Config Key                        | Minimum Width          | Note
--------------------|---------------------------------- |------------------------|---------------------------------------------------
Logo                | `logoBig` (config.yaml)           | 200px                  | Transparent, minimum margin top/bottom
Navbar-Logo         | `logoSmall` (config.yaml)         | 96px                   | Transparent, small margin top/bottom, prefer square format
Gallery             | `image` (content/gallery/*)       | 400px                  | Transparent, medium margin top/bottom/left/right, prefer square or landscape format
Background          | `background` (config.yaml)        | 1920px                 | Optional, use a high-quality JPG

### Content files

#### About section

To create an about section that renders on the home page, run:

```console
hugo new about.md
```

#### Gallery item

To create a new gallery item, run:

```console
hugo new gallery/my-item.md
```

You will get a fully documented file, which describes each config option separately.

### Contact form

Basin is a free AJAX contact form service that is used by this theme. 

To set it up: 
1. [Sign up for a free account](https://usebasin.com/users/sign_up) and create a form. 
2. Copy and paste your form's URL endpoint to the `ajaxBasin` config.yaml parameter. 
3. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-ajax-setup.png)

#### Enable spambot protection

Under "Setup" → "Set a Custom Honeypot Field", input `_anti_spam_honeypot`.
Basin will [ignore all messages that contain this specific field](https://usebasin.com/docs/features/spam-filtering). This should work since there is a hidden field that users normally do not use, but spambots will blindly input their data.

![Basin Anti Spambot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-custom-honeypot.png)

[Please do not make a tick in the "reCAPTCHA" checkbox](https://github.com/kdevo/osprey-delight/discussions/22), this service is not supported and also typically not necessary.

## Learn more

### Customize it <a href="customize-it"></a>

Want to have full control over appearance? Check out [how to customize the theme more granularly](https://github.com/kdevo/osprey-delight/blob/master/CUSTOMIZING.md).

### Need help?

This theme has a GitHub-powered [community forum](https://github.com/kdevo/osprey-delight/discussions)!
Feel free to ask questions in the [Q&A](https://github.com/kdevo/osprey-delight/discussions/categories/q-a) (please make sure to completely read the docs and existing discussions/questions).

### Help wanted

This README probably needs some documentation improvements for the latest features.
Any PR regarding this is welcome. Please also check out [how to contribute](https://github.com/kdevo/osprey-delight/blob/master/CONTRIBUTING.md)!
