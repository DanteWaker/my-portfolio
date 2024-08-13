<script setup lang="ts">
type TWorkingIcon = {
	name: string;
};
const workingIcons: TWorkingIcon[] = [
	{ name: 'devicon:csharp' },
	{ name: 'skill-icons:dotnet' },
	{ name: 'skill-icons:react-dark' },
	{ name: 'devicon:nextjs-wordmark' },
	{ name: 'devicon:vuejs' },
	{ name: 'devicon:nuxtjs' },
	{ name: 'skill-icons:typescript' },
	{ name: 'skill-icons:javascript' },
	{ name: 'logos:nodejs-icon' },
	{ name: 'skill-icons:sass' },
	{ name: 'devicon:git' },
	{ name: 'devicon:tailwindcss' },
	{ name: 'logos:docker-icon' },
	{ name: 'logos:material-ui' },
	{ name: 'devicon:vscode' },
	{ name: 'skill-icons:redux' },
	{ name: 'devicon:html5-wordmark' },
	{ name: 'logos:css-3' },
	{ name: 'devicon:bitbucket-wordmark' },
	{ name: 'devicon:nestjs' },
	{ name: 'devicon:mysql-wordmark' },
	{ name: 'devicon:postgresql-wordmark' },
	{ name: 'devicon:mongodb-wordmark' },
	{ name: 'devicon:swagger' },
];
</script>

<template>
	<section class="flex flex-col">
		<section class="mt-20">
			<div
				class="flex justify-around items-center flex-col-reverse font-semibold p-4 pb-36 mb-16
			laptop:flex-row"
			>
				<div class="flex flex-col justify-center items-start font-normal laptop:font-[150%] laptop:mr-8">
					<p class="text-xl text-center font-light laptop:text-5xl text-customPrimary-400/50">
						Denner Nascimento
					</p>
					<h1 class="text-5xl font-black text-start laptop:text-[6rem]">
						Desenvolvedor de Software
					</h1>
					<p class="text-lg text-start font-normal laptop:text-center">
						Desenvolvimento de software com tecnologias modernas e práticas ágeis
					</p>

					<div class="w-full laptop:mt-12">
						<div class="w-full rounded-full p-2 bg-customBackground-400 mt-4">
							<ul
								class="space-x-2 w-full h-[3rem] flex flex-col justify-start items-center
							laptop:flex-row laptop:gap-12"
							>
								<ULink
									class="w-full"
									to="https://github.com/DanteWaker"
									target="_blank"
								>
									<ButtonIcon
										icon="bi:github"
										text="Github"
									/>
								</ULink>
								<ULink
									class="w-full"
									to="https://www.linkedin.com/in/josedenner/"
									target="_blank"
								>
									<ButtonIcon
										icon="bi:linkedin"
										text="Linkedin"
									/>
								</ULink>
								<ULink
									class="w-full"
									to="https://devbydenner.s3.us-east-2.amazonaws.com/Denner+-+Curriculo+Desenvolvedor.pdf"
									target="_blank"
								>
									<ButtonIcon
										icon="pepicons-pop:file"
										text="Currículo"
									/>
								</ULink>
							</ul>
						</div>
					</div>
				</div>
				<div class="m-8 laptop:w-[60%] laptop:m-12">
					<img
						class="w-full h-full rounded-3xl"
						src="https://devbydenner.s3.us-east-2.amazonaws.com/foto_perfil.png"
					>
				</div>
			</div>
			<div class=" flex flex-col justify-start items-center font-light p-8 tracking-widest">
				<p class="text-md text-center animate-bounce">
					VEJA MEU TRABALHO
				</p>
				<div class="w-[1px] h-6 bg-customPrimary-400/50 mt-3 animate-bounce" />
			</div>
		</section>
		<section
			id="tools"
			class="flex w-full"
		>
			<div class="flex  animate-spin-slow shrink-0 select-none">
				<div
					v-for="(item, index) in workingIcons"
					:key="index"
					class="h-[3rem] w-[3rem] mx-4"
				>
					<Icon
						:name="item.name"
						class="h-full w-full"
						color="black"
					/>
				</div>
				<div
					v-for="(item, index) in workingIcons"
					:key="index"
					class="h-[3rem] w-[3rem] mx-4"
				>
					<Icon
						:name="item.name"
						class="h-full w-full"
						color="black"
					/>
				</div>
			</div>
		</section>
	</section>
</template>
