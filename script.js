document.addEventListener("DOMContentLoaded", () => {
  console.log("CV của Trần Gia Bảo đã sẵn sàng");

  const photo = document.querySelector(".photo img");
  if (photo) {
    photo.addEventListener("mouseenter", () => {
      photo.style.transform = "scale(1.08)";
      photo.style.transition = "0.4s ease";
      photo.style.boxShadow = "0 0 25px rgba(255,255,255,0.6)";
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.transform = "scale(1)";
      photo.style.boxShadow = "none";
    });
  }
});
