# Metro Nav

Style and script to decorate an HTML navigation list as a Metro-style user interface. Inspired by the navigation menu used on the [Jurassic World pre-release website](http://islanublar.jurassicworld.com/) and by the [Metro UI start screen template](https://metroui.org.ua/templates/start-screen.html).

## Usage

The main points of customizability are the text, tile size, tile colour, and background image for each list item. 

Text within a list item should be wrapped in a tag with the class `text`. Generally this would be the `a` tag used for navigation links.

There are two tile sizes available: small and large. The small size is the default one. To use the large size add the `lg` class to the list item. If you wish to keep up to four small tiles grouped together, have them in a nested list with the class `quad`.

The tile colours available draws from [Google's Material Design Colour Palette](https://material.io/guidelines/style/color.html). As such, the following classes are available to add to list items:

 - `red`
 - `pink`
 - `purple`
 - `deep-purple`
 - `indigo`
 - `blue`
 - `light-blue`
 - `cyan`
 - `teal`
 - `green`
 - `light-green`
 - `lime`
 - `yellow`
 - `amber`
 - `orange`
 - `deep-orange`
 - `brown`
 - `grey` or `gray`
 - `blue-grey` or `blue-gray`

For background images, mark the list item with the `image` class and include your image as an `img` with the `bg` class.

## Example

[See it in action!](https://soandrew.github.io/metro-nav)
