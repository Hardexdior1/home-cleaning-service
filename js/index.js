// script.js

// Example service data (you can expand this list or fetch it from a file/API)
// const services = {
//   "pellet-stove-repair": {
//     title: "Pellet Stove Repair Service",
//     description: `
//       <p>The efficiency and cost-effectiveness of a pellet stove are unmatched.
//       If your pellet stove isn't working properly, our qualified technicians in Lemon Grove can assist you.</p>
//       <p>We also provide annual cleaning and inspection services to ensure your pellet stove operates efficiently.</p>
//     `,
//   },
//   "chimney-repair": {
//     title: "Chimney Repair Service",
//     description: `
//       <p>Our team specializes in repairing chimneys to ensure they are safe and functional.
//       From masonry repairs to liner replacements, we've got you covered.</p>
//     `,
//   },
//   "chimney-cap-installation": {
//     title: "Chimney Cap Installation Service",
//     description: `
//       <p>We offer chimney cap installation to prevent debris and animals from entering your chimney while improving its performance.</p>
//     `,
//   },
//   "chimney-fireplace-repair": {
//     title: "Chimney Fireplace Repair Service",
//     description: `
//       <p>Our fireplace repair services ensure your chimney is safe and functional, from repairing fireboxes to fixing damaged masonry.</p>
//     `,
//   },
//   "chimney-flashing-repair": {
//     title: "Chimney Flashing Repair Service",
//     description: `
//       <p>We repair chimney flashing to prevent leaks and water damage that can lead to expensive repairs down the line.</p>
//     `,
//   },
//   "chimney-inspection": {
//     title: "Chimney Inspection Service",
//     description: `
//       <p>Regular chimney inspections are vital for your safety. Our technicians thoroughly inspect your chimney for any potential issues.</p>
//     `,
//   },
//   "chimney-liner": {
//     title: "Chimney Liner Installation Service",
//     description: `
//       <p>We offer chimney liner installation to improve the efficiency and safety of your fireplace or stove.</p>
//     `,
//   },
//   "chimney-masonry-repair": {
//     title: "Chimney Masonry Repair Service",
//     description: `
//       <p>We repair and restore the masonry around your chimney, ensuring it remains structurally sound and safe to use.</p>
//     `,
//   },
//   "chimney-rebuilds": {
//     title: "Chimney Rebuild Service",
//     description: `
//       <p>Our chimney rebuild service is designed to restore your chimney to its original condition, whether it’s damaged or outdated.</p>
//     `,
//   },
//   "commercial-air-duct-cleaning": {
//     title: "Commercial Air Duct Cleaning Service",
//     description: `
//       <p>We provide thorough air duct cleaning services to improve indoor air quality and the efficiency of your HVAC system.</p>
//     `,
//   },
//   "dryer-duct-cleaning": {
//     title: "Dryer Duct Cleaning Service",
//     description: `
//       <p>Clogged dryer ducts can lead to safety hazards. Our technicians can clean your dryer vents to ensure efficient and safe operation.</p>
//     `,
//   },
//   "duct-cleaning": {
//     title: "Duct Cleaning Service",
//     description: `
//       <p>We offer comprehensive duct cleaning to remove dust, allergens, and other contaminants from your HVAC system.</p>
//     `,
//   },
//   "firebox-repair": {
//     title: "Firebox Repair Service",
//     description: `
//       <p>Our firebox repair services ensure that your firebox is safe and in good working order, so you can enjoy your fireplace without worry.</p>
//     `,
//   },
//   "fireplace-cleaning": {
//     title: "Fireplace Cleaning Service",
//     description: `
//       <p>We provide professional fireplace cleaning to remove soot, creosote, and debris, keeping your fireplace safe and functional.</p>
//     `,
//   },
//   "gas-fireplace-cleaning": {
//     title: "Gas Fireplace Cleaning Service",
//     description: `
//       <p>We specialize in cleaning gas fireplaces, ensuring your fireplace operates efficiently and safely.</p>
//     `,
//   },
//   "gas-fireplace-repair": {
//     title: "Gas Fireplace Repair Service",
//     description: `
//       <p>Our technicians provide repair services for gas fireplaces, ensuring your fireplace runs safely and efficiently.</p>
//     `,
//   },
//   "local-chimney-sweep-and-cleaning": {
//     title: "Local Chimney Sweep and Cleaning Service",
//     description: `
//       <p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>
//     `,
//   },
// };

