<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';

import VectorBack from '~/assets/images/Vector-Back-1.svg'
import VectorFront from '~/assets/images/Vector-Front-1.svg'
import VectorBackMd from '~/assets/images/Vector-Back-1-md.svg'
import VectorFrontMd from '~/assets/images/Vector-Front-1-md.svg'

import VectorBack2 from '~/assets/images/Vector-Back-2.svg'
import VectorFront2 from '~/assets/images/Vector-Front-2.svg'
import VectorBack2Md from '~/assets/images/Vector-Back-2-md.svg'
import VectorFront2Md from '~/assets/images/Vector-Front-2-md.svg'

const { width } = useWindowSize()

const isTablet = computed(() => {
  const threshold = 1024
  if (width.value === Infinity && window)
    return window.innerWidth
  else if (width.value === Infinity && !window)
    return null

  return width.value <= threshold
})

const frontSvg1 = computed(() => isTablet.value ? VectorFrontMd : VectorFront)
const backSvg1 = computed(() => isTablet.value ? VectorBackMd : VectorBack)

const frontSvg2 = computed(() => isTablet.value ? VectorFront2Md : VectorFront2)
const backSvg2 = computed(() => isTablet.value ? VectorBack2Md : VectorBack2)

</script>

<template>
  <div
    class="
      absolute left-0 right-0 z-[1] h-[610px] bg-no-repeat bg-cover bg-top
      top-[785px]
      sm:top-[1153px]
      md:top-[666px]
    "
    :style="{
      backgroundImage: `url(${backSvg1})`,
    }"
  />
  <div
    class="
      absolute right-0 z-[1] h-[918px] bg-no-repeat bg-cover bg-top
      top-[757px] w-full
      sm:top-[1185px] sm:left-0 sm:bg-top sm:w-[unset]
      md:top-[698px]
    "
    :style="{
      backgroundImage: `url(${frontSvg1})`,
    }"
  />

  <div
    class="
      absolute left-0 right-0 z-[1] h-[869px] bg-no-repeat bg-cover bg-top
      top-[1866px]
      sm:top-[2554px]
      md:top-[1796px]
    "
    :style="{
      backgroundImage: `url(${backSvg2})`,
    }"
  />
  <div
    class="
      absolute right-0 z-[1] h-[610px] bg-no-repeat bg-cover bg-top
      top-[2256px] w-full
      sm:top-[2914px] sm:left-0 sm:bg-top sm:w-[unset]
      md:top-[2127px]
    "
    :style="{
      backgroundImage: `url(${frontSvg2})`,
    }"
  />

  <hero-section />
  <about-section class="relative z-10 lg:mt-[3.375rem] mt-26" />
  <stats-section class="relative z-10 md:mt-45 mt-30" />
  <pricing-section class="relative z-10 md:mt-50 mt-30" />
  <workshops-section class="relative z-10 md:mt-40 mt-30" />
</template>
