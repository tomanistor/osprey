![Osprey Delight Logo](https://github.com/kdevo/osprey-delight/images/osprey-delight-logo.png)

# Osprey **De**light
Osprey **De**light is a sugar-free version of the [awesome Osprey theme](https://github.com/tomanistor/osprey) which has been created by [Toma Nistor](https://tomanistor.com/) for [Hugo](https://gohugo.io/), a fast static site generator.

> It tastes a bit different than the original (hence the *light* in the name) but also adds some new functionality -- hopefully to your ***delight***.

> :warning: :construction: The theme is still in a very early stage and **not all features** have been fully tested!

## Why?
Well, first I personally did not need the blog features of the theme, so I removed them.
Though the original theme already is performance-tuned, I decided to improve it further.
As a result, stripping down the theme to the minimum of needed resources enabled me to get a PageSpeed score [of 100 *on desktop* and 99~100 *on mobile*](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io). After optimizing, I added some other functionality in a modular way [as outlined below](#features).

Finally, I decided to publish it so that others with a similar use-case might profit from it, too.

## The "taste" (features)

### :negative_squared_cross_mark: Light: **Removed** features

The following features of the original theme have been **removed** in order to make it more lightweight:

- All Blog features; use the [original Osprey](https://github.com/tomanistor/osprey) for this feature
- [Disqus](https://disqus.com) comments (not needed anymore, see above)
- [Formspree](https://formspree.io) AJAX contact form (with Formspree Gold)
- Hamburger and close images (in favor of Fontawesome icons)

### :sparkles: Delight: **Added** or **changed** features

* [Basin](https://usebasin.com/) AJAX contact form (free)
  * Added spambot protection [using the Basin honeypot feature](https://usebasin.com/docs/features/spam-filtering)
  * Added optional *request type* select element
* [SASS](http://sass-lang.com/) styling
  * Compiled natively to CSS, then minified and fingerprinted using Hugo Pipes
  * No Cachebusting hash setup needed anymore
* Blazing fast loading speeds
  * Removed menu *open* and *close* images (and instead use icons)
  * Changed font to *Roboto Slab* (headers) and *Roboto* (body) resulting in a smaller font size and wider availability
  * Minified and bundled JavaScript to reduce network requests
* Added a *small* set of (social media) Fontawesome icons [using Fontello](http://fontello.com/)
* Styling adjustments and other fixes
  * Vanilla JS scrollspy to highlight the active header links/sections
  * Smooth scrolling via CSS
  * Navbar shadow is only shown when navbar docks to prevent issues on mobile devices
  * Anchor links to gallery items will open the respective modal automatically
  * Rounded-up edges for modals (and use alternative close icon/position)
  * Add "disabled JS message" since the page does not work without it
* Refactored theme to make it a bit easier to maintain

## Screenshot

Yes, the screenshot looks pretty familiar to the original, doesn't it?

![Screenshot](https://github.com/kdevo/osprey-delight/images/tn.png)

To taste the differences, it's best to simply try Osprey Delight out!

## :zap: Quickstart

```console
$ mkdir themes/ # if dir does not exist yet
$ cd themes
$ git clone https://github.com/kdevo/osprey-delight.git
```

> :bulb: It's probably the easiest to simply copy the [exampleSite](/exampleSite) directory's *content* to your project's root.
> This way, you have a good starting point that you can use for further modifications.

## :wrench: Configuration and Usage

Documentation is not optimal yet, but hopefully it's enough if you want to *migrate* from **Osprey** to **Osprey Delight**.
Since many configuration attributes have been changed/refactored, this is a necessary step.

It's best if you simply check out the commented **[exampleSite/config.toml]**!

### Content files

#### About section
To create an about section that renders on the home page, run:

```console
$ hugo new about.md
```

#### Gallery item

To create a new gallery item/image, run:

```console
$ hugo new gallery/your-name.md
```

### Data directory (optional)

Optionally, Osprey Delight makes use of the [Hugo's data folder](https://gohugo.io/templates/data-templates/#the-data-folder).
You can configure some of the theme's functionality by creating your own data files under **`{PROJECT_ROOT}`/data/**.

Check out [the exampleSite's data directory](/exampleSite/data/) for example content.

- **term.json**: Configure several parameters for Termynal (see **config.toml** above for an explanation)
- **term-`{gallery/FILENAME}`.yaml**: Setup a terminal to be displayed (must start with `term-`)

### Contact Form: Basin

Basin is a free AJAX contact form service. To use Basin, [sign up for a free account](https://usebasin.com/users/sign_up) and create a form. Copy and paste your form's URL endpoint to the `ajaxBasin` config.toml parameter. Select the `Submit this form via AJAX` option on your Basin dashboard.

![Basin AJAX setup](https://github.com/kdevo/osprey-delight/images/basin-ajax-setup.png)

### Custom CSS

TODO

## Contributions

TODO

## License
This theme is released under the Apache 2.0 license. For more information read the [license](https://github.com/kdevo/osprey-delight/blob/master/LICENSE.md).
