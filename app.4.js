class MenuDesp{
    constructor(){
        this.menu = document.querySelector('.hide-menu')
        this.btnAbrirMenu = document.querySelector('#btn-abrir-menu') 
        this.btnCerrar = document.querySelector('.cerrar')
        /* this.divAdd = document.querySelector('body>div')
        
        this.divAdd.classList.add('sally') */

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
        this.btnCerrar.addEventListener('click', this.cerrarMenu.bind(this))
       
        const navbar = document.querySelector('#btnHome')
        const btnton= document.querySelector('#btn-abrir-menu') 
        

        window.addEventListener('scroll', function(e) {
          const lastPosition = window.scrollY
          if (lastPosition > 450 ) {
            navbar.classList.add('active')
            btnton.add('active')
          } else if (navbar.classList.contains('active')) {
            navbar.classList.remove('active')
            btnton.remove('active')
          } else {
            navbar.classList.remove('active')
            btnton.remove('active')
          }
        })
    }
    mostrarMenu(){
        this.menu.classList.toggle('hide-menu')
    }
    cerrarMenu(){
        this.menu.classList.toggle('hide-menu')
    }
    
}
class Links{
    constructor(){
        this.btnHome = document.querySelector('#btnHome')
        this.headerHome = document.querySelector('#home')
        this.title = document.querySelector('.uno')
        console.log(this.title)
        
    }
    
}
new Links()


document.addEventListener('DOMContentLoaded', () => {new MenuDesp()})