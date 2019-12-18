<template>
  <div>
    <div class="relative pb-5/6">
      <g-image class="h-56 object-cover rounded-lg shadow-md" :src="villa.imageUrl" :alt="villa.imageAlt" />
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{{ villa.model }}</span>
          <div class="ml-2 text-gray-600 text-sm uppercase font-semibold tracking-wide">
            {{ villa.beds }} Kamar
          </div>
        </div>
        <h4 class="my-2 font-semibold text-lg leading-tight truncate">{{ villa.title }}</h4>
        <div class="font-bold text-lg text-teal-600">
          {{ villa.formattedPrice }}
          <span class="text-gray-600 text-sm"> / Hari</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: ['villa'],
}
</script>

<style>

</style>