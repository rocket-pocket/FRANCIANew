class FadeUp{
    constructor(){
        this.animateArea = document.querySelectorAll('.animate-area')

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio > 0) {
                entry.target.classList.add("fade");
              } else {
                entry.target.classList.remove("fade");
              }
            });
          });
          this.animateArea.forEach((item)=>{
              item.observer
        })

          /* this.cajasPort.forEach((item) => {item.classList.toggle('hidden')}) */
    }
}

class AbrirMenu{
    constructor(){
        this.menu = document.querySelector('#btn_abrir')
        this.menuOculto = document.querySelector('.hide')

        this.menu.addEventListener('click', this.mostrarMenu.bind(this))
    }
    mostrarMenu(){
        this.menuOculto.classList.toggle('hide')
    }
}

document.addEventListener('DOMContentLoaded', ()=>{new FadeUp(), new AbrirMenu})