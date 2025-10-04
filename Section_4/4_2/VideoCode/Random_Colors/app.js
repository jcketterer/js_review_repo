function randRgb () {
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)

  return `rgb(${red},${green},${blue})`
}

// const h1 = document.querySelector('h1')

// setInterval(function () {
//   h1.style.color = randRgb(); 
// }, 500)

const spans = document.querySelectorAll('.letter') 
//need to grab the class so we use the . because left of the . is tag right of the . is class

const interval = setInterval(function (){
  for (let span of spans) {
    span.style.color = randRgb();
  }
}, 1000)