// const services = {
//   "pellet-stove-repair": {
//     id: 1,
//     title: "Pellet Stove Repair Service",
//     description: `
//       <p>The efficiency and cost-effectiveness of a pellet stove are unmatched.
//       If your pellet stove isn't working properly, our qualified technicians in Lemon Grove can assist you.</p>
//       <p>We also provide annual cleaning and inspection services to ensure your pellet stove operates efficiently.</p>
//     `,
//   },
//   "chimney-repair": {
//     id: 2,
//     title: "Chimney Repair Service",
//     description: `
//       <p>Our team specializes in repairing chimneys to ensure they are safe and functional.
//       From masonry repairs to liner replacements, we've got you covered.</p>
//     `,
//   },
//   "chimney-cap-installation": {
//     id: 3,
//     title: "Chimney Cap Installation Service",
//     description: `
//       <p>We offer chimney cap installation to prevent debris and animals from entering your chimney while improving its performance.</p>
//     `,
//   },
//   "chimney-fireplace-repair": {
//     id: 4,
//     title: "Chimney Fireplace Repair Service",
//     description: `
//       <p>Our fireplace repair services ensure your chimney is safe and functional, from repairing fireboxes to fixing damaged masonry.</p>
//     `,
//   },
//   "chimney-flashing-repair": {
//     id: 5,
//     title: "Chimney Flashing Repair Service",
//     description: `
//       <p>We repair chimney flashing to prevent leaks and water damage that can lead to expensive repairs down the line.</p>
//     `,
//   },
//   "chimney-inspection": {
//     id: 6,
//     title: "Chimney Inspection Service",
//     description: `
//       <p>Regular chimney inspections are vital for your safety. Our technicians thoroughly inspect your chimney for any potential issues.</p>
//     `,
//   },
//   "chimney-liner": {
//     id: 7,
//     title: "Chimney Liner Installation Service",
//     description: `
//       <p>We offer chimney liner installation to improve the efficiency and safety of your fireplace or stove.</p>
//     `,
//   },
//   "chimney-masonry-repair": {
//     id: 8,
//     title: "Chimney Masonry Repair Service",
//     description: `
//       <p>We repair and restore the masonry around your chimney, ensuring it remains structurally sound and safe to use.</p>
//     `,
//   },
//   "chimney-rebuilds": {
//     id: 9,
//     title: "Chimney Rebuild Service",
//     description: `
//       <p>Our chimney rebuild service is designed to restore your chimney to its original condition, whether it’s damaged or outdated.</p>
//     `,
//   },
//   "commercial-air-duct-cleaning": {
//     id: 10,
//     title: "Commercial Air Duct Cleaning Service",
//     description: `
//       <p>We provide thorough air duct cleaning services to improve indoor air quality and the efficiency of your HVAC system.</p>
//     `,
//   },
//   "dryer-duct-cleaning": {
//     id: 11,
//     title: "Dryer Duct Cleaning Service",
//     description: `
//       <p>Clogged dryer ducts can lead to safety hazards. Our technicians can clean your dryer vents to ensure efficient and safe operation.</p>
//     `,
//   },
//   "duct-cleaning": {
//     id: 12,
//     title: "Duct Cleaning Service",
//     description: `
//       <p>We offer comprehensive duct cleaning to remove dust, allergens, and other contaminants from your HVAC system.</p>
//     `,
//   },
//   "firebox-repair": {
//     id: 13,
//     title: "Firebox Repair Service",
//     description: `
//       <p>Our firebox repair services ensure that your firebox is safe and in good working order, so you can enjoy your fireplace without worry.</p>
//     `,
//   },
//   "fireplace-cleaning": {
//     id: 14,
//     title: "Fireplace Cleaning Service",
//     description: `
//       <p>We provide professional fireplace cleaning to remove soot, creosote, and debris, keeping your fireplace safe and functional.</p>
//     `,
//   },
//   "gas-fireplace-cleaning": {
//     id: 15,
//     title: "Gas Fireplace Cleaning Service",
//     description: `
//       <p>We specialize in cleaning gas fireplaces, ensuring your fireplace operates efficiently and safely.</p>
//     `,
//   },
//   "gas-fireplace-repair": {
//     id: 16,
//     title: "Gas Fireplace Repair Service",
//     description: `
//       <p>Our technicians provide repair services for gas fireplaces, ensuring your fireplace runs safely and efficiently.</p>
//     `,
//   },
//   "local-chimney-sweep-and-cleaning": {
//     id: 17,
//     title: "Local Chimney Sweep and Cleaning Service",
//     description: `
//       <p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>
//     `,
//     text: "hello",
//   },
// };

