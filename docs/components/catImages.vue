<template>
  <div style="column-count: 5; column-gap: 10px">
    <template v-for="(image, index) in images" :key="index">
      <div style="margin-bottom: 10px; break-inside: avoid">
        <img
          :src="image.src"
          :alt="image.alt"
          style="
            max-width: 100%;
            width: 100%;
            height: auto;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
          "
          loading="lazy"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
const images = [
  { src: 'public/cat-1.jpg', alt: 'cat-1' },
  { src: 'public/cat-2.jpg', alt: 'cat-2' },
  { src: 'public/cat-3.jpg', alt: 'cat-3' },
  { src: 'public/cat-4.jpg', alt: 'cat-4' },
  { src: 'public/cat-5.jpg', alt: 'cat-5' },
  { src: 'public/cat-6.jpg', alt: 'cat-6' },
  { src: 'public/cat-7.jpg', alt: 'cat-7' }
]
</script>
