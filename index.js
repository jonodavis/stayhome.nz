let populationInput = document.getElementById("population")
let infectedInput = document.getElementById("infected")
let sizeInput = document.getElementById("size")
let risk = document.getElementById("risk")
let fills = document.getElementsByClassName("fillBtn")

const calculate = () => {
  let chance = 1 - Math.pow((1 - infectedInput.value/populationInput.value), sizeInput.value)
  risk.innerHTML = (chance * 100).toFixed(2) + '%'
  risk.style.background = `rgba(246, 139, 139, ${chance})`
}

const fill = (e) => {
  switch(e.target.id) {
    case "USA":
      populationInput.value = 327200000
      break
    case "NZ":
      populationInput.value = 4794000
      break
    case "NYC":
      populationInput.value = 8623000
      break
    case "AKL":
      populationInput.value = 1657000
      break
    case "SYD":
      populationInput.value = 5230000
      break
    case "UK":
      populationInput.value = 66440000
      break
    case "CA":
      populationInput.value = 39560000
      break
    case "10":
      infectedInput.value = 10
      break
    case "100":
      infectedInput.value = 100
      break
    case "500":
      infectedInput.value = 500
      break
    case "1000":
      infectedInput.value = 1000
      break
    case "5000":
      infectedInput.value = 5000
      break
    case "10000":
      infectedInput.value = 10000
      break
    case "COACHELLA":
      sizeInput.value = 100000
      break
    case "NBA":
      sizeInput.value = 18000
      break
    case "CONCERT":
      sizeInput.value = 1000
      break
    case "LECTURE":
      sizeInput.value = 300
      break
    case "DINNER":
      sizeInput.value = 10
      break
    default:
      break
  }
  calculate()
}

for (let btn of fills) {
  btn.addEventListener("click", fill)
}

populationInput.addEventListener("input", calculate)
infectedInput.addEventListener("input", calculate)
sizeInput.addEventListener("input", calculate)

calculate()

// yeet