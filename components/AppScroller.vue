<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  images: {
    type: Array as PropType<string[]>
  },
  speed: {
    type: String as PropType<'fast' | 'slow'>,
    default: 'fast'
  },
  direction: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  stopOnHover: {
    type: Boolean,
    default: false
  },
  mask: {
    type: Boolean,
    default: false
  },
  itemClass: {
    type: String,
  },
  containerClass: {
    type: String,
  }
})

onMounted(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (!scrollerInner)
        return
      
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement
        duplicatedItem.setAttribute("aria-hidden", "true");

        const classList = duplicatedItem.classList.toString().split(' ').filter((cls) => cls.trim().length)

        const element = scrollerInner.appendChild(duplicatedItem);
        if (classList.length)
          element.classList.add(...classList)
      });

    });
  }
})
</script>

<template>
  <div
    class="scroller"
    :class="{
      'scroller--stop-on-hover': stopOnHover,
      'scroller--mask': mask
    }"
    :data-speed="speed"
    :data-direction="direction"
  >
    <ul class="scroller__inner" :class="[containerClass]">
      <slot>
        <li v-for="(image, i) in images" :key="i" :class=[itemClass]>
          <NuxtImg
            :src="image"
            decoding="async"
            loading="lazy"
            :alt="`Image ${i + 1}`"
            :formats="['avif', 'webp']"
          />
        </li>
      </slot>
    </ul>
  </div>
</template>

<style>

  :root {
    --scroller-gap: 4.5rem;
    --scroller-offset: -50%;
  }

  .scroller {
    max-width: 100vw;
  }

  .scroller__inner {
    @apply flex flex-wrap;
    @apply list-none p-0 m-0;
    gap: var(--scroller-gap, 1rem);
  }

  .scroller[data-animated="true"] {
    @apply overflow-hidden;
  }

  .scroller[data-animated="true"].scroller--mask {
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  }

  .scroller[data-animated="true"].scroller--stop-on-hover:hover .scroller__inner {
    animation-play-state: paused;
  }

  .scroller[data-animated="true"] .scroller__inner {
    @apply w-max flex-nowrap;
    animation: scroll var(--_animation-duration, 40s)
      var(--_animation-direction, forwards) linear infinite;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 40s;
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - (var(--scroller-gap, 1rem) / 2)));
    }
  }
</style>