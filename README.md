# My Personal Website

This is my second version of the website using HTML and Sass. Credit to Kevin Powell and Jonas schmedtmann for their tutorials on this topic.

I put some effort into building this one and there are still some design issue that need to be taken care of.
The fourth iteration of my personal site built with Gatsby and hosted with Netlify.

📢 PSA for those who want to fork or copy this repo and use it for their own site:

Please be a decent person and give me proper credit by linking back to my website! Refer to this handy for [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure.

👀 Looking for [v1](https://github.com/PintoGideon/Portfolio)?

# Design specs

## Colors

- Neutral colors, lightest to darkest:
  - #FFFFFF
  - #F3F3F3
  - #9D9D9D
  - #5D5D5D
  - #212121
- Primary: #F55D3E

## Typography

### Fonts

- @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato:300,400,900');
- Serif font: 'Abril Fatface', cursive;
- Sans serif font: 'Lato', sans-serif;

### Font sizes

- Base settings:
  - small screens: 1rem / 1.6
  - large screens: 1.125rem / 1.6
  - font weight: light
- main title:
  - small screens: 3rem / 1.2
  - large screens: 5rem / 1.2
- section title:
  - small screens: 3rem / 1
  - large screens: 3.75rem
- section subtitles:
  - 1.68rem / 1.1
  - font weight: normal
- h3:
  - 1.3125rem / 1.2

## Layout

Most component spacing, such as grid gaps and component padding, is 2em.

## Media queries

- 0 - 449px
- 449px - 859px
- 860px +

## How to Run?

1. Download a Ruby Installer
2. gem install sass
3. ```
   sass watch sass:css

   ```
