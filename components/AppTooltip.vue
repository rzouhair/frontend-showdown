<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: '---'
  }
})
const shown = ref(false)
</script>

<template>
  <div @mouseover="shown = true" @mouseleave="shown = false" class="relative inline-block z-10 cursor-pointer">
    <slot />
    <p class="absolute flex items-center justify-center w-48 p-3 bg-primary text-accent rounded-lg shadow-lg -left-[12.7rem] -top-4" :class="{ 'hidden': !shown }">
      <span class="truncate text-sm">{{ content }}</span>
      
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-3 h-3 transform rotate-45 -translate-y-1/2 fill-current -right-1 top-1/2 text-primary bg-primary" stroke="currentColor" viewBox="0 0 12 12" >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
      </svg>
    </p>
  </div>
</template>