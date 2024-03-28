<script setup lang="ts">
import { type PropType } from 'vue';
import { cva } from 'class-variance-authority'
import { cn } from '~/utils/tailwind';

defineProps({
  size: {
    type: String,
    default: 'sm',
  },
  variant: {
    type: String as PropType<"primary" | "bordered" | "link">,
    default: 'primary',
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: 'button',
  },
  block: {
    type: Boolean,
    default: false
  }
});

const buttonVariants = cva(
  'h-[3.6875rem] min-w-35 px-10 flex items-center justify-center border rounded-[0.625rem] hover:bg-opacity-90 transition-colors duration-100 font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-primary border-accent',
        bordered: 'bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end border-0 h-[3.75rem] p-[1px] overflow-hidden hover:opacity-90',
        link: 'border-transparent bg-transparent text-accent min-w-[unset] p-0 hover:text-opacity-70 transition-colors duration-100',
      },
      size: {
        sm: 'py-2 px-4',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'lg',
      variant: 'primary',
    },
  }
);
</script>

<template>
  <button
    :type="type"
    :class="[
      cn(buttonVariants({ variant }), 'w-fit', block && 'w-full'),
    ]"
    @click="$emit('click')"
  >
    <template v-if="variant === 'bordered'">
      <div class="bg-primary w-full h-full px-10 inline-flex items-center justify-center rounded-[0.625rem]">
        <span class="text-gradient-accent">
          <slot />
        </span>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>