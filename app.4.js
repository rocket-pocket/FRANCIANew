class MenuDesp{
    constructor(){
        this.menu = document.querySelector('.hide-menu')
        this.btnAbrirMenu = document.querySelector('#btn-abrir-menu') 
        this.btnCerrar = document.querySelector('.cerrar')

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
        this.btnCerrar.addEventListener('click', this.cerrarMenu.bind(this))
       
        const navbar = document.querySelector('#btnHome')
        const btnton= document.querySelector('#btn-abrir-menu') 
        const btntonHome = document.querySelector('header .rect p')
        const btntonMenu = document.querySelector('header .logo p')
        console.log(btntonMenu)
        
        this.menu.addEventListener('click', this.cerrar.bind(this))
        
        this.btnInicio = document.querySelector('#btnHome')
        console.log(this.btnInicio)

        this.nodoGeo = document.querySelector('#geo')
        this.nodoHisto = document.querySelector('#historia')
        this.nodoEconomi = document.querySelector('#economia')
        /* this.nodoAbout = document.querySelector('#inicio') */

        this.btnInicio.addEventListener('click', this.goToIni.bind(this))


        window.addEventListener('scroll', function(e) {
          const lastPosition = window.scrollY
          if (lastPosition > 550 ) {
            navbar.classList.add('active')
            btnton.classList.add('active')
            btntonHome.classList.add('active')
            btntonMenu.classList.add('active')
          } else if (navbar.classList.contains('active')) {
            navbar.classList.remove('active')
            btnton.classlist.remove('active')
            btntonHome.classlist.remove('active')
            btntonMenu.classlist.remove('active')
          } else {
            navbar.classList.remove('active')
            btnton.classList.remove('active')
            btntonHome.classList.remove('active')
            btntonMenu.classList.remove('active')
          }
        })
    }
    goToIni(){
        this.nodoInicio = document.querySelector('#home',
         location.assign('#home'))
         /* this.nodoInicio.window.location('#geo') */
        
        console.log(this.nodoInicio)
        console.log('has hecho click')
    }
    
    cerrar(){
        this.menu.classList.toggle('hide-menu')  
    }
    mostrarMenu(){
        this.menu.classList.toggle('hide-menu')
    }
    cerrarMenu(){
        this.menu.classList.toggle('hide-menu')
    }
    
}



document.addEventListener('DOMContentLoaded', () => {new MenuDesp()})