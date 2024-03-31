<script setup lang="ts">
const props = defineProps({
  included: {
    type: Boolean,
  },
  highlighted: {
    type: Boolean,
    default: false
  }
})

const bulletPointIcon = computed(() => (props.included ? {
  src: '/images/Check.png',
  alt: 'Bullet point included icon'
} : {
  src: '/images/Cross.png',
  alt: 'Bullet point excluded icon'
}))
</script>

<template>
  <div class="flex items-center" :class="{ 'opacity-20': !included }">
    <NuxtImg
      :src="bulletPointIcon.src"
      :alt="bulletPointIcon.alt"
      width="18"
      height="18"
    />
    <p class="flex-1 text-white-light text-sm ml-4" :class="{ 'font-bold': highlighted }">
      <slot />
    </p>

    <app-tooltip content="Some content">
      <NuxtImg
        v-if="included"
        src="/images/InfoBullet.png"
        alt="Info bullet icon"
        width="14"
        height="14"
        aria-haspopup="true"
      />
    </app-tooltip>
  </div>
</template>
