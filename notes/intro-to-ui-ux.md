# Intro to UI/UX & Wireframing?

## What is UI/UX Design?

- UI stands for "User Interface"
- UX stands for "User Experience"

## Why does UI and UX design matter?

- Both of these elements are crucial to an app/service website operating smoothly

## What is difference between UI and UX design?

- UX design is the human-first approach to product design
- UI design is the human-first approach to designing the aesthetic experience of a product

### More on UX Design

- Application: Physical and digital products
- Focus: Full experience of the user's first contact with the product to their last
- Creates: structural design solutions that address problem points that users encounter anywhere along their journey with a product
- Result in: Products that delight the user with their effectiveness

### More on UI Design

- Application: UI design is strictly for digital products
- Focus: Visual touchpoints that allow users to interact with a product through that medium
- Creates: Combinations of topography, images, animation, buttons, and more into layouts
- Result in: Products that delight the user AESTHETICALLY

## Exploring UX Design

- User experience encompasses all aspects of the end user's interaction with the company, its services, and its products
- User experience design when it comes to digital products and websites considers all the different elements that shape this experience
- The ultimate purpose of UX design is to create easy, efficient, relevant, and all around pleasant experiences for the user

### What are some questions a UX designer would try to answer?

- How easy is the checkout process when shopping on this website?
- How easy is it for you to use that can opener?
- Does your online banking app make it easy for you to manage your money?

### The Developer POV on the UX design experience

- The developer would organize their code in a way such the functionality dictated by the expected user experience is clearly separated and defined.
- The developer would also think about the tech-specific additional implementations needed to best share the designed user experience

#### ARIA and the developer

An example of an addition spec that may be needed in a dev's code is something ARIA related.

What is ARIA? [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

- ARIA stands for "Accessible Rich Internet Applications"
- A set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities
- ARIA supplements HTML so that interactions and widgets can be passed to assistive technologies in cases where there is no existing process
  - Ex: ARIA enables accessible JS widgets, form hints and error messages, live content updates, etc

#### WAI-ARIA

- WAI stands for Web Accessibility Initiative

Before HTML5

```html
<!-- Create a navigation section -->
<div id="nav"></div>
```

Using HTML5

[`<nav>` ref page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)

```html
<nav>
  <!-- Implicit ARIA role: 	navigation -->
</nav>
```

## Exploring UI Design

- The presentation and interactivity of a product
- UI designers think about icons, buttons, typography, color schemes, spacing, imagery, and responsive design

### Dev's POV: Responsive Design

- Responsive design allows you to create a single site or service to support many device form factors
- This is a web development approach that creates dynamic changes to the appearence of a website depending on the screen size and the orientation of the device being used to view it
- Responsive web design uses something we call "breakpoints" to determine how the layout of a site will appear. One design is used above a breakpoint and another design is applied below it
- The breakpoints are most commonly based on the width of the browser
- The same HTML can be served to all devices so we can use CSS to change the appearence and layout of a page
- In responsive design, page elements shuffle as the viewport grows or shrinks
- A 3 column desktop design may reshuffle to 2 columns on a tablet and a single column on a cellphone
