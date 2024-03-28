<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { type PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'solid' | 'opaque'>,
    default: 'opaque'
  },
  radius: {
    type: String as PropType<'lg' | 'sm'>,
    default: 'lg'
  },
  solidClass: {
    type: String,
    default: 'bg-primary'
  },
  containerClass: {
    type: String,
    default: ''
  },
});

const borderRadius = computed(() => props.radius === 'lg' ? 'rounded-7.5' : 'rounded-2xl')
</script>

<template>
  <div
    :class="[
      borderRadius,
      {
        'bg-gradient-to-b from-white/20 text-white': type === 'opaque',
        [solidClass]: type === 'solid',
      },
    ]"
    class="p-[1px] h-fit"
  >
    <div
      :class="[
        containerClass,
        borderRadius,
        {
          'bg-primary-muted bg-opacity-90': type === 'opaque',
        },
      ]"
      class="flex w-full flex-col p-6"
    >
      <slot />
    </div>
  </div>
</template>