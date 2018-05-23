const modalOpen = document.querySelector('[data-modal]');

if(modalOpen) {

  const modalId = modalOpen.getAttribute('data-modal');
  const modalElem = document.getElementById(modalId)
  modalOpen.addEventListener('click', function() {
    modalElem.classList.add("modal--open")
  })

  modalElem.addEventListener('click', function(e) {
    if(e.target == modalElem) {
      modalElem.classList.remove("modal--open")
      console.log(123)
    }

  })
}