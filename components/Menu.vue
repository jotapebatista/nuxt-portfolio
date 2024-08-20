<template>
	<header
		class="p-4 bg-slate-700 flex justify-between items-center shadow-md"
	>
		<nav class="flex items-center justify-between gap-4">
			<!-- Loop through the menuItems prop to generate the menu -->
			<NuxtLink
				v-for="(item, index) in menuItems"
				:key="index"
				:to="item.to"
				class="text-white hover:text-emerald-500"
			>
				{{ item.label }}
			</NuxtLink>
			<div class="absolute top-4 right-4 z-10">
				<button
					@click="toggleDarkMode"
					class="text-white hover:text-emerald-500"
				>
					<Icon
						:name="darkMode ? 'uil:sun' : 'uil:moon'"
						class="h-6 w-6"
					/>
				</button>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
defineProps({
	menuItems: {
		type: Array as () => Array<{ label: string; to: string }>,
		required: true,
	},
});

const darkMode = ref(false);

const toggleDarkMode = () => {
	darkMode.value = !darkMode.value;
	if (darkMode.value) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};
</script>
