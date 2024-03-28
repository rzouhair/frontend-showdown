<script setup lang="ts">
</script>

<template>
  <section class="relative">
    <div class="w-container">
      <app-card class="relative z-[4]">
        <div class="grid grid-cols-1 md:grid-cols-4 lg:gap-10 gap-6 md:items-start lg:items-center place-items-center">
          <NuxtImg
            class="lg:w-[135px] md:w-full w-[85px]"
            src="/images/VueSchool.png"
            loading="lazy"
            decoding="async"
          />
          <div class="md:mt-2 flex flex-col gap-4 text-center md:col-span-3 md:text-left">
            <h2 class="heading-2">About Vue School corporate training</h2>
            <p>School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers. Private individuals and small to enterprise companies have used our services to develop their skills since 2016.</p>
          </div>
        </div>
      </app-card>
      <section class="hidden lg:block w-full mt-16 z-10">
        <app-scroller :stop-on-hover="true" speed="slow" mask>
          <NuxtImg
            v-for="i in 6"
            :key="i"
            src="/images/Google.png"
            width="118"
            height="40"
          />
        </app-scroller>
      </section>
    </div>
  </section>
</template>
