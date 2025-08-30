import sum from "./sum.js";

describe("test for sum fnx",()=>{
   test("adds 2 + 2 to equal 4", () => {
     //input: 2, 2
     //output: 4
     expect(sum(2, 2)).toBe(4);
   });
   test("adds 2 + 3 to equal 5", () => {
     expect(sum(2, 3)).toBe(5);
   });
})
//test sum function
// test("adds 2 + 2 to equal 4", () => {
//   //input: 2, 2
//   //output: 4
//   expect(sum(2, 2)).toBe(4);
// });