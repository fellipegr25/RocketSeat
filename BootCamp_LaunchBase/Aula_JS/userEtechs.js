const users = [
  { name: "Carlos", tecnologies: ["HTML", "CSS"]},
  { name: "Jasmine", tecnologies: ["JavaScript", "CSS"]},
  { name: "Tuane", tecnologies: ["HTML", "Node.js"]}
];

// for (let user of users) {
//   console.log(`${user.name} trabalha com ${user.tecnologies.join(', ')}`)
// };

function checkIfUserUseCSS(user) {
  for(let tecnologie of user.tecnologies) {
    if (tecnologie == 'CSS' ) 
    return true;
  };
  return false;
};

for (let i = 0; i < users.length; i++) {
  const userWorkWithCSS = checkIfUserUseCSS(users[i]);

  if(userWorkWithCSS) {
    console.log(`The user ${users[i].name} works with CSS`);
  };
};