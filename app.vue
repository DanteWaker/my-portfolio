<template>
  <main class="relative bg-customBackground-400 text-customPrimary-400">
    <section id="title-section" class="h-[100vh] w-full flex justify-center pt-20">
      <Header />
      <Sidebar />
    </section>
  </main>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Portfólio | Denner Nascimento',
  ogTitle: 'Portfólio | Denner Nascimento',
  description: 'Portfólio desenvolvido por Denner Nascimento',
  ogDescription: 'Portfólio desenvolvido por Denner Nascimento',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>