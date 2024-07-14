<script lang="ts">

</script>

<template>
  <div class="w-full">
    <div class="w-full rounded-full p-2 bg-customBackground-400 mt-4">
      <ul class="space-x-2 w-[full] h-[3rem] flex justify-around items-center">
        <ButtonIcon icon="material-symbols:mail" aditionalClasses="text-customPrimary-400" />
        <ButtonIcon icon="bi:github" aditionalClasses="text-customPrimary-400" />
        <ButtonIcon icon="logos:whatsapp-icon" aditionalClasses="text-green-500" :isPrimary="true" />
        <ButtonIcon icon="bi:linkedin" aditionalClasses="text-customPrimary-400" />
        <ButtonIcon icon="pepicons-pop:file" aditionalClasses="text-customPrimary-400" />
      </ul>
    </div>
  </div>
</template>