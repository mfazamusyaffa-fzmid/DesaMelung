const articles = [
  {
    id: 1,
    title: "IPSAL Sukses Gelar Kegiatan Menyambut HUT RI Ke-81",
    badge: "BERITA DESA",
    date: "02 Sep 2026",
    views: 88,
    image: "ipsal.png",
    link: "isi berita 1.html"
  },
  {
    id: 2,
    title: "Peringatan HUT RI Ke-81 di Desa Melung dengan Partisipasi Beragam",
    badge: "BERITA DESA",
    date: "18 Aug 2026",
    views: 71,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Wujudkan Tertib Administrasi, Pemdes Melung Rilis Daftar Lengkap Syarat Pel...",
    badge: "BERITA DESA",
    date: "07 Jul 2026",
    views: 171,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

const newsGrid = document.getElementById("newsGrid");
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

function openImage(src) {
  if (!imageModal || !modalImg) return;
  modalImg.src = src;
  imageModal.classList.add("active");
}

if (closeModal && imageModal) {
  closeModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
  });

  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove("active");
    }
  });
}

function renderCards(data) {
  if (!newsGrid) return;
  newsGrid.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <div class="card-image-wrap" onclick="openImage('${item.image}')">
        <span class="card-badge">${item.badge}</span>
        <img src="${item.image}" alt="${item.title}" class="card-thumb" loading="lazy" />
      </div>
      <div class="card-content">
        <h4 class="card-title" title="${item.title}">
          <a href="${item.link}">${item.title}</a>
        </h4>
        <div class="card-footer">
          <div class="meta-stats">
            <span class="date-text"><i class="fa-regular fa-calendar"></i> ${item.date}</span>
            <span class="views-text"><i class="fa-regular fa-eye"></i> ${item.views}</span>
          </div>
          <a href="${item.link}" class="btn-baca">Baca &rarr;</a>
        </div>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

renderCards(articles);

// --- TAMBAHAN SCRIPT UNTUK MENU POPUP --- //
const navModal = document.getElementById("navModal");
const navModalName = document.getElementById("navModalName");

// Fungsi buka popup
function bukaMenuPopup(namaMenu) {
  if(navModal && navModalName) {
    // Ubah text sesuai menu yang di-klik
    navModalName.innerText = namaMenu;
    navModal.classList.add("active");
  }
}

// Fungsi tutup popup
function tutupMenuPopup() {
  if(navModal) {
    navModal.classList.remove("active");
  }
}

// Tutup pop-up menu jika klik area gelap di luar box putih
window.addEventListener("click", (e) => {
  if (e.target === navModal) {
    navModal.classList.remove("active");
  }
});