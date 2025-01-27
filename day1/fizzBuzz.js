/* 1. FizzBuzz
 Buat program yang mencetak angka dari 1 sampai 100.

 Jika angka habis dibagi 3, cetak "Fizz".
 Jika angka habis dibagi 5, cetak "Buzz".
 Jika angka habis dibagi 3 dan 5, cetak "FizzBuzz".
 Selain itu, cetak angka tersebut.

*/

// Code Here

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  const check =
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuzz"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i;
  console.log(check);
}

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

let i = 1;
do {
  let result = "";
  i++;

  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";

  console.log(result || i);
} while (i <= 100);
