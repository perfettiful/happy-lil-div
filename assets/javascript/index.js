/**
 * Code Sampel found at :
 * https://flaviocopes.com/canvas/
 */


const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')


const debounce = (func) => {
    let timer
    return (event) => {
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(func, 100, event)
    }
  };
  
  window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    for (let i = 0; i < 61; i++) {
        for (let j = 0; j < 61; j++) {
          c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
          c.strokeRect(j * 20, i * 20, 20, 20)
        }
      }
  }));

  
  c.fillStyle = 'white';
  c.fillRect(100, 100, 100, 100);

//   for (let i = 0; i < 60; i++) {
//     for (let j = 0; j < 60; j++) {
//       c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
//       c.fillRect(j * 20, i * 20, 10, 10)
//     }
//   }

//   for (let i = 0; i < 60; i++) {
//     for (let j = 0; j < 60; j++) {
//       c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
//       c.fillRect(j * 20, i * 20, 20, 20)
//     }
//   }

for (let i = 0; i < 61; i++) {
  for (let j = 0; j < 61; j++) {
    c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
    c.strokeRect(j * 20, i * 20, 20, 20)
  }
}


  let mousex = undefined
  let mousey = undefined
  
  window.addEventListener('mousemove', (e) => {
    mousex = e.x
    mousey = e.y
  })
  
  if (mousex - this.x < distanceFromMouse && mousex - this.x > -distanceFromMouse && mousey - this.y < distanceFromMouse && mousey - this.y > -distanceFromMouse) {
    if (this.radius < maxRadius) this.radius += 1
  } else {
    if (this.radius > this.minRadius) this.radius -= 1
  }

  console.log("Were in!!!")