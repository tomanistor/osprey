---
# [str] Title of the project. This is also visible when hovering over a gallery item.
title: "{{ replace .TranslationBaseName "-" " " | title }}"
# [str] Optional subtitle of the project. 
#   Functions as an additional explanation when hovering over a gallery item (comment out the following line).
# subtitle: ""
# [date] Project publication date.
#   Changes order: The newest item will be displayed first in the gallery. 
#   Just like Hugo's natural ordering, this is anti-chronological.
#   You can use 'weight' to order (primarily) for more control (sometimes it makes sense to put old items before new ones).
#   The specifics are documented here: https://gohugo.io/templates/lists/#order-content
date: "{{ .Date }}"
# [str] Gallery image file from the assets directory. 
image: "images/{{ .File.BaseFileName }}.png"
# [str] Alternative (image) description.
alt: ""
# [css] Optional background color of the gallery item (if omitted, will use theme's fallback).
color: "#fff"
# [css] Optional gallery item hover color (if omitted, will use theme's fallback).
#hoverColor: "#fff"
# [map] Configure github specific options here:
# github: 
    # [str] Repo is a combination of "<user_or_org>/<repository_name>"
    # repo: "{{ default "<username>" site.Params.Feat.structuredDataGitHubUser }}/{{ default "<reponame>" (urlize .File.BaseFileName) }}"
    # [bool] Show repository information such project language below the buttons.
    # showInfo: true
    # showButtons: true
# [map] Optionally configure terminal to be displayed when opening up the gallery item:
#   Example (set "useTermynal" to true in config.yaml and comment out to test it):
# terminal:
    # lines:
    # - type: input
    #   data: hugo mod get -u github.com/hugo-mods/lazyimg 
    #   wait: 1250
    # - type: progress
    #   data: 100
    #   wait: 200
    # - data: ✓ Done.
    #   wait: 75
    # - data: exit
    #   wait: 75
buttons:
  - i18n: view # i18n key (see i18n directory, see https://gohugo.io/functions/i18n/)
    icon: view # optional: use an icon from icons.yaml
    newTab: false # optional: controls if url should be opened in new tab
    url: ""
  - i18n: code 
    icon: code
    url: ""
# [bool] Draft mode will decide if file will be published to 'public/' directory.
draft: false
---
