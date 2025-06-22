<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" class="logo-link">Gor Indonesia</router-link>
        </q-toolbar-title>

        <q-space />

        <q-tabs align="right" class="custom-tabs">
          <q-route-tab to="/" label="HOME" exact />
          <q-route-tab to="/product" label="PRODUCT" />
          <q-route-tab to="/contact" label="CONTACT" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="scss">
// Global styles for header/navbar
.custom-header {
  background: linear-gradient(to right, $dark-gaming, $light-gaming); // Gradasi gelap
  color: $text-light; // Warna teks terang
  box-shadow: 0 4px 10px rgba(0,0,0,0.3); // Bayangan lebih kuat
  padding: 0 15px;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.8em; // Ukuran font logo lebih besar
  letter-spacing: 1px; // Spasi antar huruf
}

.custom-tabs .q-tab {
  color: $text-light; // Warna teks tab terang
  font-weight: bold;
  padding: 0 18px; // Padding antar tab sedikit lebih besar
  min-width: unset;
  transition: all 0.3s ease; // Transisi untuk hover
}

.custom-tabs .q-tab:hover {
  background-color: rgba(255, 255, 255, 0.1); // Efek hover ringan
}

.custom-tabs .q-tab--active {
  color: $accent-red !important; // Warna aktif yang mencolok
  font-weight: bold;
}

.custom-tabs .q-tab__indicator {
    background-color: $accent-red; // Warna indikator yang sama mencolok
    height: 4px; // Ketebalan indikator lebih tebal
}
</style>