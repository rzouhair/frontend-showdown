<script setup lang="ts">
const { homeData } = useVueSchool()

const lessonsAndCourses = computed(() => homeData.value.lessonsAndCourses)

const stats = computed(() => [
  { id: 1, count: lessonsAndCourses.value?.videos || 0, label: 'Video lessons', icon: '/images/Play.png' },
  { id: 2, count: lessonsAndCourses.value?.courses || 0, label: 'Courses', icon: '/images/Clip.png' },
  { id: 3, count: lessonsAndCourses.value?.hours || 0, label: 'Hours', icon: '/images/Clock.png' },
])
</script>

<template>
  <section class="w-container flex flex-col gap-8 flex-wrap tight:flex-row tight:items-center">
    <div class="text-center tight:text-left tight:w-1/2 tight:max-w-max max-w-[35.625rem] self-center">
      <p class="heading-3 text-gradient-accent mb-3">YOUR #1 SOURCE OF VUE.JS COURSES</p>
      <h2 class="heading-1">Full Stack <span class="text-gradient-accent">Vue Training</span> Solutions</h2>
    </div>
    <div class="flex items-start justify-center sm:gap-[3.75rem] gap-6">
      <stats-item
        v-for="item in stats"
        :key="item.id"
        v-bind="item"
      />
    </div>
  </section>
</template>
