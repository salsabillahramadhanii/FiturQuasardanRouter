<template>
  <q-page class="index-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to our Gaming Store: <br>Where Every Gamer Finds Their Paradise</h1>
        <p class="q-mt-md text-h6">Temukan perlengkapan gaming terbaik untuk memaksimalkan pengalaman bermain Anda!</p>
        <q-btn color="primary" label="Lihat Produk Kami" to="/product" size="lg" class="q-mt-lg animated-btn" />
      </div>
    </section>

    <section class="carousel-section q-mt-xl q-mb-xl">
      <h2 class="text-center text-dark-gaming q-mb-lg">Produk Unggulan Pilihan</h2>
      <q-carousel
        v-model="slide"
        animated
        control-type="flat"
        control-color="white"
        navigation
        infinite
        arrows
        :autoplay="3000"
        height="350px"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="custom-carousel rounded-borders shadow-3"
      >
        <q-carousel-slide :name="1" img-src="/images/carousel-laptop.jpg">
          <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Laptop Gaming Generasi Terbaru</div>
            <div class="text-subtitle1">Performa Maksimal untuk Kemenangan Anda</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/carousel-headset.jpg">
          <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Audio Imersif dengan Headset Terbaik</div>
            <div class="text-subtitle1">Dengar Setiap Detil dalam Pertempuran</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="/images/carousel-mouse.jpg">
          <div class="absolute-bottom custom-caption-carousel text-center">
            <div class="text-h4 text-weight-bold">Mouse Gaming Presisi Tinggi</div>
            <div class="text-subtitle1">Kendalikan Setiap Gerakan dengan Akurat</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <section class="products-section">
      <h2 class="text-center text-dark-gaming q-mb-lg">Koleksi Produk Kami</h2>
      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :name="product.name"
        />
      </div>
    </section>

    <footer class="app-footer text-center q-py-lg q-mt-xl">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Gor Indonesia. All rights reserved.</p>
        <p>Hubungi Kami: <a href="mailto:info@gorgaming.com">info@gorgaming.com</a> | Telp: (123) 456-7890</p>
        <div class="social-links q-mt-md">
          <q-btn flat round color="white" icon="fab fa-facebook" href="#" target="_blank" class="q-mx-sm" />
          <q-btn flat round color="white" icon="fab fa-instagram" href="#" target="_blank" class="q-mx-sm" />
          <q-btn flat round color="white" icon="fab fa-twitter" href="#" target="_blank" class="q-mx-sm" />
          <q-btn flat round color="white" icon="fab fa-youtube" href="#" target="_blank" class="q-mx-sm" />
        </div>
      </div>
    </footer>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ProductCard from 'components/ProductCard.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ProductCard
  },
  setup() {
    const products = [
      { id: 1, name: 'RazorPhone X1', image: '/images/RazorPhone X1.png' },
      { id: 2, name: 'StealthGame Pad', image: '/images/StealthGame Pad.png' },
      { id: 3, name: 'PowerGaming Laptop X', image: '/images/PowerGaming Laptop X.png' },
      { id: 4, name: 'EliteGamer Wireless Headset', image: '/images/EliteGamer Wireless Headset.png' },
      { id: 5, name: 'TitanX Gaming PC', image: '/images/TitanX Gaming PC.png' },
      { id: 6, name: 'StealthStrike Gaming Mouse', image: '/images/StealthStrike Gaming Mouse.png' },
    ];

    const slide = ref(1); // Untuk carousel

    return {
      products,
      slide
    };
  }
});
</script>

<style lang="scss">
// Import Font Awesome untuk ikon sosial media jika belum ada (opsional, tapi bagus)
// Anda mungkin perlu menginstal font-awesome atau @quasar/extras
// Contoh: npm install @fortawesome/fontawesome-free @quasar/extras

.index-page {
  background-color: #f8f8f8; // Latar belakang halaman yang sedikit berbeda
}

.hero-section {
  text-align: center;
  padding: 100px 20px; // Padding lebih besar
  background: linear-gradient(to right, $accent-red, $accent-blue); // Gradasi warna cerah
  color: white; // Teks putih
  margin-bottom: 50px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2); // Bayangan lebih kuat
  position: relative;
  overflow: hidden; // Untuk memastikan elemen pseudo tidak keluar

  // Efek latar belakang abstrak (opsional, bisa sangat meningkatkan daya tarik)
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    transform: rotate(45deg);
    opacity: 0.2;
    animation: rotateGradient 20s linear infinite; // Animasi ringan
  }
}

