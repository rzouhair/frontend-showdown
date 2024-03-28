<script setup lang="ts">
import type { NavbarItem } from '~/utils/@types';

const links: NavbarItem[] = [
  {
    title: 'Courses',
    children: [
      { title: 'Video Courses', to: '#' },
      { title: 'Vue.js Master Class 2024 Edition', to: '#' },
      { title: 'Vue.js Master Class', to: '#' },
      { title: 'Workshops', to: '#' },
      { title: 'Mastering Nuxt', to: '#' },
    ]
  },
  { title: 'Plans', to: '#' },
  {
    title: 'Business Service',
    children: [
      { title: 'Vue.js Corporate Training', to: '#' },
      { title: 'Workshops', to: '#' },
      { title: 'Hiring', to: '#' },
    ]
  },
  { title: 'Learning Path', to: '#' },
  { title: 'Hiring', to: '#' },
  { title: 'Articles', to: '#' },
  {
    title: 'Events',
    children: [
      { title: 'Frontend Nation', to: '#' },
      { title: 'Vue.js Nation', to: '#' },
      { title: 'Nuxt Nation', to: '#' },
      { title: 'Vue.js Forge', to: '#' },
    ]
  },
  { title: 'Get Certified', to: '#' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="flex items-center gap-4 justify-between w-full mx-auto px-6 sm:px-12 py-5">
    <div class="flex items-center justify-start gap-6">
      <button class="xl:hidden" @click="isMenuOpen = true">
        <NuxtImg
          src="/BurgerMenuIcon.svg"
          alt="Burger menu button"
          width="26"
          height="24"
        />
      </button>
      <NuxtLink to="/" class="flex-1">
        <NuxtImg
          src="/logo.svg"
          alt="Vue School"
          width="170"
          height="56"
          decoding="async"
          loading="lazy"
        />
      </NuxtLink>
    </div>
    <div class="xl:block hidden flex-1 ml-8">
      <navbar-items :links="links" />
    </div>
    <div class="hidden sm:flex items-center justify-center gap-7.5">
      <app-button class="text-white hover:text-accent transition-colors" variant="link">Log in</app-button>
      <app-button variant="bordered">Signup</app-button>
    </div>
  </nav>
  <Teleport to="body">
    <nav v-if="isMenuOpen" class="fixed top-0 w-full py-4 h-full z-50 bg-primary left-0">
      <div class="px-8 mb-12 flex items-center justify-between">
        <NuxtImg
          src="/logo.svg"
          alt="Vue School"
          width="170"
          height="56"
          decoding="async"
          loading="lazy"
        />

        <button @click="isMenuOpen = false">
          Close [X]
        </button>
      </div>
      <navbar-menu :links="links" />

      <div class="flex sm:hidden items-center flex-col justify-center mt-12 px-6 gap-4">
        <app-button block variant="primary">Login</app-button>
        <app-button block variant="bordered">Signup</app-button>
      </div>
    </nav>
  </Teleport>
</template>
