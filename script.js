pacients = [
  {
    name: 'andré',
    surname: 'Pereira',
    age: 34,
    Weight: 80,
    heigth: 170
  },
  {
    name: 'Viviane',
    surname: 'Santos',
    age: 19,
    Weight: 79,
    heigth: 160
  },
  {
    name: 'anderson',
    surname: 'bart',
    age: 97,
    Weight: 110,
    heigth: 140
  },
  {
    name: 'Bruna',
    surname: 'loooe',
    age: 54,
    Weight: 69,
    heigth: 170
  },
  {
    name: 'Marcelo',
    surname: 'Pierre',
    age: 20,
    Weight: 93,
    heigth: 170
  }
]
function calcImcPacient(Weight, heigth) {
  return (Weight / (heigth / 100) ** 2).toFixed(2)
}

function printPacientIMC(pacient) {
  alert(
    `O paciente ${pacient.name} possui o Imc de : ${calcImcPacient(
      pacient.Weight,
      pacient.heigth
    )} `
  )
}

for (pacient of pacients) {
  printPacientIMC(pacient)
}
