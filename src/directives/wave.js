export default {
  bind(el, binding){

    el.addEventListener('click', createWave)

    function createWave(e){
      const circle = document.createElement('span')
      this.appendChild(circle)
      const max = Math.max(this.clientWidth, this.clientHeight)
      const elRect = el.getBoundingClientRect()

      circle.style.width = circle.style.height = max + 'px'
      circle.style.left = e.clientX - elRect.left  - max / 2 + 'px'
      circle.style.top = e.clientY - elRect.top - max / 2 + 'px'

      circle.style.backgroundColor = binding.arg || 'white'
      circle.classList.add('custom-wave')
      if(!binding.modifiers.overflow){
        el.style.overflow = 'hidden'
      }
      el.style.position = 'relative'

      setTimeout(()=>{
        circle.remove()
        circle.removeAttribute("style")
      },600)
    }
  }
}
