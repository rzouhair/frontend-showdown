<script setup lang="ts">
defineProps({
  count: {
    type: Number,
  },
  label: {
    type: String,
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <div class="text-center">
    <p class="text-gradient-accent font-medium sm:text-[5.625rem] text-[4rem] leading-none">{{ count }}</p>
    <div class="flex items-center justify-center gap-2.5 mt-3">
      <NuxtImg
        :src="icon"
        :alt="label"
        width="18"
        height="18"
      />
      <p class="text-white-light text-sm">{{ label }}</p>
    </div>
  </div>
</template>
