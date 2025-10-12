
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz0sjUxST9CpjB9_9OWnNXYF1qyzhrbmCEwd3Bwhb_jFM_KF_sXDztZDGhxAIu-kdwZZA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for subscribing"
        setTimeout(function(){
         msg.innerHTML = ""
        },5000)
        form.reset()
  })
      .catch(error => console.error('Error!', error.message))
  });
