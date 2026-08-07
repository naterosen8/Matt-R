document.addEventListener("DOMContentLoaded", () => {
  renderRegionCards();
  renderComparisonTable();
  wireNav();
  showRegion(REGIONS[0].id);
});

function wireNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
}

function renderRegionCards() {
  const grid = document.getElementById("region-grid");
  grid.innerHTML = REGIONS.map(
    (r) => `
    <button class="region-card" data-id="${r.id}" aria-label="View ${r.name}">
      <span class="region-card-name">${r.name}</span>
      <span class="region-card-tagline">${r.tagline}</span>
      <span class="region-card-meta">USDA ${r.usdaZones}</span>
    </button>`
  ).join("");

  grid.querySelectorAll(".region-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      showRegion(btn.dataset.id);
      document.getElementById("region-detail").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function showRegion(id) {
  const region = REGIONS.find((r) => r.id === id);
  if (!region) return;

  document.querySelectorAll(".region-card").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });

  const detail = document.getElementById("region-detail");
  detail.innerHTML = `
    <div class="detail-header">
      <div>
        <h3>${region.name}</h3>
        <p class="detail-counties">${region.counties}</p>
      </div>
      <p class="detail-tagline">${region.tagline}</p>
    </div>

    <div class="stat-row">
      <div class="stat"><span class="stat-label">Sunset Zones</span><span class="stat-value">${region.sunsetZones}</span></div>
      <div class="stat"><span class="stat-label">USDA Zones</span><span class="stat-value">${region.usdaZones}</span></div>
      <div class="stat"><span class="stat-label">Summer High</span><span class="stat-value">${region.summerHigh}</span></div>
      <div class="stat"><span class="stat-label">Winter Low</span><span class="stat-value">${region.winterLow}</span></div>
      <div class="stat"><span class="stat-label">Rainfall</span><span class="stat-value">${region.rainfall}</span></div>
      <div class="stat"><span class="stat-label">Growing Season</span><span class="stat-value">${region.growingSeason}</span></div>
    </div>

    <div class="detail-cols">
      <div class="detail-col">
        <h4>Climate</h4>
        ${region.description.map((p) => `<p>${p}</p>`).join("")}
        <h4>Soil</h4>
        <p>${region.soil}</p>
        <h4>Water</h4>
        <p>${region.water}</p>
        <h4>Watch out for</h4>
        <ul>${region.challenges.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div class="detail-col">
        <h4>What grows well</h4>
        <div class="plant-groups">
          <div><span class="plant-group-label">Vegetables</span><p>${region.plants.vegetables.join(", ")}</p></div>
          <div><span class="plant-group-label">Fruits &amp; nuts</span><p>${region.plants.fruits.join(", ")}</p></div>
          <div><span class="plant-group-label">Natives</span><p>${region.plants.natives.join(", ")}</p></div>
        </div>
        <h4>Planting &amp; harvest calendar</h4>
        ${renderCalendar(region.calendar)}
      </div>
    </div>
  `;
}

function renderCalendar(calendar) {
  const header = `
    <div class="cal-row cal-head">
      <div class="cal-crop"></div>
      ${MONTHS.map((m) => `<div class="cal-cell cal-month">${m}</div>`).join("")}
    </div>`;

  const rows = calendar
    .map((row) => {
      const cells = MONTHS.map((_, i) => {
        const isPlant = row.plant.includes(i);
        const isHarvest = row.harvest.includes(i);
        let cls = "cal-cell";
        let label = "";
        if (isPlant && isHarvest) {
          cls += " cal-both";
          label = "plant & harvest";
        } else if (isPlant) {
          cls += " cal-plant";
          label = "plant";
        } else if (isHarvest) {
          cls += " cal-harvest";
          label = "harvest";
        }
        return `<div class="${cls}" title="${label}"></div>`;
      }).join("");
      return `<div class="cal-row"><div class="cal-crop">${row.crop}</div>${cells}</div>`;
    })
    .join("");

  return `
    <div class="calendar">
      ${header}
      ${rows}
      <div class="cal-legend">
        <span><i class="swatch cal-plant"></i> plant</span>
        <span><i class="swatch cal-harvest"></i> harvest</span>
        <span><i class="swatch cal-both"></i> both</span>
      </div>
    </div>`;
}

function renderComparisonTable() {
  const body = document.getElementById("comparison-body");
  body.innerHTML = REGIONS.map(
    (r) => `
    <tr>
      <td class="compare-name">${r.name}</td>
      <td>${r.usdaZones}</td>
      <td>${r.summerHigh}</td>
      <td>${r.winterLow}</td>
      <td>${r.rainfall}</td>
      <td>${r.growingSeason}</td>
    </tr>`
  ).join("");
}
