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
        const btntonAfter = document.querySelector('header .rect')
        console.log(btntonAfter)
        

        window.addEventListener('scroll', function(e) {
          const lastPosition = window.scrollY
          if (lastPosition > 500 ) {
            navbar.classList.add('active')
            btnton.classList.add('active')
            btntonAfter.classList.add('active')
          } else if (navbar.classList.contains('active')) {
            navbar.classList.remove('active')
            btnton.classlist.remove('active')
            btntonAfter.classlist.remove('active')
          } else {
            navbar.classList.remove('active')
            btnton.classList.remove('active')
            btntonAfter.classList.remove('active')
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