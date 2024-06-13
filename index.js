//DEPENDECY ARE HERE
const crypto = require("node:crypto");
const os = require("node:os");

//NativeRandom
let nativeRandomizer = () => {
  return crypto.randomBytes(60).toString("hex");
};
// console.log(nativeRandomizer());

// OS Random
let osRandamizer = () => {
  let weight = 0;
  return os
    .cpus()
    .map((cpu) => {
      weight +=
        cpu?.speed * crypto.randomInt(fact(os.cpus().length)) +
        Math.round(
          cpu?.times?.user +
            cpu?.times?.nice +
            cpu?.times?.sys +
            cpu?.times?.idle
        );
      console.log(weight.toString().charAt(weight.toString().length - 1));
      // weight = weight.toString().charAt(weight.toString().length - 1 )
      return weight;
    })
    .toString()
    .split(",")
    .join("");
};
// console.log(osRandamizer());

//RandomMi[z]xer

let randomMixer = (...args) => {
  console.log(args);
};

let fact = (n) => {
  if (n === 0) return 1;
  return n * fact(n - 1);
};

console.log(randomMixer(nativeRandomizer(), osRandamizer()));
