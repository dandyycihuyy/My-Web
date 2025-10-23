// Menunggu sampai semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Ambil elemen-elemen yang kita butuhkan dari HTML
    const galleryContainer = document.querySelector('.gallery-container');
    const slides = document.querySelectorAll('.gallery-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Cek dulu apakah elemen galeri ada di halaman
    if (galleryContainer) {
        let currentIndex = 0; // Mulai dari foto pertama (index 0)
        const totalSlides = slides.length;

                // Fungsi untuk menampilkan slide berdasarkan index
        function showSlide(index) {
            // Logika untuk "looping" galeri
            if (index >= totalSlides) {
                currentIndex = 0; // Kembali ke awal
            } else if (index < 0) {
                currentIndex = totalSlides - 1; // Pergi ke akhir
            } else {
                currentIndex = index;
            }

            // Bagian 1: Menggeser container (SAMA SEPERTI SEBELUMNYA)
            const offset = -currentIndex * 100;
            galleryContainer.style.transform = `translateX(${offset}%)`;

            // ----- TAMBAHAN BARU -----
            // Bagian 2: Mengatur class 'active'
            
            // Pertama, hapus class 'active' dari SEMUA slide
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Lalu, tambahkan class 'active' HANYA ke slide yang sedang dituju
            slides[currentIndex].classList.add('active');
            // -------------------------
        }
        

        // Tambahkan "pendengar" klik di tombol Next
        nextBtn.addEventListener('click', function() {
            showSlide(currentIndex + 1); // Pindah ke slide berikutnya
        });

        // Tambahkan "pendengar" klik di tombol Prev
        prevBtn.addEventListener('click', function() {
            showSlide(currentIndex - 1); // Pindah ke slide sebelumnya
        });

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(currentIndex);
    }
});
