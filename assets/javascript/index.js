const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')
canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const debounce = (func) => {
    let timer
    return (event) => {
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(func, 100, event)
    }
  }
  
  window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }))


  c.fillRect(100, 100, 100, 100)