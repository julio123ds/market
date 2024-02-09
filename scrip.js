document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector(".carousel");
  var inner = carousel.querySelector(".carousel-inner");
  var items = carousel.querySelectorAll(".carousel-item");
  var prev = carousel.querySelector(".carousel-control-prev");
  var next = carousel.querySelector(".carousel-control-next");
  var itemWidth = items[0].offsetWidth;
  var currentIndex = 0;

  function updateCarousel() {
    inner.style.transform = "translateX(-" + currentIndex * itemWidth + "px)";
  }

  prev.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  next.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  window.addEventListener("resize", function() {
    itemWidth = items[0].offsetWidth;
    updateCarousel();
  });
});
