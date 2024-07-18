<script lang="ts">
export default {
	name: 'SidebarComponent',
	// ...
};
</script>

<template>
	<div class="w-full">
		<div class="w-full rounded-full p-2 bg-customBackground-400 mt-4">
			<ul class="space-x-2 w-[full] h-[3rem] flex justify-around items-center">
				<ButtonIcon
					icon="material-symbols:mail"
					aditional-classes="text-customPrimary-400"
				/>
				<ButtonIcon
					icon="bi:github"
					aditional-classes="text-customPrimary-400"
				/>
				<ButtonIcon
					icon="logos:whatsapp-icon"
					aditional-classes="text-green-500"
					:is-primary="true"
				/>
				<ButtonIcon
					icon="bi:linkedin"
					aditional-classes="text-customPrimary-400"
				/>
				<ButtonIcon
					icon="pepicons-pop:file"
					aditional-classes="text-customPrimary-400"
				/>
			</ul>
		</div>
	</div>
</template>
