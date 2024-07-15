<script setup lang="ts">
type TWorkingIcon = {
  name: string
}
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
  <section class="flex flex-col">
    <section class="h-[100vh]">
      <div class="flex flex-col justify-center items-start font-semibold h-[75vh] p-4">
        <div class="flex flex-col justify-center items-start font-semibold">
          <p class="text-xl text-center">Opa! Me chamo</p>
          <h1 class="text-5xl text-center font-black text-start">Denner Nascimento</h1>
          <p class="text-lg text-center font-normal">e sou um Desenvolvedor de Software</p>
          <Sidebar />
        </div>
      </div>
      <div class=" flex flex-col justify-start items-center font-light h-[25vh] TEXT p-8 tracking-widest">
        <p class="text-md text-center animate-bounce">VEJA MEU TRABALHO</p>
        <div class="w-[1px] h-6 bg-customPrimary-400/50 mt-3 animate-bounce" />
      </div>
    </section>
    <section id="tools" class="flex w-full">
      <div class="flex  animate-spin-slow shrink-0 select-none">
        <div class="h-[3rem] w-[3rem] mx-4" v-for="(item) in workingIcons">
          <Icon :name="item.name" class="h-full w-full" color="black" />
        </div>
        <div class="h-[3rem] w-[3rem] mx-4" v-for="(item) in workingIcons">
          <Icon :name="item.name" class="h-full w-full" color="black" />
        </div>
      </div>
    </section>
  </section>
</template>
