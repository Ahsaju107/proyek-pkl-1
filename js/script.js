AOS.init();

// FUNGSI UNTUK MOBILE MENU BAR
document.getElementById('menu-toggle').addEventListener('click', //mentrigger fungsi ketika elemen dengan id 'menu-toggle' di klik
    function(){
    const mobileMenu = document.getElementById('mobile-menu'); //mengambil elemen dengan id 'mobile-menu'

    //mengambil Toggle dengan class 'hidden' untuk menampilkan atau menyembunyikan menu
    mobileMenu.classList.toggle('hidden');   //Jika 'hidden' ada, maka akan dihapus, jika tidak ada maka akan ditambahkan
});

document.getElementsByClassName('fa-bars')[0].addEventListener('click', 
    function(){
    if(this.classList.contains('fa-bars')){                 //cek apakah ada elemen dengan class 'fa-bars' (ikon hamburger)
        this.classList.replace('fa-bars', 'fa-xmark');      // mengganti class 'fa-bars' (ikon hamburger) menjadi 'fa-xmark' (ikon silang)
    } else {
        this.classList.replace('fa-xmark', 'fa-bars');      // mengganti class 'fa-xmark' (ikon silang) menjadi 'fa-bars' (ikon hamburger)
    }
});

//FUNGSI UNTUK MENUTUP MENU KETIKA MENGKLIK DILUAR MENU
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        document.getElementsByClassName('fa-xmark')[0].classList.replace('fa-xmark', 'fa-bars'); // Mengganti ikon silang kembali ke ikon hamburger
    }
});


 function openLightbox(src, title, desc) {
                document.getElementById('lightbox').classList.remove('hidden');
                document.getElementById('lightbox-img').src = src;
                document.getElementById('lightbox-title').innerText = title;
                document.getElementById('lightbox-desc').innerText = desc;
            }
            function closeLightbox() {
                document.getElementById('lightbox').classList.add('hidden');
            }