class App{
    constructor(){
        this.btnAbrirMenu = document.querySelector('.fas')
        this.menuDesp = document.querySelector('.hide-menu')

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
    }
    mostrarMenu(){
        this.menuDesp.classList.toggle('hide-menu')
    }

}

document.addEventListener('DOMContentLoaded',() => {new App()})