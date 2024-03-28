<script setup lang="ts">
import type { PropType } from 'vue';
import type { NavbarItem } from '~/utils/@types'

defineProps({
  links: {
    type: Array as PropType<NavbarItem[]>,
    required: true
  }
})

const openParent = ref<string | null>(null)
</script>

<template>
  <ul class="flex flex-col gap-5 ml-8 mt-4">
    <li v-for="link in links" :key="link.title" class="whitespace-nowrap">
      <NuxtLink
        v-if="!link.children?.length"
        :to="link.to"
        class="hover:text-gradient-accent transition-colors text-white text-xl flex items-center gap-2 cursor-pointer"
      >
        {{ link.title }}
      </NuxtLink>
      <button
        v-else
        class="hover:text-accent transition-colors text-white text-xl flex items-center gap-2 cursor-pointer"
        @click="openParent = openParent !== link.title ? link.title : null"
      >
        {{ link.title }}
        <svg :class="{ 'transform-gpu rotate-180': openParent === link.title }" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.30001 4.5002L0.700012 1.9002C0.383345 1.58353 0.312679 1.2212 0.488012 0.813195C0.662679 0.404529 0.975012 0.200195 1.42501 0.200195H6.57501C7.02501 0.200195 7.33735 0.404529 7.51201 0.813195C7.68735 1.2212 7.61668 1.58353 7.30001 1.9002L4.70001 4.5002C4.60001 4.6002 4.49168 4.67519 4.37501 4.72519C4.25835 4.7752 4.13335 4.8002 4.00001 4.8002C3.86668 4.8002 3.74168 4.7752 3.62501 4.72519C3.50835 4.67519 3.40001 4.6002 3.30001 4.5002Z" fill="currentColor"/>
        </svg>
      </button>
      <navbar-menu
        v-if="link.children?.length && openParent === link.title"
        class="mt-2 text-opacity-50"
        :links="link.children"
      />
    </li>
  </ul>
</template>