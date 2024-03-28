<script setup lang="ts">
import type { PackageProps } from '~/utils/@types';

const packages: PackageProps[] = [
  {
    id: 1,
    title: 'Basic',
    icon: '/images/Leaf.png',
    pricePerSeat: 50,
    features: [
      { id: 1, text: 'All Video Courses ', included: true },
      { id: 2, text: 'Vue.Js Master class', included: true },
      { id: 3, text: 'Developer assist Slack channel', included: true },
      { id: 4, text: 'Live Weekly QnA', included: false },
      { id: 5, text: '1 x ws ticket per license', included: false },
    ],
    link: 'https://www.vueschool.io/'
  },
  {
    id: 2,
    title: 'Professional',
    icon: '/images/Rocket.png',
    pricePerSeat: 50,
    features: [
      { id: 1, text: 'All Video Courses ', included: true },
      { id: 2, text: 'Vue.Js Master class', included: true },
      { id: 3, text: 'Developer assist Slack channel', included: true },
      { id: 4, text: 'Live Weekly QnA', included: true, highlighted: true },
      { id: 5, text: '1 x ws ticket per license', included: true, highlighted: true },
    ],
    suggestedCourse: {
      thumbnail: '/images/Masterclass.png',
      title: 'The Vue 3 Masterclass'
    },
    link: 'https://www.vueschool.io/'
  },
  {
    id: 3,
    title: 'Basic',
    icon: '/images/Leaf.png',
    pricePerSeat: 50,
    features: [
      { id: 1, text: 'All Video Courses ', included: true },
      { id: 2, text: 'Vue.Js Master class', included: true },
      { id: 3, text: 'Developer assist Slack channel', included: true },
      { id: 4, text: 'Live Weekly QnA', included: true },
      { id: 5, text: '4 x Virtual Workshop of your choice', included: true, highlighted: true },
    ],
    link: 'https://www.vueschool.io/'
  },
]
</script>

<template>
  <section class="w-container relative z-10">
    <h2 class="heading-1 max-w-screen-md text-center self-center w-full mx-auto md:mb-30 mb-14">
      Discounted <span class="text-gradient-accent">Corporate Training</span> Bundles
    </h2>
    <div class="grid grid-cols-1 gap-6 min-[1230px]:grid-cols-3 min-[1230px]:gap-7.5">
      <pricing-card
        v-for="plan in packages"
        :key="plan.id"
        :package="plan"
      />
    </div>
  </section>
</template>
