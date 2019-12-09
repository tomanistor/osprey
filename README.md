![Osprey Delight Logo](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/osprey-delight-logo.png)

---

Osprey **De**light is a sugar-free version of the [awesome Osprey theme](https://github.com/tomanistor/osprey) which has been created by [Toma Nistor](https://tomanistor.com/) for [Hugo](https://gohugo.io/), a fast static site generator.
It's a blazingly fast minimalistic single page portfolio perfectly suited to show off your awesome work! :zap:

> It tastes a bit different than the original (hence the *light* in the name) but also adds great new functionality - hopefully to your ***delight***.

## Why?
Well, first I personally did not need the blog features of the theme, so I removed them.
Though the original theme is already performance-tuned, I decided to improve it further which enabled me to get a PageSpeed score [of 100 *on desktop* and 99~100 *on mobile*](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io). After optimizing, I added some other functionality in a modular way [as outlined below](#the-taste-features).

Finally, I decided to publish it so that others with a similar use-case might profit from it, too.

## The "Taste" (Features)

> :warning: Please note: In contrary to [Osprey](https://github.com/tomanistor/osprey) it does **not** have the built-in minimalistic blog! This is not the aim of the project.

### :low_brightness: Light: **Removed** features

The following features of the original theme have been **removed** in order to make it more lightweight:

- **All** Blog features; use the [original Osprey](https://github.com/tomanistor/osprey) for this feature
- [Disqus](https://disqus.com) comments (not needed anymore)
- highlight.js (not needed anymore)
- [Formspree](https://formspree.io) AJAX contact form (with Formspree Gold)
- Hamburger and close images (in favor of Fontawesome icons, see below)

### :sparkles: Delight: **Added** or **changed** features

The following theme aspects have been changed delightfully:

#### Gallery
* Introducing gallery item types!
    * `github`: Fetch GitHub repo data with just a few lines config
    * `normal`: The usual type that you're already familiar with if coming from [Osprey](https://github.com/tomanistor/osprey)
* Want to reference an item elsewhere? Anchor links to gallery items will open the respective modal automatically
* Use custom hugofied version of [Termynal](https://github.com/ines/termynal/) for terminal animations within gallery modals

#### General
* Added a *small* set of (mostly social media) Fontawesome icons [using Fontello](http://fontello.com/)
* Vanilla JS scrollspy to highlight the active header links/sections
* Add "disabled JS message" since the page does not properly work without it
* Blazing fast loading speeds
  * Removed menu *open* and *close* images (and instead use icons)
  * Changed font to *Roboto Slab* (headers) and *Roboto* (body) resulting in a smaller font size and wider availability
  * Minified and bundled JavaScript to reduce network requests
  * Updated lazysizes to [v5.1.2](https://github.com/aFarkas/lazysizes/releases/tag/5.1.2) (current latest stable), about 15% smaller
* GPDR: No external requests to 3rd parties per default (Roboto fonts included)
* SEO: Added [structured data](https://developers.google.com/search/docs/guides/intro-structured-data) support

#### Contact form
* [Basin](https://usebasin.com/) AJAX contact form (free)
  * Added spambot protection [using the Basin honeypot feature](https://usebasin.com/docs/features/spam-filtering)
* Added optional *request type* select element
* Added status messaged when sending

#### Styling
* Navbar shadow is only shown when navbar docks to prevent issues on mobile devices
* Rounded-up edges for modals (and use alternative close icon/position)
* Smooth scrolling via CSS-only
* Use buttons instead of links in modals

#### Development/Setup
* [SASS](http://sass-lang.com/) styling Compiled natively to CSS, then minified and fingerprinted using Hugo Pipes
* No Cachebusting hash setup needed anymore
* Refactored theme
    * Use more partials
    * Change existing configuration variables, introduce new ones
    * Make it easier to maintain

## :computer: Screenshot

Yes, the screenshot looks pretty familiar, doesn't it?

![Screenshot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/tn.png)

To taste the differences, it's best to simply try Osprey Delight out!

## :zap: Quickstart

```console
$ mkdir themes/ # if dir does not exist yet
$ git clone https://github.com/kdevo/osprey-delight.git themes/ --depth 1
```

:bulb: The easiest way is to simply copy the [exampleSite](/exampleSite) directory's *content* to your project's root.
This way, you have a good starting point that you can use for further modifications.

## :wrench: Configuration and Usage

Documentation is not complete yet, but hopefully it's enough if you want to *migrate* from **Osprey** to **Osprey Delight**.
Since many configuration attributes have been changed/refactored, this is a necessary step.

It's best if you simply check out the commented **[exampleSite/config.toml](/exampleSite/config.toml)**!

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

> :warning: Please make sure that `item-name` is unique on the whole page because it will be used as an anchor/identifier!

### Data directory (optional)

Optionally, Osprey Delight makes use of the [Hugo's data folder](https://gohugo.io/templates/data-templates/#the-data-folder).
Currently, the following files can be used to configure the theme in more detail:

- **terminal.json**: Configure several parameters for Termynal (see **config.toml** above for an explanation)

### Contact Form: Basin

Basin is a free AJAX contact form service. To use Basin, [sign up for a free account](https://usebasin.com/users/sign_up) and create a form. Copy and paste your form's URL endpoint to the `ajaxBasin` config.toml parameter. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-ajax-setup.png)

#### Spambot protection

Under Setup/"Set a Custom Honeypot Field", enter `_anti_spam_honeypot`.
Basin will [ignore all messages that contain this specific field](https://usebasin.com/docs/features/spam-filtering). This will work since there is a hidden field that users normally do not use, but spambots will blindly input their data.

![Basin Anti Spambot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/basin-custom-honeypot.png)

Feel free to open an issue if the protection did not work for you.

### Custom (S)CSS

Place a file named `_custom.scss` in your local **assets/sass/** folder (create the directories). This will override the theme's (empty) `_custom.scss` which is loaded in the internal main SCSS.

## Help wanted

Contributions are welcome! Fork this repo and create a merge request if you implemented a feature or a bug fix that everyone can profit from. 

The necessary requirements for merge requests are:
1. Theme should be kept leightweight
2. Keep it modular: New features should be made optional if possible or if they influence performance in any way
3. Document your changes; most importantly your config changes in **config.toml** (if there are any)

## License

This theme is released under the Apache 2.0 license. For more information read the [license](https://github.com/kdevo/osprey-delight/blob/master/LICENSE.md).
