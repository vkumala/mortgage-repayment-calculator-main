
function toCamelCase(s){
  console.log("original: ", s)
  let result =s.split('_').join('-').split('-')
  console.log("result: ", result)
let result2 =   result.map((word,id) => {console.log(word[0].toUpperCase() + word.slice(1))
    
    return id ===0 ? word: word[0].toUpperCase() + word.slice(1)})
  
  return result2.join("");
}

console.log(toCamelCase("the_stealth_warrior"))

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
//     assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//     assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//   });
// });
