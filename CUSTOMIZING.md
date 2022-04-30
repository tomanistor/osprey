# Customizing

Osprey Delight makes heavy use of various Hugo features, e.g. [modules](https://gohugo.io/hugo-modules/). It directly benefits from Hugo's virtual file system and [directory structure](https://gohugo.io/getting-started/directory-structure/), [partials](https://gohugo.io/templates/partials/), as well as using the awesome [Hugo Pipes](https://gohugo.io/hugo-pipes/) whenever it makes sense.

This also means that you normally do not need to maintain a separate fork due to the wide availability of customization options.

## Custom SCSS <a href="custom-scss"></a>

Place a file named `_custom.scss` in your `assets/sass/` folder (create the directories if needed). This will override the theme's `_custom.scss` which is loaded in the internal main SCSS.

> The theme's built-in `_custom.scss` contains useful customization examples, so don't be afraid to copy, override and experiment with it. 

### Theming

Get creative and build your own theme for Osprey Delight!
A theme ([example dark theme](./themes/osprey-delight/assets/themes/dedark)) consists of three optional files:

File                | Purpose                                                            | Recommendation
--------------------|------------------------------------------------------------------- |------------------------
`_colors.scss`      | Colors                                                             | Use a color scheme generator site (e.g. "coolors") to get some ideas, align with your logo's colors.
`_fontface.scss`    | Font settings                                                      | Use [Google fonts](https://fonts.google.com/) for a font that fits. Tools such as [webfont helper](https://google-webfonts-helper.herokuapp.com/fonts) help you with independently self-hosting the font.
`_custom.scss`      | Any other custom adaptions                                         | Just like the [custom SCSS described before](#custom-scss), but theme-local instead globally scoped.

Set the theme in your config.yaml, e.g.:

```yaml
Params:
  # ...
  theme: "dedark"
```

### Syntax Highlighting (for Blog)

Limiting external dependencies is important when it comes performance, therefore only Hugo's internal [Chroma Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/) is supported out of the box. Here's how to use it:

1. Generate a Chromastyle of your choice (in this case `solarized-dark`) as `_custom.scss` in project root: `hugo gen chromastyles --style=solarized-dark > _custom.scss`
2. Move the file to `assets/sass/` folder
3. Add `pygmentsUseClasses = true` to your config.yaml

> Refer to [the official Hugo documentation](https://gohugo.io/content-management/syntax-highlighting/) for more info. 

## Templates

In this section, you can learn how to adjust templates or theme structure to your needs.

### Add your own sections

Adjust the config.yaml file by adding another entry to `menu`, for instance one for music:

```yaml
Menu:
  Main:
  # ...
  - name: "Music"
    identifier: "music"
    url: "/#music"
    weight: 2
```

This will create a section with name "Music" in the nav bar and renders the content of `content/music.md` given by the identifier.

If you need further styling of this section you can place a `music.html` partial in `layouts/partials/sections` (e.g. by using the `default.html` in the same folder as starting point).

The weight determines the position on the page as well as in the nav bar.

### Advanced: Extend the head

In case you want to load custom HTML for additional scripts etc. inside the page's `head`: 
Place a file named `head-extended.html` in your `layouts/partials/` folder (create the directories if needed). 

This file can e.g. contain additional `<script>` or `<link>` tags.

## Module settings

Osprey Delight makes heavy use of [Hugo Mods](https://github.com/hugo-mods) to enrich its functionality. 
In this section, you can learn how to customize the modules.

### [icons](https://github.com/hugo-mods/icons)

To add an icon to the footer (say SoundCloud, [as in this discussion](https://github.com/kdevo/osprey-delight/discussions/19)):

1. Create the file `data/icons.yml` in your project root (see also the [theme-internal `icons.yml`](./layouts/themes/osrprey-delight/data/icons.yml))
2. Add the line `soundcloud: fab soundcloud` to it
3. Check out all options for [the pattern](https://github.com/hugo-mods/icons#data-pattern) used by this theme

### [lazyimg](https://github.com/hugo-mods/lazyimg)

Customization options for experts are described in the [README](https://github.com/hugo-mods/lazyimg/README.md).

### [release-notify](https://github.com/hugo-mods/release-notify)

For notifying about new bug/minor/major versions. Configurable in `data/release_notify.yaml`.
Can be disabled entirely by changing `notifyOnNewThemeVersion` to `false` in your `config.yaml`.