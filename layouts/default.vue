<template>
	<div
		class="h-screen w-screen bg-gradient-to-b from-slate-200 to-emerald-200 dark:from-slate-900 dark:to-blue-950"
	>
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
		<div class="fixed w-full">
			<Menu />
		</div>
		

		<SocialLinks :elements="socialLinks" />
		<slot />
	</div>
</template>

<script setup lang="ts">
const downloadCV = () => {
	const link = document.createElement("a");
	link.href = "/JoaoBatista_CV_EN.pdf";
	link.download = "JoaoBatista_CV_EN.pdf";
	link.click();
};

const darkMode = ref(false);

const toggleDarkMode = () => {
	darkMode.value = !darkMode.value;
	if (darkMode.value) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

const socialLinks = [
	{
		icon: "uil:github",
		color: "emerald",
		url: "https://github.com/jotapebatista",
	},
	{
		icon: "uil:linkedin",
		color: "emerald",
		url: "https://linkedin.com/in/jotapebatista",
	},
	{ icon: "uil:file-download", color: "emerald", callback: downloadCV },
];
</script>
