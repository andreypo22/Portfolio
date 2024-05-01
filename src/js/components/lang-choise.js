let enBtn = document.querySelector('.header__lang-btn--en')
let ruBtn = document.querySelector('.header__lang-btn--ru')
let langElems = document.querySelectorAll('[data-lang]')
enBtn.setAttribute('disabled', true)
enBtn.addEventListener('click', function() {
  for (let elem of langElems) {
    elem.classList.toggle('not-active')
  }
  enBtn.setAttribute('disabled', true)
  ruBtn.removeAttribute('disabled', false)
})
ruBtn.addEventListener('click', function() {
  for (let elem of langElems) {
    elem.classList.toggle('not-active')
  }
  ruBtn.setAttribute('disabled', true)
  enBtn.removeAttribute('disabled', false)
})