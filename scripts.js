window.onload = () => {
  gsap.from("header h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
  gsap.from("header p", { duration: 1, delay: 0.5, y: -50, opacity: 0 });
  gsap.from(".option", {
    duration: 0.5,
    scale: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
};

function navigateTo(page) {
  window.location.href = page;
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".your-image-class");

  // Change image source on click
  image.addEventListener("click", () => {
    image.src = "/picture/BN.JPG"; // Change to another image
  });
});
