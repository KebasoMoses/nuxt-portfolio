<template>
    <div class="prose dark:prose-invert max-w-none">
      <ContentDoc path="/" />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Kebaso Moses',
  description: 'This is kebaso moses personal page',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://kebaso-moses.netlify.app/images/To%20post.jpg'
    }
  ]
})
</script>