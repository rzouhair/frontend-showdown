<script lang="ts" setup>
const vueSchool = useVueSchool()

await useAsyncData('home_data_plans', async () => {
  await Promise.all([vueSchool.getHomeData(), vueSchool.getPlans()])
})
</script>

<template>
  <hero-section />
  <about-section class="relative z-[5] lg:mt-[3.375rem] mt-26" />
  <stats-section class="relative z-10 md:mt-45 mt-30" />
  <pricing-section class="relative z-10 md:mt-50 mt-30" />
  <workshops-section class="relative z-10 md:mt-40 mt-30" />
</template>
