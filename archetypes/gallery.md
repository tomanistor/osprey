---
# [str] Display title of the project.
title: "{{ replace .TranslationBaseName "-" " " | title }}"
# [date] Specify project publication date - changes order; the latest item will be displayed first.
date: "{{ .Date }}"
# [str] Gallery image file name. Image needs to be under 'images/'.
# If ommited with type 'github', will attempt to fetch from '{repo_url}/.github/logo.png'.
image: ""
# [str] Alternatively, you can specify an absolute image URL (comment out the following line).
# absImage: ""
# [str] Provide alternative description.
# If ommited with type 'github', will use 'description' field from GitHub API.
alt: ""
# [css] Set gallery item's background color.
color: "#fff"
# [str] Possible types:
# - normal: Just as originally in Osprey
# - github: Fetch repo data using GitHub API
type: "normal"
# [str] Link to view the project.
linkView: ""
# [str] Link to show the project's code.
# If ommited with type 'github', will use 'html_url' field from GitHub API.
linkCode: ""
# Configure 'github'-type specific options here:
github: 
    # [str] Repo is a combination of "{user_or_org}/{repository_name}", e.g. "kdevo/osprey-delight.
    repo: "YOUR-GITHUB-NAME/{{ .TranslationBaseName }}"
    # [bool] Show repository information such project language below the buttons.
    showInfo: true
# Configure optional terminal to be displayed when opening up the gallery item:
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
# [bool] Draft mode will decide if file will be published to 'public/' directory.
draft: true
---
