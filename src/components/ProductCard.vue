<template>
  <q-card class="product-card" flat square>
    <div class="image-container">
      <q-img :src="image" :alt="name" class="product-image" />
      <div class="hover-overlay">
        <q-icon name="visibility" size="md" color="white" class="overlay-icon" @click.stop="viewDetails" />
      </div>
    </div>

    <q-card-section class="q-pt-md q-pb-sm text-center">
      <div class="text-h6 text-weight-bold text-dark-gaming product-name">{{ name }}</div>
      <div class="text-subtitle1 text-grey-7 q-mt-xs">Gaming Gear</div>
      <div class="text-h6 text-accent-red q-mt-sm product-price">Rp {{ price.toLocaleString('id-ID') }}</div>
    </q-card-section>

    <q-card-actions align="center" class="q-pb-md">
      <q-btn
        label="Tambah ke Keranjang"
        icon="shopping_cart"
        color="secondary"
        text-color="white"
        class="add-to-cart-btn animated-btn"
        @click="addToCart"
      />
      <q-btn
        label="Lihat Detail"
        color="primary"
        text-color="white"
        class="view-details-btn animated-btn q-ml-sm"
        outline
        @click="viewDetails"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router' // Import useRouter untuk navigasi

export default defineComponent({
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    productId: {
      type: [String, Number],
      default: null
    },
    price: { // Prop baru untuk harga
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const router = useRouter()

    const viewDetails = () => {
      // Contoh: navigasi ke halaman detail produk (misal: /product-detail/123)
      if (props.productId) {
        router.push(`/product-detail/${props.productId}`) // Asumsi nanti ada ProductDetailPage
      } else {
        console.log(`Melihat detail untuk ${props.name}`);
        // alert(`Melihat detail untuk ${props.name}`); // Hanya untuk demo
      }
    }

    const addToCart = () => {
      console.log(`Menambahkan ${props.name} ke keranjang!`);
      // Implementasi logika tambah ke keranjang di sini (misal: mutasi Vuex store)
      alert(`${props.name} ditambahkan ke keranjang!`); // Untuk tujuan demo
    }

    return {
      viewDetails,
      addToCart
    }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  background-color: $card-bg;
  border: 1px solid $border-light;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  width: 100%;
  max-width: 350px; // Lebar maksimum umum untuk card
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    border-color: $accent-red; // Border berubah warna saat hover

    .hover-overlay {
      opacity: 1;
      transform: translateY(0); // Overlay muncul dari bawah
    }
  }

  .image-container {
    position: relative;
    height: 200px; // Tinggi tetap untuk konsistensi gambar
    background-color: #f0f0f0; // Latar belakang terang untuk area gambar
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden; // Memastikan overlay mengikuti border-radius
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: contain; // Pertahankan rasio aspek, muat dalam kotak
    padding: 10px;
    transition: transform 0.3s ease; // Zoom halus saat hover

    .product-card:hover & { // Terapkan transform pada gambar saat card di-hover
      transform: scale(1.08);
    }
  }

  .hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($accent-red, 0.7); // Overlay merah transparan
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(100%); // Mulai dari bawah
  }

  .overlay-icon {
    font-size: 3em !important; // Ukuran ikon lebih besar
    cursor: pointer;
    background-color: rgba(0,0,0,0.3);
    border-radius: 50%;
    padding: 10px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .product-name {
    min-height: 50px; // Memastikan tinggi nama konsisten
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em; // Sesuaikan ukuran font
  }

  .product-price {
    font-size: 1.4em; // Ukuran font harga lebih besar
    font-weight: bold;
    color: $accent-red !important; // Sorot harga dengan warna aksen
    margin-bottom: 10px;
  }

  .q-card-actions {
    padding-top: 0;
    display: flex;
    flex-wrap: wrap; // Memungkinkan tombol untuk wrap di layar kecil
    justify-content: center; // Pusatkan tombol
    gap: 10px; // Jarak antar tombol
  }

  .add-to-cart-btn, .view-details-btn {
    width: calc(50% - 15px); // Dua tombol berdampingan dengan gap
    background: linear-gradient(to right, $accent-red, $accent-blue) !important; // Gradasi pada tombol
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;

    &.q-btn--outline { // Gaya untuk tombol outline
        background: none !important;
        color: $dark-gaming !important;
        border-color: $dark-gaming !important;
        box-shadow: none;
        &:hover {
            background-color: rgba($dark-gaming, 0.1) !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.3);
      opacity: 0.9;
    }
  }

  // Penyesuaian responsif untuk tombol
  @media (max-width: 480px) {
    .add-to-cart-btn, .view-details-btn {
      width: calc(100% - 20px); // Lebar penuh di layar sangat kecil
      margin: 5px 0;
    }
  }
}
</style>