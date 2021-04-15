console.log("studial generator");

function* generator() {
  yield 2009;
  return "tu hoc lap trinh redux-saga";
  yield 2010;
}

const result = generator(); // generator ko trả về giá trị nhưng nó trả về interator
console.log("result 1:", result.next()); // generator chỉ trả về khi gọi biến next
console.log("result 2:", result.next());
console.log("result 3:", result.next());
