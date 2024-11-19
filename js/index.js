// script.js

// Example service data (you can expand this list or fetch it from a file/API)
const services = {
  "pellet-stove-repair": {
    title: "Pellet Stove Repair Service",
    description: `
      <p>The efficiency and cost-effectiveness of a pellet stove are unmatched. 
      If your pellet stove isn't working properly, our qualified technicians in Lemon Grove can assist you.</p>
      <p>We also provide annual cleaning and inspection services to ensure your pellet stove operates efficiently.</p>
    `,
  },
  "chimney-repair": {
    title: "Chimney Repair Service",
    description: `
      <p>Our team specializes in repairing chimneys to ensure they are safe and functional. 
      From masonry repairs to liner replacements, we've got you covered.</p>
    `,
  },
  "chimney-cap-installation": {
    title: "Chimney Cap Installation Service",
    description: `
      <p>We offer chimney cap installation to prevent debris and animals from entering your chimney while improving its performance.</p>
    `,
  },
  "chimney-fireplace-repair": {
    title: "Chimney Fireplace Repair Service",
    description: `
      <p>Our fireplace repair services ensure your chimney is safe and functional, from repairing fireboxes to fixing damaged masonry.</p>
    `,
  },
  "chimney-flashing-repair": {
    title: "Chimney Flashing Repair Service",
    description: `
      <p>We repair chimney flashing to prevent leaks and water damage that can lead to expensive repairs down the line.</p>
    `,
  },
  "chimney-inspection": {
    title: "Chimney Inspection Service",
    description: `
      <p>Regular chimney inspections are vital for your safety. Our technicians thoroughly inspect your chimney for any potential issues.</p>
    `,
  },
  "chimney-liner": {
    title: "Chimney Liner Installation Service",
    description: `
      <p>We offer chimney liner installation to improve the efficiency and safety of your fireplace or stove.</p>
    `,
  },
  "chimney-masonry-repair": {
    title: "Chimney Masonry Repair Service",
    description: `
      <p>We repair and restore the masonry around your chimney, ensuring it remains structurally sound and safe to use.</p>
    `,
  },
  "chimney-rebuilds": {
    title: "Chimney Rebuild Service",
    description: `
      <p>Our chimney rebuild service is designed to restore your chimney to its original condition, whether it’s damaged or outdated.</p>
    `,
  },
  "commercial-air-duct-cleaning": {
    title: "Commercial Air Duct Cleaning Service",
    description: `
      <p>We provide thorough air duct cleaning services to improve indoor air quality and the efficiency of your HVAC system.</p>
    `,
  },
  "dryer-duct-cleaning": {
    title: "Dryer Duct Cleaning Service",
    description: `
      <p>Clogged dryer ducts can lead to safety hazards. Our technicians can clean your dryer vents to ensure efficient and safe operation.</p>
    `,
  },
  "duct-cleaning": {
    title: "Duct Cleaning Service",
    description: `
      <p>We offer comprehensive duct cleaning to remove dust, allergens, and other contaminants from your HVAC system.</p>
    `,
  },
  "firebox-repair": {
    title: "Firebox Repair Service",
    description: `
      <p>Our firebox repair services ensure that your firebox is safe and in good working order, so you can enjoy your fireplace without worry.</p>
    `,
  },
  "fireplace-cleaning": {
    title: "Fireplace Cleaning Service",
    description: `
      <p>We provide professional fireplace cleaning to remove soot, creosote, and debris, keeping your fireplace safe and functional.</p>
    `,
  },
  "gas-fireplace-cleaning": {
    title: "Gas Fireplace Cleaning Service",
    description: `
      <p>We specialize in cleaning gas fireplaces, ensuring your fireplace operates efficiently and safely.</p>
    `,
  },
  "gas-fireplace-repair": {
    title: "Gas Fireplace Repair Service",
    description: `
      <p>Our technicians provide repair services for gas fireplaces, ensuring your fireplace runs safely and efficiently.</p>
    `,
  },
  "local-chimney-sweep-and-cleaning": {
    title: "Local Chimney Sweep and Cleaning Service",
    description: `
      <p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>
    `,
  },
};


// Get the service ID from the URL (e.g., ?service=pellet-stove-repair)
const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get("service");

// Check if the service exists, then update the content
if (services[serviceId]) {
 
  document.getElementById("service-title").innerText =
    services[serviceId].title;
  document.getElementById("title").innerText = services[serviceId].title;
  document.getElementById("dynamic-with").innerText = services[serviceId].title;

  // document.querySelectorAll("title").innerText = services[serviceId].title;


  document.getElementById("main-content").innerHTML =
    services[serviceId].description;
} else {
  document.getElementById("service-title").innerText = "Local Chimney Sweep and Cleaning Service";
  document.getElementById("main-content").innerHTML = `
            <p>Our local chimney sweep services ensure your chimney is clean and free from dangerous buildup, keeping your home safe.</p>

    `;
}


