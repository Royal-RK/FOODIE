let bnrSwiper = new Swiper(".bnrSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".bnr-swiper-pagination",
    clickable: true,
  },
});

// Testimonial slider
let testimoniSwiper = new Swiper(".testimoniSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".testimoni-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 40,
    // },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// Feedback section counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = Number(counter.dataset.target);
  let count = 0;

  function updateCounter() {
    count += target / 100;

    if (count < target) {
      counter.textContent = Math.floor(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  }

  updateCounter();
});
