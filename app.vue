<script setup lang="ts">
type TWorkingIcon = {
  name: string
}

useServerSeoMeta({
  title: 'Portfólio | Denner Nascimento',
  ogTitle: 'Portfólio | Denner Nascimento',
  description: 'O fantástico portfólio de Denner Nascimento',
  ogDescription: 'O fantástico portfólio de Denner Nascimento',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const workingIcons: TWorkingIcon[] = [
  { name: 'devicon:csharp' },
  { name: 'skill-icons:dotnet' },
  { name: 'skill-icons:react-dark' },
  { name: 'devicon:nextjs-wordmark' },
  { name: 'devicon:vuejs' },
  { name: 'devicon:nuxtjs' },
  { name: 'skill-icons:typescript' },
  { name: 'skill-icons:javascript' },
  { name: 'logos:nodejs-icon' },
  { name: 'skill-icons:sass' },
  { name: 'devicon:git' },
  { name: 'devicon:tailwindcss' },
  { name: 'logos:docker-icon' },
  { name: 'logos:material-ui' },
  { name: 'devicon:vscode' },
  { name: 'skill-icons:redux' },
  { name: 'devicon:html5-wordmark' },
  { name: 'logos:css-3' },
  { name: 'devicon:bitbucket-wordmark' },
  { name: 'devicon:nestjs' },
  { name: 'devicon:mysql-wordmark' },
  { name: 'devicon:postgresql-wordmark' },
  { name: 'devicon:mongodb-wordmark' },
  { name: 'devicon:swagger' },
]

</script>

<template>
  <main class="relative bg-customBackground-400 text-customPrimary-400 overflow-hidden">
    <section id="title-section" class="w-full flex flex-col">
      <Header />
      <TitleSection />
    </section>
  </main>
</template>
