console.log('[+]')

const apps = document.querySelectorAll('.app')

if(apps) {
  apps.forEach(app => {
    app.addEventListener('click', () => {
      location.href = app.getAttribute('meta-url')
    })
  })
}