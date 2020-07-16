# Why fork it?

Well, first I personally did not need the blog features of the theme, so I removed them.
Though the original theme is already performance-tuned, I decided to improve it further which enabled me to get a PageSpeed score [of 100 *on desktop* and 99~100 *on mobile*](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkdevo.github.io). After optimizing, I added some other functionality in a modular way [as outlined below](#the-taste-features).

Finally, I decided to publish it so that others with a similar use-case might profit from it, too.

> In the latest version, the blog features of the theme have been re-implemented in a modular way!

## The "Taste" (Features)

### :low_brightness: Light: **Removed** features

The following features of the original theme have been **removed** in order to make it more lightweight:

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