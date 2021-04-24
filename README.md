<a href="https://git.io/osprey-delight" target="_blank">
    <img alt="Osprey Delight Logo" src="https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/osprey-delight-logo.png" width="250">
</a>
<a href="https://kdevo.netlify.app/" target="_blank">
    <img align="right" alt="Nelify Continous Deployment Status" src="https://api.netlify.com/api/v1/badges/aff9a674-45e1-4437-89f7-2aabb281780f/deploy-status">
</a>

---
[![GitHub Release](https://img.shields.io/github/v/release/kdevo/osprey-delight?style=flat-square&color=%230097a7&logo=github)](https://github.com/kdevo/osprey-delight/releases/latest)
[![Hugo Minimum Version](https://img.shields.io/badge/hugo-%3E=v0.80-%230097a7?logo=hugo&style=flat-square)](https://github.com/gohugoio/hugo/releases)
[![Project Status](https://img.shields.io/website?label=kdevo&style=flat-square&up_color=%230097a7&url=https%3A%2F%2Fkdevo.github.io)](#keep-it-up)

## Overview

Osprey Delight is the free-minded artist's choice for a clutter-free and blazingly fast single-page portfolio. 

It's perfectly suited to show off your awesome work!

> It tastes a bit different than [the original great Osprey theme](https://github.com/tomanistor/osprey) and adds awesome new functionality to your **delight**.

### Showcase 

Check out how Osprey Delight performs in the real-world:

- [Protonaut Music](https://protonautmusic.com/) - Musician and top contributor whose highly individualized site got kickstarted by Osprey Delight.
- [KDEVO](https://kdevo.github.io/) - The maintainer's site. It wouldn't be me if I would not run this theme personally. It's basically in the vanilla version.

### Features

- Single page made out of extensible section building blocks
  - About: Introduce yourself
  - Gallery: Show your work using a grid-based gallery with interactive modal boxes
  - Blog: Lightweight blog features
  - Contact: Contact form with Basin support and built-in spambot protection
- Images are [asset-driven](https://gohugo.io/categories/asset-management). Use your high-quality images without the hassle of manually resizing them! 
    - Image lazy-loading via [lazySizes](https://github.com/aFarkas/lazysizes)
    - Blur-up technique using automatic low-quality image placeholders (LQIP)
- SEO-optimized
  - [Score 100 at PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io%2F). Every bit is fine-tuned for performance 
  - Auto-generated structured ensures that everyone finds you
- Delightful UX 
    - Smooth scrolling plus scroll-spy
    - Awesome social icons in footer
    - Automatically fetches GitHub repo data for you 
    - Sane fallbacks for No-Script/No-JS users
    - Intelli-404: Automatically searches for suitable matches - never loose the link to your content
- Heavily [customizable](#customize-it) - no need to maintain a fork!

In general, many [open issues](https://github.com/tomanistor/osprey/issues) of the original theme have been resolved.

### Contribute

There are multiple ways to show your support if you like this project:
- Start [contributing](https://github.com/kdevo/osprey-delight/blob/master/CONTRIBUTING.md)
- Become a sponsor or [donate anything to my non-profit organization](https://pyotek.dev/donate) via various options
- Push the [![GitHub stars](https://img.shields.io/github/stars/kdevo/osprey-delight?style=social)](https://github.com/kdevo/osprey-delight/stargazers) button - a small gesture with huge effect

## Quickstart


The recommended way to setup this theme is to use a git submodule so that further upgrades can be received without any hassle.
Invoke the following from your Hugo site directory:

```shell
git submodule add https://github.com/kdevo/osprey-delight.git themes/osprey-delight
```

Now, simply copy the [exampleSite](/exampleSite) directory's *content* to your project's root, it's a great starting point.

> [Visit the Hugo docs](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) for more info and general setup of a Hugo site.

### Upgrade

Receive the latest features of the theme by pulling the latest changes from `master`:

```
cd themes/osprey-delight
git pull
```

> It is good practice to [check the release notes](https://github.com/kdevo/osprey-delight/releases) before upgrading (especially before using new major versions).


## Configuration and Usage

It's best if you simply check out the fully commented [config file](/exampleSite/config.yaml).
This theme follows a learning-by-doing approach.

### Images 

This theme is asset-driven! It "knows" how to handle your precious assets, and there usually is no need for manual resizing.
Therefore, the recommended approach for images is to provide high-res images in the [`assets` directory](https://gohugo.io/hugo-pipes/introduction/#asset-directory).

The following table shows some guidelines regarding the assets:

Image Type          | Config Key                        | Minimum Width          | Note
--------------------|---------------------------------- |------------------------|---------------------------------------------------
Logo                | `logoBig` (config.yaml)           | 200px                  | Transparent, minimum margin top/bottom
Navbar-Logo         | `logoSmall` (config.yaml)         | 96px                   | Transparent, small margin top/bottom, prefer square format
Gallery             | `image` (content/gallery/*)       | 400px                  | Transparent, medium margin top/bottom/left/right, prefer square format
Background          | `background` (config.yaml)        | 1200px                 | Optional, use a high-quality JPG

### Content files

#### About section

To create an about section that renders on the home page, run:

```console
$ hugo new about.md
```

#### Gallery item

To create a new gallery item, run:

```console
$ hugo new gallery/item-name.md
```

This is very helpful for the first time since you will get a fully documented file.

> ⚠️ Please make sure that `item-name` is unique on the whole page because it will be used as an anchor/identifier!

### Contact form

Basin is a free AJAX contact form service that is used by this theme. To use set it up, [sign up for a free account](https://usebasin.com/users/sign_up) and create a form. Copy and paste your form's URL endpoint to the `ajaxBasin` config.yaml parameter. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-ajax-setup.png)

#### Spambot protection

Under Setup/"Set a Custom Honeypot Field", enter `_anti_spam_honeypot`.
Basin will [ignore all messages that contain this specific field](https://usebasin.com/docs/features/spam-filtering). This should work since there is a hidden field that users normally do not use, but spambots will blindly input their data.

![Basin Anti Spambot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-custom-honeypot.png)

## Next

### Help wanted

This README probably needs some documentation improvements for the latest features.
Any PR regarding this is welcome and please also check out [how to contribute](CONTRIBUTING.md)!

### Customize it

Want to have full control over appearance? Check out [how to customize the theme more granularly](https://github.com/kdevo/osprey-delight/blob/master/CUSTOMIZING.md).