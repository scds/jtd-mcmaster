# Porting/verifying old workshops from the forked just-the-docs to the new jtd-mcmaster

## General
- Verify all pages have a nav_order.


## Lessons
- Move any lessons to a lessons folder.
- Verify links within markdown still work.

## 404.html
- Add 404.html to root folder. https://github.com/scds/scds-template/blob/master/404.html

## \_layouts
Remove \_layouts folder.

## \_includes
Remove \includes folder.

## config.yml
- Update config.yml. Template is below.
```yml
title: How-To and Documentation # *** Enter workshop title here 
github_repo_url: "https://github.com/scds/jtd-mcmaster" # ***Enter workshop URL (in github pages) here
gh_edit_repository: "https://github.com/scds/jtd-mcmaster" #*** ENTER the github URL for your repo
ga_tracking: # *** This needs to be set up in Google Analytics once you know the website URL (ask Jay to do this). Then the tracking code needs to be taken from Google Analytics and pasted here.  

# DMDS Settings
# subtitle: "This workshop is part of the SCDS Do More with Digital Scholarship series."
# nav_footer_logo_bottom: "https://raw.githubusercontent.com/scds/jtd-mcmaster/main/assets/images/scds-logo.png"
# nav_footer_logo_bottom_href: "https://scds.ca/"
# nav_footer_logo_top: ""
# nav_footer_logo_top_href: ""

# DASH settings
# subtitle: 'This workshop is part of the Data Analysis Support Hub series.'
# nav_footer_logo_bottom: "https://raw.githubusercontent.com/scds/jtd-mcmaster/main/assets/images/scds-logo.png"
# nav_footer_logo_bottom_href: "https://scds.ca/"
# nav_footer_logo_top: "https://raw.githubusercontent.com/scds/jtd-mcmaster/main/assets/images/dash-logo.png"
# nav_footer_logo_top_href: "https://library.mcmaster.ca/services/dash"

# OTHER settings - Override series specific settings
subtitle: ""
nav_footer_logo_bottom: "https://raw.githubusercontent.com/scds/jtd-mcmaster/main/assets/images/scds-logo.png"
nav_footer_logo_bottom_href: "https://scds.ca/"
nav_footer_logo_top: ""
nav_footer_logo_top_href: ""

#  _____       _   _   _          _      _                            
# | ____|   __| | (_) | |_       / \    | |__     ___   __   __   ___ 
# |  _|    / _` | | | | __|     / _ \   | '_ \   / _ \  \ \ / /  / _ \
# | |___  | (_| | | | | |_     / ___ \  | |_) | | (_) |  \ V /  |  __/
# |_____|  \__,_| |_|  \__|   /_/   \_\ |_.__/   \___/    \_/    \___|

aux_links:
  "SCDS Workshops":
    - "https://scds.ca/online-learning/"

navigation: true

# Override Default SCDS Web Icon
favicon_ico: ""

remote_theme: scds/jtd-mcmaster
color_scheme: mcmaster
# logo: "https://github.com/scds/intro-voyant/blob/main/assets/img/dmds-tableau.png?raw=true"

# Heading anchor links appear on hover over h1-h6 tags in page content
# allowing users to deep link to a particular heading on a page.
#
# Supports true (default) or false
heading_anchors: true

# Back to top link
back_to_top: true
back_to_top_text: "Back to top"

# Footer last edited timestamp
# Footer last edited timestamp
# last_edit_timestamp: true # show or hide edit time - page must have `last_modified_date` defined in the frontmatter
# last_edit_time_format: "%b %e %Y at %I:%M %p" # uses ruby's time format: https://ruby-doc.org/stdlib-2.7.0/libdoc/time/rdoc/Time.html

# Footer "Edit this page on GitHub" link text
gh_edit_link: true # show or hide edit this page link
gh_edit_link_text: "View this content on GitHub"
gh_edit_branch: "main" # the branch that your docs is served from
# gh_edit_source: docs # the source that your files originate from
gh_edit_view_mode: "tree" # "tree" or "edit" if you want the user to jump into the editor immediately

plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-relative-links

# Google Analytics Tracking
ga_tracking_anonymize_ip: true # Use GDPR compliant Google Analytics settings (true by default)
license_url: "http://creativecommons.org/licenses/by/4.0/"
license_name: "Creative Commons Attribution 4.0 International License"
license_image_url: "https://i.creativecommons.org/l/by/4.0/88x31.png"

# Callout titles an colors
callouts_level: quiet # or loud
callouts:
  highlight:
    color: yellow
  important:
    title: Important
    color: blue
  new:
    title: New
    color: green
  note:
    title: Note
    color: purple
  warning:
    title: Warning
    color: red
```
