console.log("studial generator");

// function* generator() {
//   yield 2009;
//   return "tu hoc lap trinh redux-saga";
//   yield 2010;
// }

// const result = generator(); // generator ko trả về giá trị nhưng nó trả về interator
// console.log("result 1:", result.next()); // generator chỉ trả về khi gọi biến next
// console.log("result 2:", result.next());
// console.log("result 3:", result.next());

// function* interloop() {
//   while (true) {
//     yield "toi dang lang nghe";
//   }
// }
// const iterator = interloop();
// console.log("result1", iterator.next());
// console.log("result2", iterator.next());

// xinchao => hoc saga => end

function* generator1Ingenerator() {
  yield "xin chao";
  // const gen1 = generator1();
  // yield gen1.next();
  yield* generator1();
  yield "end";
}

function* generator1() {
  yield "hoc saga";
}

const interator = generator1Ingenerator();
console.log("result1:", interator.next());
console.log("result2:", interator.next());
console.log("result3:", interator.next());
