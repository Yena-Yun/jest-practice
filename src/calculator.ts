// // commonJS 문법
// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

// // ES6 이상 문법
// export const add = (a, b) => {
//   return a + b;
// };

// ES6 이상 문법 (+ Typescript)
export const add = (a: number, b: number): number => {
	return a + b;
}
