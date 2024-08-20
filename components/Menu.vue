<template>
	<header
		class="p-4 bg-slate-700 flex justify-between items-center shadow-md"
	>
		<nav class="flex items-center justify-between gap-4">
			<NuxtLink to="/" class="text-white hover:text-emerald-500"
				>Home</NuxtLink
			>
			<NuxtLink to="/about" class="text-white hover:text-emerald-500"
				>About</NuxtLink
			>
			<NuxtLink to="/projects" class="text-white hover:text-emerald-500"
				>Projects</NuxtLink
			>
		</nav>
	</header>
</template>
<script setup lang="ts"></script>
