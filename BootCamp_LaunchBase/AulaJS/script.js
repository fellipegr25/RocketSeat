// const aluno01 = 'Mayk'
// const notaAluno01 = 9.8

// const aluno02 = 'Diego'
// const notaAluno02 = 10

// const aluno03 = 'Fulano'
// const notaAluno03 = 2

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// if (media > 5) {
//   console.log(`A nota foi de ${media}. Parabéns`)
// } else {
//   console.log('A média é menor do que 5.')
// }

// //Calculo de IMC

// const nome = "Carlos"
// const peso = 84
// const altura = 1.88

// const imc = peso / (altura * altura);

// if (imc >= 30) {
//   console.log("Carlos você está acima do peso");
// } else {
//   console.log("Carlos você não está acima do peso");
// }

// Aula Objetos

// const alunos = [
//   {
//     nome: "Mayk",
//     nota: 9.8
//   },
//   {
//     nome: "Diego",
//     nota: 10
//   },
//   {
//     nome: "Fulano",
//     nota: 2
//   }
// ]

// const nomesDeAlunos = ["Mayk", "Diego", "Fulano"]

// const aluno01 = {
//   nome: "Mayk",
//   nota: 9.8
// }

// const aluno02 = {
//   nome: "Diego",
//   nota: 10
// }

// const aluno03 = {
//   nome: "Fulano",
//   nota: 2
// }

// console.log(aluno01)

// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// console.log(media);

// console.log(nomesDeAlunos);

// console.log(alunos);

// Aula funções e métodos

const alunosDaTurmaA = [
  {
    nome: "Mayk",
    nota: 9.8
  },
  {
    nome: "Diego",
    nota: 10
  },
 {
    nome: "Fulano",
    nota: 2
  }, 
 {
    nome: "Beltrano",
    nota: 10
  } 
]

const alunosDaTurmaB = [
  {
    nome: "Claiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Sicrano",
    nota: 0
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length;
  return media;
}

 const media1 = calculaMedia(alunosDaTurmaA)
 const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
  } else {
    console.log(`A média da turma ${turma} é menor que 5.`)
  }

}

 enviaMensagem(media1, 'turmaA')
 enviaMensagem(media2, 'TurmaB')


 function marcarComoReprovado(aluno) {
     aluno.reprovado = false;
     if (aluno.nota < 5) {
       aluno.reprovado = true;
     }

 }

 function enviarMensagemReprovado(aluno) {
   if(aluno.reprovado) {
     console.log(`O aluno ${aluno.nome} está reprovado!`);
   }
 }
 
 function alunoReprovado(alunos) {
   for(let aluno of alunos) {
     marcarComoReprovado(aluno);
     enviarMensagemReprovado(aluno);
   }
 }

 alunoReprovado(alunosDaTurmaA);
 alunoReprovado(alunosDaTurmaB);