<template>
  <main class="relative bg-customBackground-400 text-customPrimary-400">
    <section id="title-section" class="w-full flex flex-col">
      <Header />
      <section class="flex flex-col">
        <section class="h-[100vh]">
          <div class="flex flex-col justify-center items-start font-semibold h-[75vh] p-8">
            <p class="text-xl text-center">Opa! Me chamo</p>
            <h1 class="text-6xl text-center font-black text-start">Denner Nascimento</h1>
            <p class="text-lg text-center font-normal">e sou um Desenvolvedor de Software</p>
          </div>
          <div class=" flex flex-col justify-start items-center font-light h-[25vh] TEXT p-8 tracking-widest">
            <p class="text-md text-center animate-bounce">VEJA MEU TRABALHO</p>
            <div class="w-[1px] h-6 bg-customPrimary-400/50 mt-3 animate-bounce" />
          </div>
        </section>
        <section>
          <Icon name="devicon:csharp" class="h-16 w-16" />
        </section>
      </section>
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