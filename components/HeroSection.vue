<script setup lang="ts">
</script>

<template>
  <section class="w-container lg:px-10 md:px-20 flex flex-col items-center gap-12 hero:flex-row mt-8">
    <div class="flex flex-col sm:gap-10 gap-6 text-center items-center w-full hero:w-1/2 hero:pr-4 hero:px-0 sm:px-12 hero:text-left hero:items-start">
      <h1 class="heading-1">Complete <span class="text-accent">Vue.js training</span> solutions for companies</h1>
      <p class="sm:text-[1.375rem] leading-tight text-base">Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework</p>
      <app-button>
        Talk to Sales
      </app-button>
    </div>
    <NuxtImg
      class="min-[1300px]:-mr-[7.5rem] relative z-[1]"
      src="/HeroImage.svg"
      alt="Hero section image"
      width="602"
      height="616"
      sizes="100vw sm:50vw md:400px"opacity
      decoding="async"
      loading="lazy"
    />
  </section>
</template>
