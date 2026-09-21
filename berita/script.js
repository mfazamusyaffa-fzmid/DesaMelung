const articles = [
  {
    id: 1,
    title: "IPSAL Sukses Gelar Kegiatan Menyambut HUT RI Ke-81",
    badge: "BERITA DESA",
    date: "02 Sep 2026",
    views: 88,
    image: "ipsal.png",
    link: "isiberita.html"
  },
  {
    id: 2,
    title: "Peringatan HUT RI Ke-81 di Desa Melung dengan Partisipasi Beragam",
    badge: "BERITA DESA",
    date: "18 Aug 2026",
    views: 71,
    image: "HUT RI.jfif",
    link: "#"
  },
  {
    id: 3,
    title: "Wujudkan Tertib Administrasi, Pemdes Melung Rilis Daftar Lengkap Syarat Pelayanan",
    badge: "BERITA DESA",
    date: "07 Jul 2026",
    views: 171,
    image: "krakatau.jfif",
    link: "#"
  }
];

const newsGrid = document.getElementById("newsGrid");

function renderCards(data) {
  if (!newsGrid) return;
  newsGrid.innerHTML = "";
  
  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <a href="${item.link}" class="card-image-wrap">
        <span class="card-badge">${item.badge}</span>
        <img src="${item.image}" alt="${item.title}" class="card-thumb" loading="lazy" />
      </a>
      <div class="card-content">
        <h3 class="card-title" title="${item.title}">
          <a href="${item.link}">${item.title}</a>
        </h3>
        <div class="card-footer">
          <div class="meta-stats">
            <span class="date-text"><i class="fa-regular fa-calendar"></i> ${item.date}</span>
            <span class="views-text"><i class="fa-regular fa-eye"></i> ${item.views}</span>
          </div>
          <a href="${item.link}" class="btn-baca">Baca <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(articles);
});

// POPUP MENU NAVIGASI
const navModal = document.getElementById("navModal");
const navModalName = document.getElementById("navModalName");

function bukaMenuPopup(namaMenu) {
  if (navModal && navModalName) {
    navModalName.innerText = namaMenu;
    navModal.classList.add("active");
  }
}

function tutupMenuPopup() {
  if (navModal) {
    navModal.classList.remove("active");
  }
}

window.addEventListener("click", (e) => {
  if (e.target === navModal) {
    navModal.classList.remove("active");
  }
});