<script setup lang="ts">
useServerSeoMeta({
	title: 'Portfólio | Denner Nascimento',
	ogTitle: 'Portfólio | Denner Nascimento',
	description: 'O fantástico portfólio de Denner Nascimento',
	ogDescription: 'O fantástico portfólio de Denner Nascimento',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<main class="bg-customBackground-400 text-customPrimary-400 overflow-hidden flex flex-col items-center">
		<Header />
		<section
			id="title-section"
			class="relative w-full flex flex-col max-w-[1280px]"
		>
			<TitleSection />

			<ProjectsSection />

			<ProfileSection />

			<ContactSection />

			<FooterSection />

			<button
				:onClick="() => console.log('Clicou')"
				class="fixed bottom-16 right-16 w-[5rem] h-[5rem] hover:w-[6rem] hover:h-[6rem] transition-all duration-300"
			>
				<Icon
					name="logos:whatsapp-icon"
					class="w-full h-full"
				/>
			</button>
		</section>
	</main>
</template>
