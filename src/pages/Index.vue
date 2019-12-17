<template>
  <Layout>
    <div class="container mt-12 text-center">
      <span class="font-bold uppercase tracking-wider text-xs md:text-sm text-gray-700">Liburan Lebih Tenang
        Dengan</span>
      <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl py-3 text-teal-500">Sewa Villa di Puncak Menjadi Lebih Mudah
      </h1>
      <p class="hidden sm:block sm:px-20 lg:px-0 text-xl text-gray-600">Kami memiliki pilihan <strong>Rekomendasi
          Villa</strong> terbaik yang <strong>dapat kamu sewa</strong> dengan mudah!</p>
      <img src="img/header.svg" alt="Gambar Cari Villa di Puncakyuk" class="mx-auto py-4 md:max-w-2xl xl:max-w-3xl" />
    </div>

    <div class="container">
      <div
        class="py-2 px-6 xl:py-6 w-full lg:w-5/6 xl:w-2/3 mx-auto md:flex justify-between items-center bg-white shadow-lg rounded border border-gray-200">
        <h2 class="font-semibold text-base md:text-lg text-center text-gray-700">Mau Pesan Untuk Kapan Nih?</h2>
        <div class="flex flex-wrap justify-center py-4 xl:py-0">
          <date-picker v-model="time" range format="DD-MMMM-YYYY" placeholder="Pilih Tanggal..."
            :disabled-date="notBeforeToday"></date-picker>
        </div>
        <div class="text-center">
          <a class="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold uppercase py-2 px-4 rounded-lg tracking-wider"
            href="#">Pesan</a>
        </div>
      </div>
    </div>

    <div class="container mt-20">
      <div class="flex flex-wrap items-center">
        <div class="w-full order-last md:order-first md:w-1/2">
          <h2 class="text-teal-500 text-xl lg:text-3xl xl:text-4xl font-bold">
            Menginap Nyaman Tanpa Pusing
          </h2>
          <p class="text-gray-600 text-sm lg:text-normal xl:text-lg mt-4 pr-0 lg:pr-20 sm:pl-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum, tenetur recusandae quas assumenda
            possimus!
          </p>
          <div class="flex items-start mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/favorites.svg" alt="Harga Murah" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold">Pelayanan Terbaik</h3>
              <p class="text-gray-600 text-sm lg:text-normal md:pr-4">Pesan mudah dan nyaman dengan dibantu oleh admin
                kami.</p>
            </div>
          </div>
          <div class="flex items-start text-left mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/home.svg" alt="Pilihan Villa" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold">Villa Terlengkap</h3>
              <p class="text-gray-600 text-sm lg:text-normal md:pr-4">Banyaknya pilihan rekomendasi villa yang dapat
                dipesan.</p>
            </div>
          </div>
          <div class="flex items-start text-left mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/money.svg" alt="Harga Murah" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold">Harga Termurah</h3>
              <p class="text-gray-600 text-sm lg:text-normal md:pr-4">Dapatkan harga termurah sesuai fasilitas yang
                didapat.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-10">
          <img src="img/cari-villa.svg" alt="Cari Villa Menjadi Mudah" class="mx-auto" />
        </div>
      </div>
    </div>

    <div style="background: url('/img/bg-pattern.svg'); position:relative" class="bg-pattern mt-20">
      <div class="container py-20">
        <h2 class="text-teal-500 text-xl lg:text-3xl xl:text-4xl font-bold">
          Rekomendasi Villa Terbaik
        </h2>
        <p class="text-gray-600 text-sm lg:text-normal xl:text-lg">
          Pilihan villa yang memenuhi kebutuhanmu
        </p>
      </div>
    </div>

  </Layout>
</template>

<script>
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  export default {
    components: {
      DatePicker: () => import('vue2-datepicker')
    },
    data() {
      return {
        time: null,
      };
    },
    methods: {
      notBeforeToday(date) {
        return date < today;
      }
    },
    metaInfo: {
      title: 'Sewa Villa di Puncak Murah dan Mudah'
    }
  }
</script>