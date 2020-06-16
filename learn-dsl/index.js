const hours = 1000 * 60 * 60;
const days = hours * 24;
const weeks = days * 7;

const UNIT_TO_NUM = { hours, days, weeks };

class Duration {
  constructor(num, unit) {
    this.number = num;
    this.unit = unit;
  }
  getNumber() {
    return this.number * UNIT_TO_NUM[this.unit];
  }
  get ago() {
    return new Date(+new Date() - this.getNumber());
  }
  get after() {
    return new Date(+new Date() + this.getNumber());
  }
}

Object.keys(UNIT_TO_NUM).forEach(unit => {
  Object.defineProperty(Number.prototype, unit, {
    get() {
      return new Duration(this, unit);
    }
  });
});

console.log((2).weeks.after);