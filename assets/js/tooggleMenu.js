const toggle = document.querySelector('[data-toggle]')
const navegations = document.querySelector('[data-links]')

const toggleMenu = () => {
  toggle.addEventListener('click', () => {
    if (navegations.classList.contains('hidden')) {
      navegations.classList.remove('hidden')
      navegations.classList.add('show')
    } else {
      navegations.classList.remove('show')
      navegations.classList.add('hidden')
    }
  })

  const links = navegations.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', () => {
      navegations.classList.remove('show')
      navegations.classList.add('hidden')
    })
  })

}
export default toggleMenu;
