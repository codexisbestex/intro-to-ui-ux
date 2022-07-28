# Websites & Wireframes

## How many wireframes does any given page of a website need?

- BetterHelp is an example of a site that has chosen to do two layouts (desktop and mobile)
- Understanding responsive website breakpoints helps us on the design side when creating layouts and on the developer side when considering how to implement them

## What is a responsive breakpoint?

- A breakpoint in a responsive design is the numerical value at which a website's content and design will adapt in a certain way to provide the best possible user experience.
- Breakpoints are pixel values that a designer can define in a layout and a developer can implement via some form of CSS
- When a responsive website reaches those pixel values, a transformation occurs, most often resulting in a differently curated layout that's best suited for the current form factor

### Designer vs Developer

- Designer: Breakpoints dictate which layout should be displayed
- Developer: Breakpoints are dictated by media queries

### What is a media query?

- Media queries are ways to allow content to render based on different conditions using CSS

#### Examples

Basic bg-color change.

```css
/* At 768px or greater, `background-color` of page turns goldenrod. Once it's less than 768 px (ex: 767), the background color changes to navy blue */

.some-element {
  background-color: navyblue;
}

@media screen and (min-width: 768px) {
  .some-element {
    background-color: goldenrod;
  }
}
```

A more complex media query.

```css
/* When size is between 375 px and 768 px, background color will be rebecca purple */
@media screen (min-width: 375px) and (max-width: 768px) {
  .some-element {
    background-color: rebeccapurple;
  }
}
```

You can nest multiple media queries.

```css
@media (min-width: 20em), not all and (min-height: 40em) {
  @media not all and (pointer: none) {
    .some-element {
      /* some styling here */
    }
  }
  @media screen and ((min-width: 50em) and (orientation: landscape)),
    print and (not (color)) {
    .some-element {
      /* some styling here */
    }
  }
}
```
