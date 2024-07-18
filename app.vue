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
	<main class="relative bg-customBackground-400 text-customPrimary-400 overflow-hidden">
		<section
			id="title-section"
			class="w-full flex flex-col"
		>
			<Header />
			<TitleSection />

			<ProjectsSection />

			<ProfileSection />

			<ContactSection />
		</section>
	</main>
</template>
