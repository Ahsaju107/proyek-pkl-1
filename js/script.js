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