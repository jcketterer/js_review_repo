const toggleSwitch = document.querySelector('input[type="checkbox"]')

if(localStorage.getItem('darkModeEnables')) {
  document.body.className = 'dark';
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function (e) {
  const {checked} = toggleSwitch;

  if(checked) {
    localStorage.setItem('darkModeEnables', true)
  } else {
    localStorage.removeItem('darkModeEnables')
  }

  document.body.className = checked ? "dark" : "";  
})

