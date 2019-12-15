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
                href="#">Pesan Cepat</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>
