







//WARIS CODE

// carousel
const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Total number of items
const totalItems = document.querySelectorAll(".carousel-item1").length;

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  const offset = currentIndex * 100;
  track.style.transform = ` translateX(-${offset}%)`;
}

// Event listener for Previous button
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Event listener for Next button
nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Initialize the carousel
updateCarousel();

