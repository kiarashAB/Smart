const carousel = document.getElementById('carousel');
    const totalSlides = carousel.children.length;
    let index = 0;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById('prev').addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      updateCarousel();
    });

    updateCarousel();

document.querySelectorAll(".box").forEach((box, index) => {
    const btn = box.querySelector("#btn"); 
    const abu = box.querySelector("#abu1");
    btn.classList.add("button");

    box.addEventListener("mousemove", () => {
        btn.classList.add("btn");
    });

    box.addEventListener("mouseout", () => {
        btn.classList.remove("btn");
    });

    btn.addEventListener("click", () => {
        abu.style.opacity = "100%";
        box.style.height = "720px";
        btn.style.display = "none";
    });
});

