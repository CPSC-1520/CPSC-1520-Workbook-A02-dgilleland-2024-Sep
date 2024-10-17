// Object Literals can define properties that are Getters and Setters,
// preserving their intended purpose.
let substitute = {
  set course(courseNumber) {
    this.__courseNumber = courseNumber;
  },
  get course() {
    return this.__courseNumber;
  },
  set teacher(name) {
    this.__sub = name;
  },
  get teacher() {
    return this.__sub;
  }
}

console.clear()
substitute
substitute.course = 'CPSC-1520'
substitute
substitute.__courseNumber = 'DMIT-1508'