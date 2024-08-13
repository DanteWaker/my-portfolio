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

			<!-- <ContactSection /> -->

			<FooterSection />
		</section>
	</main>
</template>
