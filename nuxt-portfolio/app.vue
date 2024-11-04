<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  useHead({
    viewport: "width=device-width, initial-scale=1, maxinum-scale=1",
    charset: "utf-8",
    link: [{rel: "icon", type: "image/x-icon", href: "/images/favicon.ico"}]
  })
</script>