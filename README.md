![Osprey Delight Logo](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/osprey-delight-logo.png)

---

Osprey **De**light is a sugar-free version of the [awesome Osprey theme](https://github.com/tomanistor/osprey) which has been created by [Toma Nistor](https://tomanistor.com/) for [Hugo](https://gohugo.io/), a fast static site generator.
It's a blazingly fast minimalistic single page portfolio perfectly suited to show off your awesome work! :zap:

> It tastes a bit different than the original (hence the *light* as part of the name) but also adds great new functionality - hopefully to your ***delight***. Read more about the motivation and differences of the fork [here](./MOTIVATION.md)

## :computer: Screenshot

![Screenshot](https://raw.githubusercontent.com/kdevo/osprey-delight/master/images/tn.png)

> Yes, the screenshot looks pretty familiar, doesn't it? To taste the differences, it's best to simply try Osprey Delight out!

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

- **terminal.json**: Configure several parameters for optional Termynal (see **config.toml** for an explanation)

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
