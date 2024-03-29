<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'solid' | 'opaque'>,
    default: 'opaque'
  },
  radius: {
    type: String as PropType<'lg' | 'sm'>,
    default: 'lg'
  }
});

const borderRadius = computed(() => props.radius === 'lg' ? 'rounded-7.5' : 'rounded-2xl')
</script>

<template>
  <div
    class="overflow-hidden p-[1px]"
    :class="[borderRadius]">
    <div class="gradient-card-header py-6 leading-3 text-base md:px-9 px-4 font-medium">
      <slot name="header">
        <div class="flex items-center gap-3 text-base">
          <NuxtImg src="/images/Calendar.png" alt="Calendar Icon" width="18" height="20" />
          December 14th - 11:00 AM (GMT-3)
        </div>
      </slot>
    </div>
    <div
      class="flex w-full flex-col md:p-9 p-4 bg-primary-muted"
    >
      <div>
        <div class="flex items-center gap-9">
          <div class="flex items-center gap-2 text-white-muted">
            <NuxtImg src="/images/PlayMuted.png" alt="Calendar Icon" width="18" height="18" />
            Live training
          </div>
          <div class="flex items-center gap-2 text-white-muted">
            <NuxtImg src="/images/ClockMuted.png" alt="Calendar Icon" width="18" height="18" />
            15 Hours
          </div>
        </div>
        <div class="my-5 text-left">
          <h3 class="heading-3">Vue.js Fundamentals</h3>
          <p class="text-sm text-white-muted mt-3 md:line-clamp-3 line-clamp-4">A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...</p>
        </div>
        <workshop-host :host="{
          avatar: '/images/VueSchoolWorkshop.jpeg',
          fullname: 'Steve Popoola'
        }" />
      </div>
    </div>
  </div>
</template>