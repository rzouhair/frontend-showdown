<script setup lang="ts">

const sections = [
  {
    title: 'Products',
    links: [
      { label: 'Courses', to: '#' },
      { label: 'Workshops', to: '#' },
      { label: 'Vue Masterclass', to: '#' },
      { label: 'Mastering Nuxt', to: '#' },
    ],
  },
  {
    title: 'Pricing',
    links: [
      { label: 'Plans', to: '#' },
    ],
  },
  {
    title: 'Connect with us',
    links: [
      { label: 'About Us', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Contact us', to: '#' },
    ],
  },
  {
    title: 'Events',
    links: [
      { label: 'Vue.js Nation', to: '#' },
      { label: 'Nuxt Nation', to: '#' },
      { label: 'Vue.js Forge', to: '#' },
    ],
  },
  {
    title: 'Corporate',
    links: [
      { label: 'Corporate Training', to: '#' },
      { label: 'Developer Recruitment', to: '#' },
      { label: 'Course Development', to: '#' },
      { label: 'On-site Workshops', to: '#' },
      { label: 'Consulting', to: '#' },
      { label: 'Affiliate Programs', to: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Articles', to: '#' },
    ],
  }
]

const socialMediaLinks = [
  {
    icon: '/images/Facebook.png',
    link: 'https://www.facebook.com',
    alt: 'Facebook'
  },
  {
    icon: '/images/Twitter.png',
    link: 'https://www.twitter.com',
    alt: 'Twitter'
  },
  {
    icon: '/images/Github.png',
    link: 'https://www.github.com',
    alt: 'Github'
  },
  {
    icon: '/images/Linkedin.png',
    link: 'https://www.linkedin.com',
    alt: 'Linkedin'
  },
  {
    icon: '/images/Youtube.png',
    link: 'https://www.youtube.com',
    alt: 'Youtube'
  },
]

</script>

<template>
  <footer class="grid md:gap-16 gap-10 w-container footer:grid-cols-2 mb-35">
    <div class="tight:pr-20 pr-0 flex flex-col items-center footer:items-start">
      <NuxtImg
        src="/images/logo.svg"
        alt="Vue School"
        width="268"
        height="88"
        decoding="async"
        loading="lazy"
      />
      <p class="text-base mt-10 footer:mt-[5.375rem] footer:text-left text-center">Thanks to fine people like you, Vue School can proudly sponsor Evan and the future of Vue.js by being a Platinum Patreon</p>
      <div class="mt-15">
        <p class="font-semibold uppercase text-[1.375rem] text-white-muted mb-9 footer:text-left text-center">Follow us in social media</p>
        <div class="flex items-center justify-center md:justify-start md:gap-[2.625rem] gap-2 flex-wrap">
          <a
            v-for="platform in socialMediaLinks"
            :href="platform.link"
            target="_blank"
            class="hover:opacity-80 transition-opacity"
          >
            <NuxtImg
              :src="platform.icon"
              :alt="platform.alt"
              width="60"
              height="60"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:gap-12 gap-8 md:h-[36.75rem] md:items-start items-center flex-wrap">
      <footer-section
        v-for="section in sections"
        :key="section.title"
        :title="section.title"
        :links="section.links"
      />
    </div>
  </footer>
</template>
