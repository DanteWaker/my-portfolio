<script setup lang="ts">
const props = defineProps(['icon'])


// Precisa estar em uma lista UL html para funcionar corretamente
</script>

<template>
  <li class="flex justify-center items-center">
    <UButton
      class="w-[3.2rem] h-[3.2rem] shadow-none transition-all duration-300 flex justify-center items-center hover:w-[4rem] hover:h-[4rem]">
      <Icon :name="props.icon" class="text-customPrimary-400 w-full h-full hover:w-[4rem] hover:h-[4rem]" />
    </UButton>
  </li>
</template>