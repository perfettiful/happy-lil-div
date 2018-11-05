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
  }));

  
  c.fillStyle = 'white';
  c.fillRect(100, 100, 100, 100);

  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
      c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
      c.fillRect(j * 20, i * 20, 10, 10)
    }
  }

  console.log("Were in!!!")