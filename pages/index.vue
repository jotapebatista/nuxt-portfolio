<template>
	<div class="p-4 flex flex-col items-center justify-center h-full gap-4">
		<!-- <div>
			<div class="relative w-24 h-24">
				<img
					class="absolute inset-x-0 bottom-0 w-full h-full object-cover"
					src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
					alt="blob"
				/>
				<img
					class="absolute inset-x-0 bottom-0 rounded-full"
					src="/me.png"
					alt="my picture"
				/>
			</div> 
		</div> -->
		<div class="flex flex-col items-center">
			<div>
				<span class="font-mono">Hi</span
				><Icon name="fluent-emoji-flat:victory-hand-medium" />
				<span> I'm João Batista</span>
			</div>

			<Typewriter
				:textArray="typewriterArr"
				:typingSpeed="150"
				:delayBetween="1500"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "default",
	title: "Login",
});
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
	},
	{
		icon: "uil:linkedin",
		color: "emerald",
		url: "https://linkedin.com/in/jotapebatista",
	},
	{ icon: "uil:file-download", color: "emerald", callback: downloadCV },
];

const typewriterArr = [
	"Full Stack Developer",
	"Problem Solver",
	"Innovator",
	"Code Enthusiast",
	"Continuous Learner",
];
</script>
