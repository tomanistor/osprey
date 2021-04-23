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
# [str] Gallery image file. 
#   If the specified image is found in the 'assets' directory  the image will be normalized to a specified height. 
#   If ommited AND type is 'github' (see below), will attempt to fetch from '{repo_url}/.github/logo.png'. 
image: ""
# [str] Alternative (image) description.
#   If ommited with type 'github', will use 'description' field from GitHub API.
alt: ""
# [css] Background color of the gallery item.
color: "#fff"
# [css] Optional gallery item hover color to set it individually.
#hoverColor: "#fff"
# [map] Configure github specific options here:
github: 
    # [str] Repo is a combination of "{user_or_org}/{repository_name}", e.g. "kdevo/osprey-delight.
    #repo: "YOUR-GITHUB-NAME/{{ .TranslationBaseName }}"
    # [bool] Show repository information such project language below the buttons.
    showInfo: true
    showButtons: true
# [map] Configure optional terminal to be displayed when opening up the gallery item:
#   Example (set "useTermynal" to true in config.yaml and comment out to test it):
terminal:
    # lines:
    # - type: input
    #   data: ls -ltra dummy/
    #   wait: 1250
    # - type: progress
    #   data: 100
    #   wait: 200
    # - data: ls: cannot access 'dummy/' directory.
    #   wait: 75
buttons:
  - i18n: view # i18n key (see i18n directory, see https://gohugo.io/functions/i18n/)
    icon: angle-circled-right # optional: use an icon (in this case arrow right)
    newTab: false # optional: controls if url should be opened in new tab
    url: ""
  - i18n: code 
    icon: code
    url: ""
# [bool] Draft mode will decide if file will be published to 'public/' directory.
draft: true
---