// // Get the service ID from the URL (e.g., ?service=pellet-stove-repair)
// const urlParams = new URLSearchParams(window.location.search);
// const serviceId = urlParams.get("service");

// // Check if the service exists, then update the content
// if (services[serviceId]) {

// // appending
// let dynamicParagraphCarrier = document.querySelector(".dynamicParagraph");
// let text1 = document.createElement("p");
// text1.innerHTML = services[serviceId].text;
// dynamicParagraphCarrier.appendChild(text1);

// console.log(dynamicParagraphCarrier,text1);

//   document.getElementById("service-title").innerText =
//     services[serviceId].title;
//   document.getElementById("title").innerText = services[serviceId].title;

//   document.getElementById("dynamic-with").innerText = services[serviceId].title;
//   document.querySelectorAll(".dynamic").forEach((item) => {
//     return (item.innerText = services[serviceId].title);
//   });

//   // document.querySelectorAll("title").innerText = services[serviceId].title;

//   document.getElementById("main-content").innerHTML =
//     services[serviceId].description;

//   Object.entries(services).forEach(([key, value]) => console.log(value.id));
// } else {
//   document.getElementById("service-title").innerText =
//     "Local Chimney Sweep and Cleaning Service";
//   document.getElementById("dynamic-with").innerText =
//     "Local Chimney Sweep and Cleaning Service";

//   document.getElementById("main-content").innerHTML = `
//             <p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>

//     `;
// }

