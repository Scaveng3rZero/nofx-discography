const timeline = document.getElementById("timeline");
const coverImage = document.getElementById("coverImage");
const title = document.getElementById("title");
const yearLabel = document.getElementById("yearLabel");
const description = document.getElementById("description");
const tracklist = document.getElementById("tracklist");
const metaRow = document.getElementById("metaRow");
const counter = document.getElementById("counter");
const heroBus = document.getElementById("heroBus");
const featureScene = document.getElementById("featureScene");
const parallaxLayers = featureScene.querySelectorAll(".parallax-layer");

let current = 0;

function renderTimeline() {
  timeline.innerHTML = albums.map((album, index) => `
    <button
      class="year-btn ${index === current ? "active" : ""}"
      data-index="${index}"
      role="tab"
      aria-selected="${index === current ? "true" : "false"}"
      aria-label="Go to ${album.year}: ${album.title}"
      tabindex="${index === current ? "0" : "-1"}"
    >
      <span>${album.year}</span>
    </button>
  `).join("");

  timeline.querySelectorAll(".year-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateAlbum(Number(btn.dataset.index));
      btn.focus();
    });

    btn.addEventListener("keydown", handleTimelineKeys);
  });
}

function updateAlbum(index) {
  current = index;
  const album = albums[index];
  const pos = 12 + (index * (76 / (albums.length - 1)));

  heroBus.classList.add("moving");

  title.textContent = album.title;
  yearLabel.textContent = album.year;
  description.textContent = album.description;

  coverImage.src = album.cover;
  coverImage.alt = `${album.title} album cover`;

  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(albums.length).padStart(2, "0")}`;
  heroBus.style.setProperty("--bus-pos", `${pos}%`);

  metaRow.innerHTML = `
    <div class="meta-pill">${album.type}</div>
    <div class="meta-pill">${album.vibe}</div>
    <div class="meta-pill">Timeline stop ${index + 1}</div>
  `;

  tracklist.innerHTML = album.tracks
    .map((track) => `<li>${track}</li>`)
    .join("");

  timeline.querySelectorAll(".year-btn").forEach((btn, i) => {
    const isActive = i === index;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  window.clearTimeout(updateAlbum.busTimeout);
  updateAlbum.busTimeout = window.setTimeout(() => {
    heroBus.classList.remove("moving");
  }, 900);
}

function handleTimelineKeys(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    const next = (current + 1) % albums.length;
    updateAlbum(next);
    focusActiveButton();
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    const prev = (current - 1 + albums.length) % albums.length;
    updateAlbum(prev);
    focusActiveButton();
  }

  if (event.key === "Home") {
    event.preventDefault();
    updateAlbum(0);
    focusActiveButton();
  }

  if (event.key === "End") {
    event.preventDefault();
    updateAlbum(albums.length - 1);
    focusActiveButton();
  }
}

function focusActiveButton() {
  const active = timeline.querySelector(".year-btn.active");
  if (active) active.focus();
}

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  featureScene.addEventListener("mousemove", (e) => {
    const rect = featureScene.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    parallaxLayers.forEach((layer) => {
      const speed = Number(layer.dataset.speed || 1);
      const moveX = x * speed * 16;
      const moveY = y * speed * 8;

      if (layer.classList.contains("scene-mountains")) {
        layer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08)`;
      } else {
        layer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });
  });

  featureScene.addEventListener("mouseleave", () => {
    parallaxLayers.forEach((layer) => {
      if (layer.classList.contains("scene-mountains")) {
        layer.style.transform = "translate(0, 0) scale(1.08)";
      } else {
        layer.style.transform = "translate(0, 0) scale(1.05)";
      }
    });
  });
}

renderTimeline();
updateAlbum(0);
initParallax();
