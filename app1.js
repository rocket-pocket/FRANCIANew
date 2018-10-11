class App{
    constructor(){
        this.btnAbrirMenu = document.querySelector('.fas')
        this.menuDesp = document.querySelector('.hide-menu')
        this.borrar = document.querySelector('body div:nth-child(16)')
        this.borrar.classList.add('hey')

        console.log(this.borrar)

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
    }
    mostrarMenu(){
        this.menuDesp.classList.toggle('hide-menu')
    }

}


document.addEventListener('DOMContentLoaded',() => {new App()})