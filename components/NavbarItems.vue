<script setup lang="ts">
import type { PropType } from 'vue';
import type { NavbarItem } from '~/utils/@types'

defineProps({
  links: {
    type: Array as PropType<NavbarItem[]>,
    required: true
  }
})
</script>

<template>
  <ul class="flex items-center gap-5">
    <li v-for="link in links" :key="link.title" class="whitespace-nowrap">
      <NuxtLink
        v-if="!link.children?.length"
        :to="link.to"
        class="hover:text-accent transition-colors"
      >
        {{ link.title }}
      </NuxtLink>

      <nav v-else>
        <app-dropdown :class="link.title">
          <template #trigger="{ isOpen }">
            <button :aria-label="`${link.title} navigation items list`" aria-haspopup="true" class="select-none text-base cursor-pointer hover:text-accent transition-colors flex items-center gap-2.5">
              {{ link.title }}
              <svg :class="{ 'transform-gpu rotate-180': isOpen }" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.30001 4.5002L0.700012 1.9002C0.383345 1.58353 0.312679 1.2212 0.488012 0.813195C0.662679 0.404529 0.975012 0.200195 1.42501 0.200195H6.57501C7.02501 0.200195 7.33735 0.404529 7.51201 0.813195C7.68735 1.2212 7.61668 1.58353 7.30001 1.9002L4.70001 4.5002C4.60001 4.6002 4.49168 4.67519 4.37501 4.72519C4.25835 4.7752 4.13335 4.8002 4.00001 4.8002C3.86668 4.8002 3.74168 4.7752 3.62501 4.72519C3.50835 4.67519 3.40001 4.6002 3.30001 4.5002Z" fill="currentColor"/>
              </svg>
            </button>

          </template>
          <template #content>
            <ul class="min-w-[12.5rem] flex flex-col z-20 bg-primary-dark">
              <li v-for="child in link.children" class="px-4 py-2">
                <NuxtLink
                  :to="child.to"
                  class="hover:text-accent transition-colors cursor-pointer text-sm"
                >
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </template>
        </app-dropdown>
      </nav>
    </li>
  </ul>
</template>