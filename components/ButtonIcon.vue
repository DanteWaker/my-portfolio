<script setup lang="ts">
const props = defineProps(['icon', 'aditionalClasses', 'isPrimary'])

// Precisa estar em uma lista UL html para funcionar corretamente
</script>

<template>
  <li class="flex justify-center items-center">
    <button :onClick="() => console.log('Clicou')" :class="`${props.isPrimary ? 'w-[3.2rem] h-[3.2rem] hover:w-[4.4rem] hover:h-[4.4rem]' : 'w-[2rem] h-[2rem] hover:w-[3rem] hover:h-[3rem]'} 
      shadow-none transition-all duration-300 flex justify-center items-center border-none 
      hover:border-none active:border-none focus:border-none`">
      <Icon :name="props.icon" :class="`w-full h-full hover:w-[4rem] hover:h-[4rem] ${props.aditionalClasses}`" />
    </button>
  </li>
</template>