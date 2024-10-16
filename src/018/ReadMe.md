# Objects and JSON

> Be sure to read the notes on [**Objects**](./Objects.md) and [**JSON**](./JSON.md) as homework. Ideally, it should be read *before* this lesson, but at least it should be read right afterwards.

## Lesson Notes

- [ ] [Basic Objects](./basic-objects/main.js) - Demo simple object literals, with properties, methods, composition and estensibility. This gives the basic principles of what an object **is**.
- [ ] The [Object Literals](./object-literals/js/main.js) is an older example of object literals, but with a demonstration of taking object data in a function for rendering/inserting HTML in the page. 
- [ ] [Creating Objects](./creating-objects/index.js) - Demo creating objects with a Constructor Function and the use of the `new` keyword.
  - [ ] Also note how I am switching my `<script>` loading from `defer` to `type="module"`; it has the effect of being automatically "strict", eliminating globals and allowing imports of other module files.
- [ ] [Demo Objects](./demo-objects/main.js) is another older example of obects with a Constructor Function and a "poor-man's jQuery" used to help identify DOM objects (and then, subsequently, inserting HTML into the DOM).
- [ ] [Faking](./faking/index.html) is a newer sample of a Fake Car Lot for *Honest Joe's Used and Stolen Car Lot*. It also uses a `type="module"` script to load the [`main.js`](./faking/main.js) which in turn imports functions from the [`dataGenerator.js`](./faking/carLot/dataGenerator.js) module; note how the data generator's last line will `export { injectTableData, Vehicle };`.
- [ ] **Homework**
  - [ ] *Arrays/Object Review* - As an exercise, the student should open up a Node REPL in the terminal and try typing out the code found in the [`ArraysAndObjects.js`](./ArraysAndObjects.js) file. This review gives a simple hands-on practice in typing out exploratory code in a REPL and reinforcing Array and Object concepts.
  - [ ] Encourage students to expand on the code from the [`ArraysAndObjects.js`](./ArraysAndObjects.js) file by creating other arrays and objects and playing around with index-accessing of the elements/members of items such as the `names` array and the `nothing` and `person` objects.
- [ ] TODO:
  - [ ] Writup an article:
    - [ ] Object Members & Array Indexes - A Crossover Story
