<template>
  <q-page class="products-page q-pa-md">
    <h2 class="page-title text-center q-mb-xl">Jelajahi Koleksi Gaming Terbaik Kami</h2>
    <p class="text-center text-body1 q-mb-xl text-grey-8">
      Temukan berbagai pilihan peralatan gaming berkualitas tinggi untuk meningkatkan pengalaman bermain Anda.
    </p>

    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :name="product.name"
        :product-id="product.id"
        :price="product.price" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ProductCard from 'components/ProductCard.vue';

export default defineComponent({
  name: 'ProductPage',
  components: {
    ProductCard
  },
  setup() {
    const products = [
      // Pastikan path gambar ini benar dan sesuai dengan file di public/images/
      // Tambahkan juga harga untuk setiap produk
      { id: 'razorphone-x1', name: 'RazorPhone X1', image: '/images/RazorPhone X1.png', price: 15500000 },
      { id: 'stealthgame-pad', name: 'StealthGame Pad', image: '/images/StealthGame Pad.png', price: 750000 },
      { id: 'powergaming-laptop-x', name: 'PowerGaming Laptop X', image: '/images/PowerGaming Laptop X.png', price: 28999000 },
      { id: 'elitegamer-wireless-headset', name: 'EliteGamer Wireless Headset', image: '/images/EliteGamer Wireless Headset.png', price: 1200000 },
      { id: 'titanx-gaming-pc', name: 'TitanX Gaming PC', image: '/images/TitanX Gaming PC.png', price: 18750000 },
      { id: 'stealthstrike-gaming-mouse', name: 'StealthStrike Gaming Mouse', image: '/images/StealthStrike Gaming Mouse.png', price: 650000 },
      // Tambahkan lebih banyak produk di sini jika ini daftar lengkap
    ];

    return {
      products
    };
  }
});
</script>

<style lang="scss" scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  background-color: #f8f8f8;
}

.page-title {
  font-size: 3em;
  color: $dark-gaming;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
}

// Gaya responsif untuk judul
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5em;
  }
}

@media (max-width: 768px) {
  .products-page {
    padding-top: 40px;
  }
  .page-title {
    font-size: 2em;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8em;
  }
}
</style>