const nome = "Silvana";
const sexo = "F";
const idade = 65;
const contribuicao = 30;

const tempoDeContribuicao = idade + contribuicao;
const aposentadoriaHomem = sexo === "M" && tempoDeContribuicao >= 95;
const aposentadoriaMulher = sexo === "F" && tempoDeContribuicao >= 85;

  if (aposentadoriaMulher || aposentadoriaHomem) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }