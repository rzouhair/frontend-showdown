<script setup lang="ts">
const vueSchool = useVueSchool()

const hero = computed(() => vueSchool.homeData.value.hero)

const heading = computed(() => {
  const highlight = (child: Children) => {
    return `<span class="text-accent">${child.text}</span>`
  }
  const htmlVersion = vueSchool.homeData.value.hero.h1?.[0]?.children.map(
    (child) => child.marks.includes('strong') ? highlight(child) : child.text
  )

  return htmlVersion.join('')
})
</script>

<template>
  <section class="w-container relative z-10 lg:px-10 md:px-20 flex flex-col items-center gap-12 hero:flex-row mt-8">
    <div class="flex flex-col sm:gap-10 gap-6 text-center items-center w-full hero:w-1/2 hero:pr-4 hero:px-0 sm:px-12 hero:text-left hero:items-start">
      <h1 class="heading-1" v-html="heading" />
      <p class="sm:text-[1.375rem] leading-tight text-base">{{ hero.paragraph }}</p>
      <app-button>
        {{ hero.callToAction }}
      </app-button>
    </div>
    <NuxtImg
      class="min-[1300px]:-mr-[7.5rem] relative z-10"
      src="/images/HeroImage.png"
      alt="Hero section image"
      width="602"
      height="616"
      format="webp"
      fetchpriority="high"
    />
  </section>
</template>
