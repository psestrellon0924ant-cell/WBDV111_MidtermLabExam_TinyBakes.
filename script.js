const track = document.querySelector(".design-track");
const cards = Array.from(document.querySelectorAll(".design-track .card"));
const prevBtn = document.querySelector(".js-prev");
const nextBtn = document.querySelector(".js-next");
const dots = Array.from(document.querySelectorAll(".dots .dot"));

if (track && cards.length && prevBtn && nextBtn) {
  let index = 0;
  let startX = 0;
  let endX = 0;
  let autoSlideId = null;

  const gap = 16;

  function cardsPerView() {
    if (window.innerWidth <= 760) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, cards.length - cardsPerView());
  }

  function updateDots() {
    if (!dots.length) return;
    const active = Math.min(index, dots.length - 1);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === active));
  }

  function update() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
    updateDots();
  }

  function next() {
    index = index >= maxIndex() ? 0 : index + 1;
    update();
  }

  function prev() {
    index = index <= 0 ? maxIndex() : index - 1;
    update();
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideId = window.setInterval(next, 2800);
  }

  function stopAutoSlide() {
    if (!autoSlideId) return;
    window.clearInterval(autoSlideId);
    autoSlideId = null;
  }

  track.addEventListener("touchstart", (event) => {
    stopAutoSlide();
    startX = event.touches[0].clientX;
  });

  track.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 40) next();
    if (endX - startX > 40) prev();
    startAutoSlide();
  });

  let isDown = false;

  track.addEventListener("mousedown", (event) => {
    stopAutoSlide();
    isDown = true;
    startX = event.clientX;
  });

  window.addEventListener("mouseup", (event) => {
    if (!isDown) return;
    isDown = false;
    endX = event.clientX;
    if (startX - endX > 40) next();
    if (endX - startX > 40) prev();
    startAutoSlide();
  });

  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);
  prevBtn.addEventListener("mouseenter", stopAutoSlide);
  nextBtn.addEventListener("mouseenter", stopAutoSlide);
  prevBtn.addEventListener("mouseleave", startAutoSlide);
  nextBtn.addEventListener("mouseleave", startAutoSlide);

  window.addEventListener("resize", () => {
    index = Math.min(index, maxIndex());
    update();
  });

  update();
  startAutoSlide();
}
