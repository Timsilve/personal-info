function update() {
    // Tab to edit
  let day = document.getElementById('day');
  day.textContent = new Date().toLocaleDateString('en-Uk',{weekday:'long'})
  const time = document.getElementById('time')
   time.textContent = new Date().toUTCString().split(' ')[4];}
   
   update()
   setInterval(update,1000)