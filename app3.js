function main() {
  const animateArea = document.querySelectorAll(".animate-area");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("fade");
    } else {
      entry.target.classList.remove("fade");
    }
  });
});

animateArea.forEach(item => {
  observer.observe(item);
});

  let abrirMenu = document.querySelector('.menu')
  /* console.log(ocultarMenu, abrirMenu) */
  abrirMenu.addEventListener('click', mostrarMenu())  

  function mostrarMenu(){
    /* ocultarMenu.classList.toogle('hide') */
    console.log('hola')
    let ocultarMenu = document.querySelector('.hide')
    ocultarMenu.classList.toggle('hide')
  }


}
/* no vale */


document.addEventListener('DOMContentLoaded', main())

