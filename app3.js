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
}


document.addEventListener('DOMContentLoaded', main())

