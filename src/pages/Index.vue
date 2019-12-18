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
          <date-picker v-model="time" format="DD-MMMM-YYYY" placeholder="Pilih Tanggal..."
            :disabled-date="notBeforeToday"></date-picker>
        </div>
        <div class="text-center">
          <a class="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold uppercase py-2 px-4 rounded-lg tracking-wider"
            href="https://api.whatsapp.com/send?phone=6281315104352&text=Halo%2C%20saya%20ingin%20memesan%20villa%20di%20puncakyuk">Pesan</a>
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
            Pesan villa dengan mudah dan cepat. Cukup dengan puncakyuk, villa yang kamu butuhkan bisa didapatkan dengan mudah.
          </p>
          <div class="flex items-start mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/favorites.svg" alt="Harga Murah" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold text-gray-700">Pelayanan Terbaik</h3>
              <p class="text-gray-600 text-sm lg:text-normal md:pr-4">Pesan mudah dan nyaman dengan dibantu oleh admin
                kami.</p>
            </div>
          </div>
          <div class="flex items-start text-left mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/home.svg" alt="Pilihan Villa" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold text-gray-700">Villa Terlengkap</h3>
              <p class="text-gray-600 text-sm lg:text-normal md:pr-4">Banyaknya pilihan rekomendasi villa yang dapat
                dipesan.</p>
            </div>
          </div>
          <div class="flex items-start text-left mt-8">
            <div class="bg-teal-500 p-2 mr-4 mb-4 md:mb-0 rounded-lg w-12">
              <img src="img/money.svg" alt="Harga Murah" class="max-w-sm h-8">
            </div>
            <div class="-mt-2 md:mt-0">
              <h3 class="font-semibold text-gray-700">Harga Termurah</h3>
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

    <div style="background: url('/img/bg-pattern.svg'); position:relative" class="bg-pattern">
      <div class="container py-24">
        <div class="text-center">
          <h2 class="text-teal-500 text-xl lg:text-3xl xl:text-4xl font-bold">
            Rekomendasi Villa Terbaik
          </h2>
          <p class="text-gray-600 text-sm lg:text-normal xl:text-lg mb-12">
            Pilihan villa yang memenuhi kebutuhanmu
          </p>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="satu" />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="dua" />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="tiga" />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="empat" />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="lima" />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BoxHotel :villa="enam" />
          </div>
        </div>
        <div class="relative text-center mx-auto px-5 mt-5 z-20">
          <a href="#">
            <button class="text-white py-3 text-lg md:text-xl rounded-lg font-medium px-8 uppercase bg-teal-500 hover:bg-teal-600 focus:outline-none shadow-xl">Villa Lainnya</button>
          </a>
        </div>
      </div>
    </div>

    <div class="container pb-16">
      <div
        class="w-full lg:w-5/6 mx-auto bg-white shadow-2xl rounded border border-gray-200">
        <div class="flex justify-between items-center flex-col md:flex-row p-6 lg:p-10">
          <div>
            <h2 class="font-semibold text-lg md:text-xl text-center lg:text-left text-gray-700 mb-5 md:mb-0">Ingin Rekomendasi Cepat dari Kami?</h2>
          </div>

          <div>
            <a href="https://api.whatsapp.com/send?phone=6281315104352&text=Halo%2C%20saya%20ingin%20memesan%20villa%20di%20puncakyuk">
              <button class="text-white py-3 px-6 text-lg rounded-lg bg-teal-500 font-medium uppercase shadow-2xl hover:bg-teal-600 focus:outline-none">Hubungi Kami</button>
            </a>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
  import BoxHotel from '../components/BoxHotel'

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  export default {
    components: {
      DatePicker: () => import('vue2-datepicker'),
      BoxHotel
    },
    data() {
      return {
        time: null,

        //villa
        satu: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_1.jpg'),
          imageAlt: 'Villa Hindana Klasik Murah',
          model: 'Klasik',
          beds: 5,
          title: "Villa Hindana",
          formattedPrice: "Rp 2.500.000",
        },
        dua: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_2.jpg'),
          imageAlt: 'Villa Rusana Modern Murah',
          model: 'Modern',
          beds: 3,
          title: "Villa Rusana",
          formattedPrice: "Rp 1.500.000",
        },
        tiga: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_3.jpg'),
          imageAlt: 'Villa Bunga Lestari Moden Murah',
          model: 'Modern',
          beds: 4,
          title: "Villa Bunga Lestari",
          formattedPrice: "Rp 1.800.000",
        },
        empat: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_4.jpg'),
          imageAlt: 'Villa Jaya Abadi Klasik Murah',
          model: 'Klasik',
          beds: 3,
          title: "Villa Jaya Abadi",
          formattedPrice: "Rp 800.000",
        },
        lima: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_5.jpg'),
          imageAlt: 'Villa Garden Hills Klasik',
          model: 'Klasik',
          beds: 6,
          title: "Villa Melawai",
          formattedPrice: "Rp 1.800.000",
        },
        enam: {
          imageUrl: require('!!assets-loader!~/assets/images/puncak_6.jpg'),
          imageAlt: 'Rear view of modern home with pool',
          model: 'Klasik',
          beds: 4,
          title: "Villa Garden Hills",
          formattedPrice: "Rp 1.000.000",
        },

      };
    },
    methods: {
      notBeforeToday(date) {
        return date < today;
      }
    },
    metaInfo: {
      title: 'Sewa Villa di Puncak Bogor Murah dan Mudah'
    }
  }
</script>