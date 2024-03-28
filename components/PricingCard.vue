<script setup lang="ts">
import type { PropType } from 'vue';
import type { PackageProps } from '~/utils/@types';
// @ts-ignore
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

const props = defineProps({
  package: {
    type: Object as PropType<PackageProps>,
    required: true,
  }
})

const seatsCount = ref(12)

function redirectToCourse() {
  if (props.package?.link)
    window.open(props.package?.link, '_blank')
}
</script>

<template>
  <app-card>
    <div class="pt-4 sm:px-4">
      <div class="flex items-center gap-4 flex-wrap">
        <NuxtImg
          :src="package.icon"
          :alt="`${package.title} package icon`"
          width="32"
          height="32"
        />
        <p class="font-bold text-2xl">{{ package.title }}</p>
      </div>

      <div class="mt-8">
        <p class="text-accent text-base">Includes 1 year access to:</p>
        <div class="mt-6 flex flex-col gap-4">
          <pricing-bullet-point
            v-for="point in package.features"
            :key="point.id"
            :included="point.included"
            :highlighted="point.highlighted"
          >
            {{ point.text }}
          </pricing-bullet-point>
        </div>
      </div>

      <slot name="additional-info">
        <app-card
          v-if="package.suggestedCourse"
          type="solid"
          solid-class="bg-accent bg-opacity-20"
          container-class="pl-6 pr-1 py-4"
          class="rounded-lg mt-6"
        >
          <div class="flex items-start gap-4">
            <NuxtImg
              class="min-w-12"
              :src="package.suggestedCourse.thumbnail"
              :alt="`${package.suggestedCourse?.title} thumbnail`"
              width="48"
              height="48"
            />
            <div>
              <p class="text-sm text-grey font-medium truncate">Enough time to watch</p>
              <p class="text-lg font-semibold">{{ package.suggestedCourse.title }}</p>
            </div>
          </div>
        </app-card>
      </slot>

      <app-card class="mt-6" container-class="lg:px-6 sm:px-10 py-6 px-4" type="solid" radius="sm">
        <p class="text-grey leading-none flex items-center gap-2 mb-6 sm:py-1.5 text-base">
          <span class="font-bold text-4.5xl text-white">${{ package.pricePerSeat }}</span> / seat / month
        </p>

        <p class="text-base font-bold">How many licenses do you need?</p>

        <div class="mt-3 mb-8">
          <vue-slider
            v-model="seatsCount"
            :min="5"
            :max="20"
            :marks="[5, 20]"
            tooltip="none"
            :dot-style="{
              backgroundColor: 'rgb(var(--color-accent))',
              borderColor: 'rgb(var(--color-accent))'
            }"
            :process-style="{
              backgroundColor: 'rgb(var(--color-accent))',
            }"
            :rail-style="{
              backgroundColor: 'rgb(var(--color-grey-2))',
            }"
            :label-style="{
              color: 'rgb(var(--color-grey))',
              margin: '0.25rem 0 0 0',
            }"
          />
        </div>

        <div class="flex items-center gap-5">
          <div>
            <div class="bg-primary-dark bg-opacity-20 text-base flex items-center gap-2.5 px-3.5 py-2 rounded-lg">
              <NuxtImg
                class="min-w-5"
                src="/Seats.svg"
                alt="Package seats icon"
                width="18.67"
                height="16"
              />
              <span class="font-bold text-[1.625rem] text-[#E8E6E6]">{{ seatsCount }}</span>
              <span class="text-white-muted">seats</span>
            </div>
          </div>
          <p class="font-semibold text-base text-accent whitespace-nowrap">26% discount</p>
        </div>
      </app-card>

      <div class="lg:mt-10 mt-8">
        <app-button block @click="redirectToCourse">Start learning</app-button>
        <app-button block variant="link">Refer your manager</app-button>
      </div>
    </div>
  </app-card>
</template>
