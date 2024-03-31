<script setup lang="ts">
const isOpen = ref(false)

const vClickOutside = {
  mounted(el: any, binding: any) {
    el.__ClickOutsideHandler__ = (event: MouseEvent) => {
      if(!(el === event.target || el.contains(event.target))) {
        binding?.value(event)
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el: any){
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  }
}

</script>

<template>
  <div class="relative" @click="isOpen = !isOpen" v-click-outside="() => isOpen = false">
    <button aria-label="Dropdown trigger" class="select-none">
      <slot name="trigger" :is-open="isOpen"></slot>
    </button>
    <div :class="{ 'hidden': !isOpen }" class="absolute top-full z-20 mt-2 overflow-hidden origin-top bg-primary-dark shadow-lg">
      <slot name="content" :is-open="isOpen" />
    </div>
  </div>
</template>
