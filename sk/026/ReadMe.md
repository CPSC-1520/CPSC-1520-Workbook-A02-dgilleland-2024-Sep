# JavaScript Classes

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are yet another way to generate objects in JavaScript. The `class` keyword is used to declare a "template" for objects.

> *"In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to prototype-based inheritance."* - [*Using Classes* on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)

There are two ways to declare a class in JavaScript: Using a [Class Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class) or using a [Class Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class). They are effectively the same, just semantically different.

Here's an example taken from the [MDN reference guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). This example represents the simplest kind of a class, having only the *`constructor()`* function.

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

```
