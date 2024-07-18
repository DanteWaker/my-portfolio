<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
	name: z.string(),
	email: z.string().email('Invalid email'),
	message: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
	name: undefined,
	email: undefined,
	message: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
	// Do something with data
	console.log(event.data);
}
</script>

<template>
	<section class="my-16">
		<div class="h-[1px] bg-customPrimary-400/30 m-8" />
		<div class="my-24">
			<h1 class="text-4xl font-bold text-center mb-4">
				<span class="font-normal text-customPrimary-400/30">Entre em</span> contato
			</h1>
			<div class="m-8">
				<UForm
					:schema="schema"
					:state="state"
					class="space-y-4"
					@submit="onSubmit"
				>
					<UFormGroup
						name="name"
					>
						<UInput
							v-model="state.name"
							size="xl"
							type="name"
							placeholder="Seu nome"
							class="shadow-lg rounded-full"
						/>
					</UFormGroup>

					<UFormGroup
						name="email"
					>
						<UInput
							v-model="state.email"
							size="xl"
							placeholder="E-mail"
							class="shadow-lg rounded-full"
						/>
					</UFormGroup>

					<UFormGroup
						name="message"
					>
						<UInput
							v-model="state.message"
							size="xl"
							type="message"
							placeholder="Sua mensagem"
							class="shadow-lg rounded-full"
						/>
					</UFormGroup>

					<UButton
						type="submit"
						class="w-full bg-slate-500 shadow-lg h-10 active:bg-slate-700"
					>
						Enviar
					</UButton>
				</UForm>
			</div>
		</div>
	</section>
</template>
