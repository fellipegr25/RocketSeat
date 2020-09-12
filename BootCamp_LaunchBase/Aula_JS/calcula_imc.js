const name = "Fellipe"
const weight = 84
const height = 1.88
const gender = "M"


function calculateImc(imc) { 
  
  imc = weight / (height * height)
  
  return imc
}


function sendMessage(imc) {
      
      if (imc >= 30) {
        console.log(`${name} you are over weight`)
      } else {
        console.log(`${name} you are not over weight`)
      }

}

const resultOfImc = calculateImc()

sendMessage(resultOfImc)
 
