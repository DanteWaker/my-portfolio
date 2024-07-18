<template>
	<section class="mb-8">
		<div>
			<h1 class="text-4xl font-bold text-center mb-4">
				Sobre
			</h1>
			<p class="text-center p-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, nunc
				nec ultricies ultricies, nunc nec ultricies
			</p>
			<div class="flex justify-around p-8">
				<span class="bg-blue-400 text-customBackground-400 p-1 rounded-full">React</span>
			</div>
			<p class="text-center p-4">
				Tem interesse nos meus projetos? Entre em contato comigo:
			</p>
		</div>
		<div class="relative flex justify-center">
			<div
				class="w-[20rem] h-[20rem] z-30 rounded-3xl overflow-hidden border-[1px] border-customPrimary-400 shadow-lg"
			>
				<NuxtImg
					class="w-full h-full"
					format="svg"
					quality="80"
					src="/foto_perfil.png"
					loading="lazy"
					fit="fill"
				/>
			</div>
			<div
				class="absolute -top-3 right-10 w-[20rem] h-[20rem] z-20 bg-customPrimary-400 rounded-3xl overflow-hidden border-[1px] border-customPrimary-400 shadow-lg"
			/>
		</div>
	</section>
</template>
