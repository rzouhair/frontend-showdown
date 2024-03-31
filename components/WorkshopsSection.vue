<script setup lang="ts">
import { useWindowSize, watchDebounced } from '@vueuse/core'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const CONSTANT_ITEMS_TO_SHOW_MULTIPLIER = {
  lg: 636.12,
  md: 670.77
}

const { width } = useWindowSize()

const carouselWrapperHeight = ref('20rem')
const carouselContainer = ref()

const isTablet = computed(() => {
  const threshold = 1024
  if (width.value === Infinity)
    return null

  return width.value <= threshold
})

const itemsToShow = ref<number | null>(null)

onMounted(() => {
  calculateItemsToShow()
})

function calculateItemsToShow () {
  if (!window)
    return
  itemsToShow.value = null
  const windowWidth = width.value === Infinity ? window.innerWidth : width.value

  let selectedSize = CONSTANT_ITEMS_TO_SHOW_MULTIPLIER['lg']

  if (windowWidth <= 1024) {
    selectedSize = CONSTANT_ITEMS_TO_SHOW_MULTIPLIER['md']
  }
  if (windowWidth <= 640) {
    selectedSize = windowWidth
  }

  itemsToShow.value = Number((windowWidth / selectedSize).toFixed(2))
}

watchDebounced(
  width,
  () => {
    calculateItemsToShow()
  },
  { debounce: 400, maxWait: 1000, immediate: true },
)

watchDebounced(
  itemsToShow,
  () => {
    if (!carouselContainer.value)
      return
    const carouselViewport: HTMLElement = carouselContainer.value.querySelector('.carousel__viewport')
    if (carouselViewport?.clientHeight) {
      carouselWrapperHeight.value = `${carouselViewport.clientHeight}px`
    }
  },
  { debounce: 200, maxWait: 1000, immediate: true },
)

</script>

<template>
  <section class="overflow-hidden">
    <div class="w-container flex items-center justify-between lg:text-left text-center mb-[4.5rem] flex-col lg:flex-row">
      <h2 id="available-workshops" class="heading-1 w-full">
        Available Workshops
      </h2>
      <Teleport v-if="isTablet !== null" :disabled="isTablet === false" to="#workshop-button-teleport">
        <app-button>
          See all the workshops
        </app-button>
      </Teleport>
    </div>

    <section aria-label="Workshops cards carousel" aria-labelledby="available-workshops" class="relative w-container !overflow-visible" :style="{ height: carouselWrapperHeight }">
      <ClientOnly>
        <div class="absolute left-0 md:w-screen w-full h-full pl-6 pr-6 md:pr-0" v-if="itemsToShow !== null" ref="carouselContainer">
          <Carousel
            :autoplay="5000"
            :items-to-show="itemsToShow"
            :wrap-around="true"
            snap-align="start"
            class="h-full"
          >
            <template #slides>
              <Slide v-for="slide in 4" :key="slide" class="h-full">
                <div class="sm:px-3.5">
                  <workshop-card />
                </div>
              </Slide>
            </template>
          </Carousel>
        </div>
      </ClientOnly>
    </section>
    
    <!-- Button teleport placeholder -->
    <div id="workshop-button-teleport" class="flex items-center justify-center mt-8"></div>
    
  </section>
</template>
