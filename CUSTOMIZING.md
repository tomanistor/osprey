# Customizing

Osprey Delight makes heavy use of various Hugo features, e.g. directly benefits from Hugo's virtual file system and [directory structure](https://gohugo.io/getting-started/directory-structure/), [partials](https://gohugo.io/templates/partials/), as well as using the awesome [Hugo Pipes](https://gohugo.io/hugo-pipes/) whenever it makes sense.

This also means that you normally do not need to maintain a separate fork. If you have built something nice, don't be afraid to share the customization via [PR](https://github.com/kdevo/osprey-delight/pulls), so that others can profit from it, too. :rocket:

## Custom SCSS

Place a file named `_custom.scss` in your `assets/sass/` folder (create the directories if needed). This will override the theme's `_custom.scss` which is loaded in the internal main SCSS.

> The theme's built-in `_custom.scss` contains useful customization examples, so don't be afraid to copy, override and experiment with it. 

### Theming

Coming soon.
Take a look at [the themes directory](themes/osprey-delight/assets/sass/themes) for a sneak peek!

### Syntax Highlighting (for Blog)

Limiting external dependencies is important when it comes performance, therefore only Hugo's internal [Chroma Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/) is supported. Here's how to use it:

1. Generate a Chromastyle of your choice (in this case `solarized-dark`) as `_custom.scss` in project root: `hugo gen chromastyles --style=solarized-dark > _custom.scss`
2. Move the file to `assets/sass/` folder
3. Add `pygmentsUseClasses = true` to your config.yaml

> Refer to [the official Hugo documentation](https://gohugo.io/content-management/syntax-highlighting/) for more info. 

## Custom templates

### Extent the head

In case you want to load custom HTML for additional scripts etc. inside the page's `head`: Place a file named `head-extended.html` in your `layouts/partials/` folder (create the directories if needed). This file can e.g. contain additional `<script>` or `<link>` tags.

### Build your own sections

Coming soon.