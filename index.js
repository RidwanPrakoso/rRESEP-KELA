
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

 // Fungsi untuk menampilkan resep terbaru
 function showTerbaru() {
  document.getElementById('terbaru').style.display = 'block';
  document.getElementById('populer').style.display = 'none';
}

// Fungsi untuk menampilkan resep populer
function showPopuler() {
  document.getElementById('terbaru').style.display = 'none';
  document.getElementById('populer').style.display = 'block';
}

// Fungsi untuk membuka resep kuenya
function openKueInfo(url) {
  window.location.href = url; // Mengarahkan ke halaman resep
}

function exitPage() {
  window.history.back(); // Kembali ke halaman sebelumnya
}

function toggleHeart(element) {
  element.classList.toggle('active');
}

let menuBar = document.querySelector('#menu-bar');
let searchBar = document.querySelector('.search');
let searchButton = document.querySelector('#search');


document.addEventListener('click', function(e) {
  // Jika klik bukan pada menu-bar atau navbar, hilangkan kelas 'active' dari navbar
  if (!menuBar.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
  // Jika klik bukan pada search atau navbar, hilangkan kelas 'active' dari search
  if (!searchButton.contains(e.target) && !navbar.contains(e.target)) {
    searchBar.classList.remove('active');
  }
})

