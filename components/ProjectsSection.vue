<script setup lang="ts">
useServerSeoMeta({
	title: 'Portfólio | Denner Nascimento',
	ogTitle: 'Portfólio | Denner Nascimento',
	description: 'O fantástico portfólio de Denner Nascimento',
	ogDescription: 'O fantástico portfólio de Denner Nascimento',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
});

const fakeList = [
	{
		name: 'Sua Formatura',
		mobileImage: 'https://devbydenner.s3.us-east-2.amazonaws.com/SuaFormatura/SuaFormaturaDashboardMobile.png',
		desktopImage: 'https://devbydenner.s3.us-east-2.amazonaws.com/SuaFormatura/SuaFormaturaDashboardDesktop.png',
		description: 'A Sua Formatura é o lugar ideal para organizar a sua formatura com segurança, praticidade e inteligência. Com o nosso aplicativo, você pode planejar cada evento conforme o desejo da sua turma, utilizando diversas estratégias para garantir a melhor formatura gastando menos. Arrecade dinheiro de forma segura e transparente, aceitando pagamentos via boleto, PIX ou cartão. Além disso, com a nossa Formatura Garantida, você tem a segurança de receber o seu dinheiro de volta em caso de qualquer problema. Organize a sua formatura com a Sua Formatura e faça desse momento uma experiência inesquecível.',
		technologies: ['React', 'Material-UI', 'ImmutableJS', 'Redux', 'JavaScript'],
		siteURL: 'https://suaformatura.com',
	},
	{
		name: 'Calculadora das milhas',
		mobileImage: 'https://devbydenner.s3.us-east-2.amazonaws.com/CalculadoraDasMilhas/CalculadoraDasMilhasMobile.png',
		desktopImage: 'https://devbydenner.s3.us-east-2.amazonaws.com/CalculadoraDasMilhas/CalculadoraDasMilhasDesktop.png',
		description: 'Calculadora de milhas aéreas simples feita para o gestor de milhas aéreas Caio Nascimento.',
		technologies: ['NextJS', 'ReactJS', 'Tailwind', 'Zustand', 'Typescript'],
		siteURL: 'https://calculadoradasmilhas.com',
	},
];
</script>

<template>
	<section class="my-16 w-full flex flex-col justify-center items-center gap-4">
		<div class="flex justify-center items-center">
			<h1 class="text-4xl font-bold">
				Projetos
			</h1>
		</div>

		<div
			v-for="(project, index) in fakeList"
			:key="index"
			class="w-full flex flex-col justify-center items-center mb-8 laptop:max-w-[60%]"
		>
			<div class="mb-6 h-full">
				<div class="w-full mb-12">
					<h2
						class="w-full text-center text-2xl
					laptop:text-bold"
					>
						{{ project.name }}
					</h2>
				</div>
				<div class="relative flex flex-col gap-10 h-full justify-center items-center">
					<div class="relative">
						<div
							class="border-[2px] border-solid border-customPrimary-400 overflow-hidden
					w-[384px] h-[216px] rounded-xl shadow-lg
					laptop:w-[584px] laptop:h-[316px]
					"
						>
							<img
								class="w-full h-full"
								:src="project.desktopImage"
							>
						</div>
						<div
							class="absolute -bottom-8 left-2 border-[2px] border-solid border-customPrimary-400 overflow-hidden
						w-[70px] h-[150px] rounded-xl shadow-lg
						laptop:w-[100px] laptop:h-[200px]
						"
						>
							<img
								class="w-full h-full"
								:src="project.mobileImage"
							>
						</div>
					</div>

					<div class="w-full h-full p-4 flex flex-col justify-between">
						<p class="mb-4 max-h-36 overflow-y-auto">
							{{ project.description }}
						</p>

						<div class="flex w-full justify-around items-center mb-8  gap-4 flex-wrap">
							<span
								v-for="(tech, indexChild) in project.technologies"
								:key="indexChild"
								class="font-bold text-purple-600 uppercase"
							>{{ tech }}</span>
						</div>
						<ULink
							class="w-full"
							:to="project.siteURL"
							target="_blank"
						>
							<UButton
								label="VER PROJETO"
								variant="solid"
								class="h-12 w-full flex justify-center items-center text-customPrimary-400 bg-inherit border-2 border-customPrimary-400"
							>
								<template #trailing>
									<UIcon
										name="i-heroicons-arrow-right-20-solid"
										class="w-5 h-5"
									/>
								</template>
							</UButton>
						</ULink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
