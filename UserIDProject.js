let evenUserNumbers = [ ]
let oddUserNumbers = [ ];


for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // add to fizzbuzz
    evenUserNumbers.push(i)
  
  } else {
      // do something
      oddUserNumbers.push(i)
  }
  
}

console.log("Total Number of even UserID emails sent = "      + evenUserNumbers.length);
console.log("Total Number of odd UserID emails sent= "      + oddUserNumbers.length);