const services = {
  "pellet-stove-repair": {
    title: "Pellet Stove Repair Service",
    title2: "Pellet Stoves Need Annual Cleaning and Service in Lemon Grove",
    description: `
      <p>The efficiency and cost-effectiveness of a pellet stove are unmatched.
      If your pellet stove isn't working properly, our qualified technicians in Lemon Grove can assist you.</p>
      <p>We also provide annual cleaning and inspection services to ensure your pellet stove operates efficiently.</p>
    `,
    description2: `
      <p>Even if you don’t notice any obvious issues, our experts suggest an annual inspection to make sure that your pellet stove continues to work appropriately.</p>
    `,
  },
  "chimney-repair": {
    title: "Chimney Repair Service",
    title2: "Chimneys Require Routine Maintenance in Lemon Grove",
    description: `
      <p>Our team specializes in repairing chimneys to ensure they are safe and functional.
      From masonry repairs to liner replacements, we've got you covered.</p>
    `,
    description2: `
      <p>Even minor cracks or damage can escalate quickly. Routine maintenance ensures your chimney remains in excellent condition.</p>
    `,
  },
  "chimney-cap-installation": {
    title: "Chimney Cap Installation Service",
    title2: "Protect Your Chimney with a Cap in Lemon Grove",
    description: `
      <p>We offer chimney cap installation to prevent debris and animals from entering your chimney while improving its performance.</p>
    `,
    description2: `
      <p>A chimney cap provides essential protection against rain, debris, and animals. Regular inspection and timely installation keep your chimney in peak condition.</p>
    `,
  },
  "chimney-fireplace-repair": {
    title: "Chimney Fireplace Repair Service",
    title2: "Keep Your Fireplace Safe with Expert Repairs",
    description: `
      <p>Our fireplace repair services ensure your chimney is safe and functional, from repairing fireboxes to fixing damaged masonry.</p>
    `,
    description2: `
      <p>Annual inspections and repairs help avoid hazards and maintain the charm of your fireplace.</p>
    `,
  },
  "chimney-flashing-repair": {
    title: "Chimney Flashing Repair Service",
    title2: "Avoid Water Damage with Flashing Repairs",
    description: `
      <p>We repair chimney flashing to prevent leaks and water damage that can lead to expensive repairs down the line.</p>
    `,
    description2: `
      <p>Protect your home from costly water intrusion by ensuring the flashing around your chimney is in top condition.</p>
    `,
  },
  "chimney-inspection": {
    title: "Chimney Inspection Service",
    title2: "Annual Inspections Keep Your Chimney Safe",
    description: `
      <p>Regular chimney inspections are vital for your safety. Our technicians thoroughly inspect your chimney for any potential issues.</p>
    `,
    description2: `
      <p>Schedule an inspection today to avoid costly repairs and ensure your chimney operates safely year-round.</p>
    `,
  },
  "chimney-liner": {
    title: "Chimney Liner Installation Service",
    title2: "Improve Chimney Efficiency with a Liner",
    description: `
      <p>We offer chimney liner installation to improve the efficiency and safety of your fireplace or stove.</p>
    `,
    description2: `
      <p>A properly installed liner enhances draft efficiency and protects your home from heat transfer.</p>
    `,
  },
  "chimney-masonry-repair": {
    title: "Chimney Masonry Repair Service",
    title2: "Restore the Strength of Your Chimney",
    description: `
      <p>We repair and restore the masonry around your chimney, ensuring it remains structurally sound and safe to use.</p>
    `,
    description2: `
      <p>Deteriorated bricks or mortar can lead to safety concerns. Ensure your chimney's longevity with expert masonry repairs.</p>
    `,
  },
  "chimney-rebuilds": {
    title: "Chimney Rebuild Service",
    title2: "Chimney Rebuilds Ensure Safety and Longevity",
    description: `
      <p>Our chimney rebuild service is designed to restore your chimney to its original condition, whether it’s damaged or outdated.</p>
    `,
    description2: `
      <p>A full chimney rebuild offers a fresh start for safety and style, ensuring lasting durability.</p>
    `,
  },
  "commercial-air-duct-cleaning": {
    title: "Commercial Air Duct Cleaning Service",
    title2: "Cleaner Air for Your Commercial Space",
    description: `
      <p>We provide thorough air duct cleaning services to improve indoor air quality and the efficiency of your HVAC system.</p>
    `,
    description2: `
      <p>Improve air quality and reduce allergens in your business environment with our specialized duct cleaning services.</p>
    `,
  },
  "dryer-duct-cleaning": {
    title: "Dryer Duct Cleaning Service",
    title2: "Prevent Hazards with Dryer Duct Cleaning",
    description: `
      <p>Clogged dryer ducts can lead to safety hazards. Our technicians can clean your dryer vents to ensure efficient and safe operation.</p>
    `,
    description2: `
      <p>Regular cleaning prevents fire risks and ensures your dryer operates at peak efficiency.</p>
    `,
  },
  "duct-cleaning": {
    title: "Duct Cleaning Service",
    title2: "Cleaner Ducts Mean Better Air Quality",
    description: `
      <p>We offer comprehensive duct cleaning to remove dust, allergens, and other contaminants from your HVAC system.</p>
    `,
    description2: `
      <p>Enjoy fresher, healthier air with a thorough cleaning of your HVAC system ducts.</p>
    `,
  },
  "firebox-repair": {
    title: "Firebox Repair Service",
    title2: "Maintain a Safe Firebox with Expert Repairs",
    description: `
      <p>Our firebox repair services ensure that your firebox is safe and in good working order, so you can enjoy your fireplace without worry.</p>
    `,
    description2: `
      <p>Cracks and damage compromise your firebox's safety. Let us restore its integrity and reliability.</p>
    `,
  },
  "fireplace-cleaning": {
    title: "Fireplace Cleaning Service",
    title2: "Safe and Efficient Fireplace Cleaning",
    description: `
      <p>We provide professional fireplace cleaning to remove soot, creosote, and debris, keeping your fireplace safe and functional.</p>
    `,
    description2: `
      <p>Maintain a clean and safe fireplace to enjoy warm and worry-free evenings.</p>
    `,
  },
  "gas-fireplace-cleaning": {
    title: "Gas Fireplace Cleaning Service",
    title2: "Ensure Your Gas Fireplace Operates Smoothly",
    description: `
      <p>We specialize in cleaning gas fireplaces, ensuring your fireplace operates efficiently and safely.</p>
    `,
    description2: `
      <p>Clear residue and maintain safe operation with professional cleaning services for your gas fireplace.</p>
    `,
  },
  "gas-fireplace-repair": {
    title: "Gas Fireplace Repair Service",
    title2: "Reliable Repairs for Your Gas Fireplace",
    description: `
      <p>Our technicians provide repair services for gas fireplaces, ensuring your fireplace runs safely and efficiently.</p>
    `,
    description2: `
      <p>From ignition issues to performance problems, our experts provide solutions for reliable gas fireplace operation.</p>
    `,
  },
};


