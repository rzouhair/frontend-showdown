<script setup lang="ts">
defineProps({
  host: {
    type: Object as PropType<{
      avatar: string;
      fullname: string;
    }>,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center gap-3">
    <NuxtImg class="rounded-full" :src="host.avatar" :alt="`${host.fullname}'s avatar'`" width="24" height="24" />
    <p class="text-white-muted text-sm">{{ host.fullname }}</p>
  </div>
</template>
