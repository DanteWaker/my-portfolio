<script setup lang="ts">
const props = defineProps({
	icon: { type: String, default: '' },
	text: { type: String, default: '' },
});
</script>

<template>
	<li class="flex justify-center items-center mt-12">
		<button
			:onClick="() => console.log('Clicou')"
			class="flex justify-center items-center border-[2px] border-customPrimary-400/80 p-4 gap-4
			min-w-[10rem] h-[4rem] rounded-3xl shadow-md"
		>
			<Icon
				:name="props.icon"
				class="w-[2rem] h-[2rem]"
			/>
			<span class="uppercase text-lg">{{props.text}}</span>
		</button>
	</li>
</template>