// Get the service ID from the URL (e.g., ?service=pellet-stove-repair)
const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get("service");

// Check if the service exists, then update the content
// Check if the service exists, then update the content
// if (services[serviceId]) {
//   // Update the service title
//   document.getElementById("service-title").innerText = services[serviceId].title;

//   // Update the secondary service title
//   document.getElementById("service-title2").innerText = services[serviceId].title2;

//   // Update the main content
//   document.getElementById("main-content").innerHTML = services[serviceId].description;

//   // Update the second main content
//   document.getElementById("main-content2").innerHTML = services[serviceId].description2;

//   // Update all elements with class "dynamic"
//   document.querySelectorAll(".dynamic").forEach((item) => {
//     item.innerText = services[serviceId].title;
//   });

//   // Append description2 to the first dynamicParagraphCarrier
//   let dynamicParagraphCarrier = document.querySelector(".dynamicParagraph");
//   let description2 = document.createElement("p");
//   description2.innerHTML = services[serviceId].description2;
//   dynamicParagraphCarrier.appendChild(description2);

//   // Append description2 to the second dynamicParagraphCarrier
//   let dynamicParagraphCarrier2 = document.querySelector(".dynamicParagraph2");
//   let description2Copy = document.createElement("p");
//   description2Copy.innerHTML = services[serviceId].description2;
//   dynamicParagraphCarrier2.appendChild(description2Copy);

//   // Update the title and dynamic-with ID content
//   document.getElementById("title").innerText = services[serviceId].title2; // Use title2 here
//   document.getElementById("dynamic-with").innerText = services[serviceId].title;
// } else {
//   // Default values when the service is not found
//   document.getElementById("service-title").innerText = "Local Chimney Sweep and Cleaning Service";
//   document.getElementById("service-title2").innerText = "Keep Your Chimney in Top Shape with Regular Service";

//   document.getElementById("main-content").innerHTML =
//     "<p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>";

//   let dynamicParagraphCarrier = document.querySelector(".dynamicParagraph");
//   let description2 = document.createElement("p");
//   description2.innerHTML =
//     "Our professional chimney cleaning services remove harmful buildup and debris, ensuring your chimney operates safely and efficiently.";
//   dynamicParagraphCarrier.appendChild(description2);

//   let dynamicParagraphCarrier2 = document.querySelector(".dynamicParagraph2");
//   let description2Copy = document.createElement("p");
//   description2Copy.innerHTML =
//     "Our professional chimney cleaning services remove harmful buildup and debris, ensuring your chimney operates safely and efficiently.";
//   dynamicParagraphCarrier2.appendChild(description2Copy);
// }

