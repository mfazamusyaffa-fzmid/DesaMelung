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

// --- SCRIPT UNTUK MENU POPUP NAVIGASI --- //
const navModal = document.getElementById("navModal");
const navModalName = document.getElementById("navModalName");

// Fungsi buka popup
function bukaMenuPopup(namaMenu) {
  if(navModal && navModalName) {
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