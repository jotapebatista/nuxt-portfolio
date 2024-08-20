<template>
	<div
		class="h-screen w-screen bg-gradient-to-b from-slate-200 to-emerald-200 dark:from-slate-900 dark:to-blue-950"
	>
		<div class="fixed w-full top-0 z-20">
			<Menu
				:menuItems="[
					{ label: 'Home', to: '/' },
					{ label: 'About', to: '/about' },
					{ label: 'Projects', to: '/projects' },
				]"
			/>
		</div>

		<!-- Content below the fixed menu -->
		<div class="pt-16">
			<SocialLinks :elements="socialLinks" />
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
const downloadCV = () => {
	const link = document.createElement("a");
	link.href = "/JoaoBatista_CV_EN.pdf";
	link.download = "JoaoBatista_CV_EN.pdf";
	link.click();
};

const socialLinks = [
	{
		icon: "uil:github",
		color: "emerald",
		url: "https://github.com/jotapebatista",
		name: "Github"
	},
	{
		icon: "uil:linkedin",
		color: "emerald",
		url: "https://linkedin.com/in/jotapebatista",
		name: "LinkedIn"
	},
	{ icon: "uil:file-download", color: "emerald", callback: downloadCV, name:"CV" },
];
</script>
