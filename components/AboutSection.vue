<script setup lang="ts">
const { isTablet } = useResponsiveWindowSize({})

const frontSvg1 = computed(() => `/images/Vector-Front-1${isTablet.value ? '-md' : ''}.svg`)
const backSvg1 = computed(() => `/images/Vector-Back-1${isTablet.value ? '-md' : ''}.svg`)
</script>

<template>
  <section class="relative">
    <div
      v-if="backSvg1 && isTablet !== null"
      class="
        absolute left-0 right-0 z-[0] h-[610px] bg-no-repeat bg-cover bg-top
        -top-[234px]
        sm:-top-[200px]
        md:-top-[136px]
      "
      :style="{
        backgroundImage: `url(${backSvg1})`,
      }"
    />

    <div
      v-if="frontSvg1 && isTablet !== null"
      class="
        absolute right-0 z-[0] h-[918px] bg-no-repeat bg-cover
        -top-[202px] w-full bg-[75%_top]
        sm:-top-[168px] sm:left-0 sm:bg-top sm:w-[unset]
        md:-top-[104.31px]
      "
      :style="{
        backgroundImage: `url(${frontSvg1})`,
      }"
    />
    <div class="w-container">
      <app-card class="relative z-[4]">
        <div class="grid grid-cols-1 lg:py-10 sm:py-4 sm:grid-cols-4 lg:gap-10 gap-6 sm:items-start lg:items-center place-items-center">
          <NuxtImg
            class="lg:w-[135px] lg:h-[152px] lg:object-cover sm:w-full w-[85px]"
            src="/images/VueSchool.png"
            alt="Vue school Logo"
            loading="lazy"
            height="135"
            width="152"
            decoding="async"
          />
          <div class="md:mt-2 flex flex-col gap-4 text-center sm:col-span-3 sm:text-left">
            <h2 id="about-section" class="heading-2">About Vue School corporate training</h2>
            <p class="lg:pr-15" aria-labelledby="about-section">School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers. Private individuals and small to enterprise companies have used our services to develop their skills since 2016.</p>
          </div>
        </div>
      </app-card>
      <section class="hidden lg:block w-full mt-16 z-10">
        <app-scroller :stop-on-hover="true" speed="slow" mask>
          <li v-for="i in 6">
            <NuxtImg
              :key="i"
              src="/images/Google.png"
              alt="Google Logo"
              width="118"
              height="40"
            />
          </li>
        </app-scroller>
      </section>
    </div>
  </section>
</template>
