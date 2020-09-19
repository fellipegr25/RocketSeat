const users = [
  {
    name: "Salvio",
    credits: [115.3, 48.7, 98.3, 14.5],
    debits: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    credits: [24.6, 214.3, 45.3],
    debits: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    credits: [9.8, 120.3, 340.2, 45.3],
    debits: [450.2, 29.9]
  }
];

// for(let user of users) {
//   console.log(user);
// };

function balanceCalculation(credits, debits) {
  const sumCredits = sumNumbers(credits);
  const sumDebits = sumNumbers(debits);

  return sumCredits - sumDebits;
};

function sumNumbers(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum = sum + number;
  };

  return sum;
};

for (let user of users) {
  const balance = balanceCalculation(user.credits, user.debits);

  if (balance > 0) {
    console.log(`${user.name} has POSITIVE balance of ${balance.toFixed(2)}`);
  } else {
    console.log(`${user.name} has NEGATIVE balance of ${balance.toFixed(2)}`);
  };
};