const name = "Fellipe";
const gender = "M";
const age = 65;
const contribution = 35;

const sumAgeContribution = age + contribution;
const manRetirementRule = gender === "M" && sumAgeContribution >= 95;
const womanRetirementRule = gender === "F" && sumAgeContribution >= 85;

if (womanRetirementRule || manRetirementRule) {
  
  console.log(`${name}, you can be retire`)
  
} else {

  console.log(`${name}, you can not be retire`)

}