if (services[serviceId]) {
  // Update the service title
  const serviceTitle = document.getElementById("service-title");
  if (serviceTitle) {
    serviceTitle.innerText = services[serviceId].title;
  }

  // Update the secondary service title
  const serviceTitle2 = document.getElementById("service-title2");
  if (serviceTitle2) {
    serviceTitle2.innerText = services[serviceId].title2;
  }

  // Update the main content
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.innerHTML = services[serviceId].description;
  }

  // Update the second main content
  const mainContent2 = document.getElementById("main-content2");
  if (mainContent2) {
    mainContent2.innerHTML = services[serviceId].description2;
  }

  // Update all elements with class "dynamic"
  const dynamicElements = document.querySelectorAll(".dynamic");
  if (dynamicElements.length > 0) {
    dynamicElements.forEach((item) => {
      item.innerText = services[serviceId].title;
    });
  }

  // Append description2 to the first dynamicParagraphCarrier
  const dynamicParagraphCarrier = document.querySelector(".dynamicParagraph");
  if (dynamicParagraphCarrier) {
    let description2 = document.createElement("p");
    description2.innerHTML = services[serviceId].description2;
    dynamicParagraphCarrier.appendChild(description2);
  }

  // Append description2 to the second dynamicParagraphCarrier
  const dynamicParagraphCarrier2 = document.querySelector(".dynamicParagraph2");
  if (dynamicParagraphCarrier2) {
    let description2Copy = document.createElement("p");
    description2Copy.innerHTML = services[serviceId].description2;
    dynamicParagraphCarrier2.appendChild(description2Copy);
  }

  // Update the title and dynamic-with ID content
  const title = document.getElementById("title");
  if (title) {
    title.innerText = services[serviceId].title2; // Use title2 here
  }

  const dynamicWith = document.getElementById("dynamic-with");
  if (dynamicWith) {
    dynamicWith.innerText = services[serviceId].title;
  }
} else {
  // Default values when the service is not found
  const serviceTitle = document.getElementById("service-title");
  if (serviceTitle) {
    serviceTitle.innerText = "Local Chimney Sweep and Cleaning Service";
  }

  const serviceTitle2 = document.getElementById("service-title2");
  if (serviceTitle2) {
    serviceTitle2.innerText =
      "Keep Your Chimney in Top Shape with Regular Service";
  }

  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.innerHTML =
      "<p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>";
  }

  const dynamicParagraphCarrier = document.querySelector(".dynamicParagraph");
  if (dynamicParagraphCarrier) {
    let description2 = document.createElement("p");
    description2.innerHTML =
      "Our professional chimney cleaning services remove harmful buildup and debris, ensuring your chimney operates safely and efficiently.";
    dynamicParagraphCarrier.appendChild(description2);
  }

  const dynamicParagraphCarrier2 = document.querySelector(".dynamicParagraph2");
  if (dynamicParagraphCarrier2) {
    let description2Copy = document.createElement("p");
    description2Copy.innerHTML =
      "Our professional chimney cleaning services remove harmful buildup and debris, ensuring your chimney operates safely and efficiently.";
    dynamicParagraphCarrier2.appendChild(description2Copy);
  }
}




//WARIS CODE

// carousel
const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Total number of items
const totalItems = document.querySelectorAll(".carousel-item").length;

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
const serve = document.querySelector(".service-buttons-containerss");
const serviceHide = document.querySelector(".serviceHide");
function HideNaveBar() {
  if (serve.classList.contains("hide")) {
    serve.classList.remove("hide");
  } else {
    serve.classList.add("hide");
  }
}

serviceHide.addEventListener("click", HideNaveBar);

const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");

function SibeBar() {
  if (list.classList.contains("hides")) {
    list.classList.remove("hides");
  } else {
    list.classList.add("hides");
  }
}

hamburger.addEventListener("click", SibeBar);

const accordion = document.querySelectorAll(".question");
const hidden = document.querySelectorAll(".answer");

function Array() {
  accordion.forEach((item, indexs) => {
    item.addEventListener("click", () => {
      if (item) {
        hidden.forEach((item, index) => {
          if (index === indexs && item.classList.contains("hidden")) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      }
    });
  });
}

Array();

// // Initialize the map and set the default view (centered on Location 6100)
// var map = L.map("map").setView([34.200325, -118.598394], 13); // Default to Location 6100

// // Add OpenStreetMap tile layer
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Define markers for the two locations
// var location6100 = L.marker([34.200325, -118.598394]).bindPopup(
//   "6100 Archwood St, West Hills, 91307"
// );
// var location91307 = L.marker([34.200325, -118.598394]).bindPopup(
//   "ZIP Code 91307 (West Hills)"
// );

// // Add the markers to the map
// location6100.addTo(map);
// location91307.addTo(map);

// // Function to move to a specific location when a button is clicked
// function moveToLocation(lat, lng, zoomLevel) {
//   map.setView([lat, lng], zoomLevel);
// }

// // Add event listeners to the buttons
// document.getElementById("location-6100").addEventListener("click", function () {
//   moveToLocation(34.200325, -118.598394, 13); // Zoom to location 6100
// });

// document
//   .getElementById("location-91307")
//   .addEventListener("click", function () {
//     moveToLocation(34.200325, -118.598394, 13); // Zoom to ZIP Code 91307
//   });



