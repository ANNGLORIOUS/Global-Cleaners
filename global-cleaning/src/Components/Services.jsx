import React, { useState } from "react";

const servicesData = [
  {
    category: "Domestic Cleaning",
    details: [
      "Regular house cleaning",
      "Dusting services",
      "Deep cleaning",
      "End-of-tenancy cleaning",
      "Carpet and upholstery cleaning",
      "Window cleaning",
      "Post-renovation cleaning",
    ],
  },
  {
    category: "Commercial Cleaning",
    details: [
      "Office cleaning",
      "Retail cleaning",
      "Healthcare facility cleaning",
      "Industrial cleaning",
      "Specialized cleaning",
    ],
  },
  {
    category: "Fumigation and Pest Control Services",
    details: [
      "Termite control",
      "Bedbug extermination",
      "Cockroach and ant elimination",
      "Mosquito control",
      "Rodent management",
    ],
  },
  {
    category: "Car Interior Cleaning",
    details: [
      "Vacuuming: Seats, carpets, mats, and trunk",
      "Leather treatment: Cleaning and conditioning",
      "Dashboard and console cleaning",
      "Odor removal: Neutralizing unpleasant smells",
    ],
  },
  {
    category: "Dusting Services",
    details: [
      "Furniture dusting",
      "Electronic dusting",
      "Baseboards, frames, and window sills",
      "Ceiling fans, vents, and lighting fixtures",
    ],
  },
  {
    category: "Additional Specialized Services",
    details: [
      "Sanitization and Disinfection",
      "Event Cleaning",
      "External Cleaning",
      "Move-In/Move-Out Cleaning",
    ],
  },
];

function Services() {
  const [search, setSearch] = useState("");

  const filteredServices = servicesData.filter((service) =>
    service.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Our Services</h2>

      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredServices.map((service, index) => (
        <div key={index}>
          <h3>{service.category}</h3>
          <ul>
            {service.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      {filteredServices.length === 0 && (
        <p>No services found for "{search}"</p>
      )}
    </section>
  );
}

export default Services;
