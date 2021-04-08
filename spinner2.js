// setTimeout(() => { process.stdout.write('\r|   '); }, 100);

// setTimeout(() => { process.stdout.write('\r/   '); }, 300);

// setTimeout(() => { process.stdout.write('\r-   '); }, 500);

// setTimeout(() => { process.stdout.write('\r\\   '); }, 700);
//   // Need to escape the backslash since it's a special character.
// setTimeout(() => { process.stdout.write('\r|   '); }, 900);

// setTimeout(() => { process.stdout.write('\r/   '); }, 1100);

// setTimeout(() => { process.stdout.write('\r-   '); }, 1300);

// setTimeout(() => { process.stdout.write('\r\\   '); }, 1500);
//   // Need to escape the backslash since it's a special character.
// setTimeout(() => { process.stdout.write('\r|   '); }, 1700);


// ... fill in the rest yourself ...
const characters = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
let interval = 0;
  for(let element of characters) {
  
    setTimeout(() => {
      process.stdout.write(element);

    }, interval = interval + 200);
  
  }