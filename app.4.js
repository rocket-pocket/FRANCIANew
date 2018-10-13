class MenuDesp{
    constructor(){
        this.menu = document.querySelector('.hide-menu')
        this.btnAbrirMenu = document.querySelector('#btn-abrir-menu')        

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
    }
    mostrarMenu(){
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