<a href="https://git.io/osprey-delight" target="_blank">
    <img alt="Osprey Delight Logo" src="https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/osprey-delight-logo.png" width="250">
</a>

<a href="https://kdevo.netlify.app/" target="_blank">
    <img align="right" alt="Nelify Continous Deployment Status" src="https://api.netlify.com/api/v1/badges/aff9a674-45e1-4437-89f7-2aabb281780f/deploy-status">
</a>

---
[![GitHub Release](https://img.shields.io/github/v/release/kdevo/osprey-delight?style=flat-square&color=%230097a7&logo=github)](https://github.com/kdevo/osprey-delight/releases/latest)
[![Hugo Minimum Version](https://img.shields.io/badge/hugo-%3E=v0.65-%230097a7?logo=hugo&style=flat-square)](https://github.com/gohugoio/hugo/releases)
[![Project Status](https://img.shields.io/website?label=kdevo&style=flat-square&up_color=%230097a7&url=https%3A%2F%2Fkdevo.github.io)](#keep-it-up)

# Osprey Delight

Osprey **De**light is a sugar-free version of the [awesome Osprey theme](https://github.com/tomanistor/osprey) by [Toma Nistor](https://tomanistor.com/) for [Hugo](https://gohugo.io/), a fast static site generator.

It's a [blazingly fast](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io%2F) minimalistic single page portfolio perfectly suited to show off your awesome work! 

> 💡 The theme tastes a bit different than the original (hence the *light* in the name) but also adds great new functionality - hopefully to your ***delight***. Read more about the motivation and differences of the fork [here](./MOTIVATION.md), but also check out the feature summary below!

## Features

- Gallery items with different types 
    - `normal`: Just as you are used to with the original Osprey theme
    - `github`: Magic GitHub API integration
- Gallery images can optionally be normalized with Hugo's [amazing image processing](https://gohugo.io/content-management/image-processing/)
- Blazingly fast loading speeds
    - Minified JS/CSS/icon bundles using Hugo Pipes
    - Lazy-loading of images using lazysizes
- Contact form using Basin with Honeypot protection
- Fancy UX
    - Smooth scrolling plus scroll-spy
    - Nice CSS animations
    - Awesome icons in the footer
- Modular theme, enable features as you want
- Intelli-404: Automatically searches for suitable matches - never loose the link to your content
- SEO-optimized
  - High PageSpeed Insights score
  - Automatically generated structured data ensures that everyone finds you

In general, many [open issues](https://github.com/tomanistor/osprey/issues) of the original theme have been resolved.


## Keep it up 

There are multiple ways to show your support if you like this project:
- Start [contributing](#Contributing) if you are familiar with Hugo themes/templating
- [Donate anything to my non-profit organization](https://pyotek.dev/donate) via various options
- Push the ![GitHub stars](https://img.shields.io/github/stars/kdevo/osprey-delight?style=social) button - a small gesture with huge effect

## Screenshots

Osprey Delight works with gallery items which are organized in a Flexbox grid:

![Screenshot of gallery items](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/screenshot-work.png)


The items can be opened and a modal will show up:

![Screenshot of opened gallery item](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/screenshot-modal.png)


> If you've used the original Osprey theme before, this looks pretty familiar, right? 
> To taste the differences, it's best to simply try Osprey Delight out!

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

It's best if you simply check out the commented **[exampleSite/config.toml](/exampleSite/config.toml)**!
This theme follows a learning-by-doing approach.

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


### Custom (S)CSS

Place a file named `_custom.scss` in your local `assets/sass/` folder (create the directories). This will override the theme's (empty) `_custom.scss` which is loaded in the internal main SCSS.

#### Syntax Highlighting

Limiting external dependencies is important when it comes to privacy as well as performance, therefore only Hugo's internal [Chroma Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/) is supported. Here's how to use it:

1. Generate a Chromastyle of your choice (in this case `solarized-dark`) as `_custom.scss` in project root: `hugo gen chromastyles --style=solarized-dark > _custom.scss`
2. Move the file to `assets/sass/` folder
3. Add `pygmentsUseClasses = true` to your config.toml

> Refer to [the official Hugo documentation](https://gohugo.io/content-management/syntax-highlighting/) for more info. 

### Data directory (optional)

Optionally, Osprey Delight makes use of the [Hugo's data folder](https://gohugo.io/templates/data-templates/#the-data-folder).
Currently, the following files can be used to configure the theme in more detail:

- **terminal.json**: Configure several parameters for optional Termynal (see **config.toml** for an explanation)

### Contact form: Basin

Basin is a free AJAX contact form service. To use Basin, [sign up for a free account](https://usebasin.com/users/sign_up) and create a form. Copy and paste your form's URL endpoint to the `ajaxBasin` config.toml parameter. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-ajax-setup.png)

#### Spambot protection

Under Setup/"Set a Custom Honeypot Field", enter `_anti_spam_honeypot`.
Basin will [ignore all messages that contain this specific field](https://usebasin.com/docs/features/spam-filtering). This will work since there is a hidden field that users normally do not use, but spambots will blindly input their data.

![Basin Anti Spambot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-custom-honeypot.png)

Feel free to open an issue if the protection did not work for you.


## Contributing 

Contributions are welcome! Fork this repo and create a merge request if you implemented a feature or a bug fix that everyone can profit from. 

The necessary requirements for merge requests are:
1. Theme should be kept leightweight
2. Keep it modular: New features should be made optional if possible or if they influence performance in any way
3. Document your changes; most importantly your config changes in **config.toml** (if there are any)

## License

This theme is released under the Apache 2.0 license, just like its predecessor. For more information read the [license](https://github.com/kdevo/osprey-delight/blob/master/LICENSE.md).
