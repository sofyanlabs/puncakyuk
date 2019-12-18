<template>
  <div class="antialiased bg-gray-100">
    <header class="container flex flex-wrap items-center py-4">
      <div class="flex-1 flex justify-between items-center text-center">
        <a href="#" class="font-bold text-2xl text-teal-500">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </a>
      </div>

      <div class="flex items-center w-auto" id="menu">
        <nav>
          <ul class="flex items-center justify-between text-base text-gray-700 lg:pt-0">
            <li><a class="lg:p-4 px-0 hidden md:block border-b-2 border-transparent hover:border-teal-500 mr-5"
                href="#">List Villa</a></li>
            <li><a class="bg-teal-500 hover:bg-teal-600 text-white font-semibold uppercase py-2 px-4 rounded-lg tracking-wider"
                href="https://api.whatsapp.com/send?phone=6281315104352&text=Halo%2C%20saya%20ingin%20memesan%20villa%20di%20puncakyuk">Pesan Cepat</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <slot />

    <footer class="bg-teal-500">
      <div class="container text-white text-center py-16">
        <h4 class="font-semibold text-4xl">Puncakyuk</h4>
        <p class="text-base mb-6">
          Mudahnya Mencari Villa di Puncak
        </p>
        <div class="flex justify-center flex-col md:flex-row">
          <a href="#" class="border border-gray-200 px-4 py-2 rounded-full hover:bg-white hover:text-teal-500 mb-5 md:mb-0 md:mr-3">Hubungi Whatsapp</a>
          <a href="#" class="border border-gray-200 px-4 py-2 rounded-full hover:bg-white hover:text-teal-500">Hubungi Email</a>
        </div>
        <p class="mt-5">Copyright © 2019 Puncakyuk by Sofyanlabs</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>