@keyframes rotateGradient {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-content {
  position: relative; // Agar konten di atas pseudo-element
  z-index: 1;
}

.hero-section h1 {
  font-size: 3.8em; // Ukuran font judul lebih besar
  color: white;
  max-width: 900px;
  margin: 0 auto 20px;
  font-weight: 800; // Lebih tebal
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3); // Efek teks
  line-height: 1.2;
}

.hero-section p {
  font-size: 1.3em;
  color: rgba(255,255,255,0.9);
  max-width: 700px;
  margin: 0 auto;
}

.animated-btn {
  background-color: $dark-gaming !important; // Warna tombol yang kontras
  color: $text-light !important;
  border-radius: 50px; // Bentuk pil
  padding: 15px 35px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    background-color: darken($dark-gaming, 5%) !important;
  }
}

.products-section, .carousel-section {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.products-section h2, .carousel-section h2 {
  font-size: 2.8em;
  color: $dark-gaming; // Warna judul bagian
  margin-bottom: 40px;
  font-weight: 700;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Modifikasi ProductCard di sini atau di komponen ProductCard.vue */
.product-card {
  background-color: $card-bg;
  border: 1px solid $border-light;
  border-radius: 12px; // Sudut lebih melengkung
  padding: 25px; // Padding lebih besar
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); // Bayangan lebih kuat
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); // Transisi lebih halus
  cursor: pointer; // Indikator bisa diklik

  &:hover {
    transform: translateY(-8px) scale(1.03); // Efek hover yang lebih dramatis
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    border-color: $accent-red; // Border berubah warna
  }

  img {
    max-width: 90%; // Sedikit lebih kecil agar ada ruang border
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px; // Margin bawah lebih besar
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05); // Zoom gambar saat hover
    }
  }

  h3 {
    font-size: 1.5em; // Ukuran judul produk lebih besar
    color: $dark-gaming;
    margin: 0;
    font-weight: 600;
  }
}

/* Carousel Styling */
.custom-carousel {
  max-width: 1000px; // Batasi lebar carousel
  margin: 0 auto;
  background: linear-gradient(to right, $light-gaming, $dark-gaming); // Latar belakang gelap untuk carousel
  color: white; // Teks terang
}

.custom-carousel .q-carousel__slide {
  background-size: cover;
  background-position: center;
  display: flex; // Menggunakan flexbox untuk caption
  align-items: flex-end; // Caption di bawah
  justify-content: center; // Caption di tengah
}

.custom-caption-carousel {
  padding: 15px;
  background-color: rgba(0, 0, 0, .4); // Latar belakang transparan untuk caption
  width: 100%;
}

.custom-caption-carousel .text-h4 {
  font-size: 2.2em;
  line-height: 1.2;
}

.custom-caption-carousel .text-subtitle1 {
  font-size: 1.1em;
}

/* Footer Styling */
.app-footer {
  background: linear-gradient(to right, $dark-gaming, $light-gaming); // Gradasi gelap untuk footer
  color: $text-light;
  padding: 40px 20px;
  font-size: 0.95em;
  box-shadow: 0 -4px 10px rgba(0,0,0,0.2); // Bayangan di atas footer

  a {
    color: $accent-red; // Warna link footer
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: lighten($accent-red, 10%);
      text-decoration: underline;
    }
  }
}

.social-links .q-btn {
  font-size: 1.5em; // Ukuran ikon sosial media
  margin: 0 8px;
  color: white; // Warna ikon putih
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: $accent-red; // Ganti warna saat hover
  }
}

// Responsive adjustments
@media (max-width: 1024px) {
  .hero-section h1 {
    font-size: 3em;
  }
  .hero-section p {
    font-size: 1.1em;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 15px;
  }
  .hero-section h1 {
    font-size: 2.2em;
  }
  .products-section h2, .carousel-section h2 {
    font-size: 2em;
  }
  .q-carousel {
    height: 250px !important;
  }
  .custom-caption-carousel .text-h4 {
    font-size: 1.5em;
  }
  .custom-caption-carousel .text-subtitle1 {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.8em;
  }
  .animated-btn {
    padding: 10px 25px;
    font-size: 0.9em;
  }
  .products-section h2, .carousel-section h2 {
    font-size: 1.8em;
  }
  .product-card {
    padding: 15px;
  }
  .product-card h3 {
    font-size: 1.3em;
  }
  .custom-tabs .q-tab {
    padding: 0 10px;
    font-size: 0.8em;
  }
}
</style>