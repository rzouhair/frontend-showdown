<script setup lang="ts">
useHead({
  title: 'Vue School | The #1 source for learning Vue.js from experts',
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'Vue.js, Tooling, Testing, ES6, Architechture, Best practices, Modern JavaScript' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useServerSeoMeta({
  title: 'Vue School | The #1 source for learning Vue.js from experts',
  description: 'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  ogTitle: 'Vue School | The #1 source for learning Vue.js from experts',
  ogDescription: 'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  ogImage: 'https://vueschool.io/storage/o0WMQKjr5uIjij6ZQeIb5Ibt2edY8SuDNV9J61W3.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <header>
    <the-navbar/>
  </header>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
  <the-footer class="lg:mt-50 mt-35" />
</template>
