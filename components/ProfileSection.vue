<template>
	<section
		id="about"
		class="mt-32 flex gap-8 flex-col justify-center items-center bg-customBackground-500 p-8"
	>
		<h1 class="text-4xl font-bold text-center mb-4">
			Sobre
		</h1>
		<article
			class="flex flex-col justify-around items-center
		laptop:flex-row"
		>
			<div class="w-[100%] laptop:w-[50%]">
				<p class="text-center p-4">
					Olá, meu nome é José Denner Lira do Nascimento, atuo com desenvolvimento de software freelancer na cidade de Arapiraca — AL há mais de 5 anos. Sou desenvolvedor front-end, mas também trabalho bastante como fullstack. Tenho experiência em várias tecnologias, como React, React.js, Next.js, Vue.js, Nuxt, Redux, TypeScript, Tailwind e Bootstrap, além de Node.js, Express, .NET e C#.
				</p>
				<p class="text-center p-4">
					Construí funcionalidades de alto desempenho ao longo da minha carreira, incluindo telas de autenticação, dashboards, tabelas interativas e interfaces de arrastar e soltar. Tenho experiência em gerenciamento de estado com Redux e Zustand. Também já trabalhei como líder técnico na parte de front-end, realizei Code Reviews e pratiquei Pair Programming. Conheço metodologias ágeis como Kanban e SCRUM, além de ter habilidades em UX/UI design.
				</p>
				<p class="text-center p-4">
					Estou sempre aprimorando minhas habilidades e aprendendo novas tecnologias, mantendo-me atualizado em um ambiente que nunca para de se reinventar.
				</p>
			</div>
			<figure class="flex flex-col justify-center gap-6">
				<div class="relative w-[20rem] h-[20rem]">
					<div
						class="absolute w-[20rem] h-[20rem] z-30 rounded-3xl overflow-hidden border-[1px] border-customPrimary-400 shadow-lg"
					>
						<img
							class="w-full h-full"
							src="https://devbydenner.s3.us-east-2.amazonaws.com/foto_perfil.png"
						>
					</div>
					<div
						class="absolute -top-2 -right-2 w-[20rem] h-[20rem] z-20 bg-customPrimary-400 rounded-3xl overflow-hidden border-[1px] border-customPrimary-400 shadow-lg"
					/>
				</div>
			</figure>
		</article>
	</section>
</template>
