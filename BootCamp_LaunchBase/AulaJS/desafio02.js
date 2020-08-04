const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.
`);

const programadores = [
  {
    nome: "Mayk",
    idade: 35,
    tecnologias: [
      {nome: 'C++', especialidade: 'Desktop'},
      {nome: 'Pytohon', especialidade: 'Data Science'},
      {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
  },
  {
    nome: "Diego",
    idade: 30,
    tecnologias: [
      {nome: 'C++', especialidade: 'Desktop'},
      {nome: 'Pytohon', especialidade: 'Data Science'},
      {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
  },
  {
    nome: "Fulano",
    idade: 28,
    tecnologias: [
      {nome: 'C++', especialidade: 'Desktop'},
      {nome: 'Pytohon', especialidade: 'Data Science'},
      {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
  }
]

console.log(`O programador ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`);