<script setup lang="ts">
useServerSeoMeta({
	title: 'Portfólio | Denner Nascimento',
	ogTitle: 'Portfólio | Denner Nascimento',
	description: 'Portfólio feito para mostrar os trabalhos de José Denner Lira do Nascimento, um Desenvolvedor de Software, com foco no Front-end e também com experiência com desenvolvimento FullStack, de Arapiraca, Alagoas. Com toda experiência, consegue desenvolver qualquer projeto e aprender qualquer tecnologia necessária para qualquer desafio proposto. Trabalhou em vários projetos, dente ele, a Sua Formatura, uma empresa que gerencia formatura e tem uma mini fintech integrada, empresa de Maceió, Alagoas, além de trabalhar como Quality Assurance (QA) na empresa Quimbik Inc. uma empresa Americana (EUA) e melhorou bastando o seu inglês com essa experiência. Trabalho com as principais tecnologias Front-end da atualidade: React, Vue, Angular, Blazor, com várias linguagens, dentre elas Javascript e C#, com .NET',
	ogDescription: 'Portfólio feito para mostrar os trabalhos de José Denner Lira do Nascimento, um Desenvolvedor de Software, com foco no Front-end e também com experiência com desenvolvimento FullStack, de Arapiraca, Alagoas. Com toda experiência, consegue desenvolver qualquer projeto e aprender qualquer tecnologia necessária para qualquer desafio proposto. Trabalhou em vários projetos, dente ele, a Sua Formatura, uma empresa que gerencia formatura e tem uma mini fintech integrada, empresa de Maceió, Alagoas, além de trabalhar como Quality Assurance (QA) na empresa Quimbik Inc. uma empresa Americana (EUA) e melhorou bastando o seu inglês com essa experiência.',
	ogImage: 'https://devbydenner.s3.us-east-2.amazonaws.com/ogimage.png',
	ogUrl: 'devbydenner.com',
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<main class="bg-customBackground-400 text-customPrimary-400 overflow-hidden flex flex-col items-center scroll-smooth">
		<Header />
		<section
			id="title-section"
			class="relative w-full flex flex-col max-w-[1280px] scroll-smooth"
		>
			<TitleSection />

			<ProjectsSection />

			<ProfileSection />

			<!-- <ContactSection /> -->

			<FooterSection />
		</section>
	</main>
</template>
