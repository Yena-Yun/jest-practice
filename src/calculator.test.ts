// // commonJS 문법
// const add = require('./calculator');

// it('add correctly', () => {
//   expect(add(3, 5)).toBe(8);
// });

// ES6 이상 문법
import { add } from './calculator';

it("add correctly", () => {
  expect(add(3, 5)).toBe(8);
});
