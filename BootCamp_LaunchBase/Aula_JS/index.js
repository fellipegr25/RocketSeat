const teamA = [
  {
    name: "Mayk",
    grade: 9.8
  },
  {
    name: "Robson",
    grade: 10
  },
  {
    name: "Fulano",
    grade: 2
  },
  {
    name: "Aluno04_A",
    grade: 10
  },
]

const teamB = [
  {
    name: "Cleiton",
    grade: 10
  },
  {
    name: "Robson",
    grade: 10
  },
  {
    name: "Cicrano",
    grade: 0
  },
  {
    name: "Aluno04_B",
    grade: 5
  },
]

function calculateAverage(students) {
  let sum = 0

  for (let i = 0; i < students.lenght; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.lenght

  return average
}

function sendMessage(average, team) {
  if (average > 5) {
    console.log(`${team} average: ${average}. Congrats`)
  } else {
    console.log(`${team} average: ${average}. Is not good enough.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}

const average1 = calculateAverage(teamA)
const average2 = calculateAverage(teamB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunked(teamA)
studentsFlunked(teamB)