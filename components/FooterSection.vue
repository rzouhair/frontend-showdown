<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: Array as PropType<{
      label: string;
      to: string
    }[]>,
    required: true
  }
})
</script>

<template>
  <div>
    <p class="font-semibold uppercase text-[1.375rem] mb-5 text-white-muted md:text-left text-center">{{ title }}</p>
    <div class="flex flex-col md:items-start items-center mt-5 gap-3.5">
      <NuxtLink
        v-for="item in links"
        :to="item.to"
        class="text-white text-base text-left hover:text-accent transition-colors leading-none"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>