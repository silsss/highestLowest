//find highest and lowest from a string

function highAndLow(numbers){
    const array = numbers.split(" ")
    let lowest = +array[0]
    let highest = +array[0]
    for (let number of array){
      if (+number < lowest) lowest = number
      if (+number > highest) highest = number
    }
    
    return `${highest} ${lowest}`
  }