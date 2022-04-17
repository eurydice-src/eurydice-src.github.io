function randInt(range){
    return Math.floor(Math.random()*range);
  }

  function changeBg(){
    var red = randInt(105)+150
    var green = randInt(105)+150
    var blue = randInt(105)+150
    console.log(red,green,blue)

    let root = document.documentElement;

    root.style.setProperty('--text-color','rgb('+red+', '+green+', '+blue+')');
  }

  document.addEventListener('keydown',function(event){
      if (event.key== 'c'){
          changeBg()
      }
  })

