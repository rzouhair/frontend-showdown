<script setup lang="ts">

const { plans } = useVueSchool()

const { isTablet } = useResponsiveWindowSize({})

const frontSvg2 = computed(() => `/images/Vector-Front-2${isTablet.value ? '-md' : ''}.svg`)
const backSvg2 = computed(() => `/images/Vector-Back-2${isTablet.value ? '-md' : ''}.svg`)
</script>

<template>
  <section>
    <div
      v-if="isTablet !== null"
      class="
        absolute left-0 right-0 z-[1] h-[869px] bg-no-repeat bg-cover bg-top
        top-[80px] w-full
        sm:top-[185px]
        md:top-[71px]
      "
      :style="{
        backgroundImage: `url(${backSvg2})`,
      }"
    />
    <div
      v-if="isTablet !== null"
      class="
        absolute right-0 z-[1] h-[610px] bg-no-repeat bg-cover bg-top
        top-[440px] w-full
        sm:top-[545px] sm:bg-contain sm:left-0 sm:bg-top sm:w-[unset]
        md:top-[429px] md:bg-cover
      "
      :style="{
        backgroundImage: `url(${frontSvg2})`,
      }"
    />
    <section class="w-container relative z-10">
      <h2 class="heading-1 max-w-screen-md text-center self-center w-full mx-auto md:mb-30 mb-14">
        Discounted <span class="text-gradient-accent">Corporate Training</span> Bundles
      </h2>
      <div v-if="plans?.length" class="grid grid-cols-1 gap-6 min-[1230px]:grid-cols-3 min-[1230px]:gap-7.5">
        <pricing-card
          v-for="plan in plans"
          :key="plan.id"
          :package="plan"
        />
      </div>
    </section>
  </section>
</template>
