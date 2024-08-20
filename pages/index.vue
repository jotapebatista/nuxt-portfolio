<template>
	<transition
		name="fade"
		mode="out-in"
		enter-active-class="transition-opacity ease-in duration-500"
		leave-active-class="transition-opacity ease-out duration-500"
	>
		<div
			class="p-4 flex flex-col items-center justify-center h-[calc(100vh-65px)] gap-4"
		>
			<div>
				<div class="bg-emerald-400 rounded-full relative w-60 h-60">
					<!-- <img
					class="absolute inset-x-0 bottom-0 w-full h-full object-cover"
					src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
					alt="blob"
				/> -->
					<img
						class="absolute inset-x-0 bottom-0 rounded-full"
						src="/me.png"
						alt="my picture"
					/>
				</div>
			</div>
			<div class="flex flex-col items-center">
				<div class="text-2xl">
					<span class="font-mono">Hi</span
					><Icon name="fluent-emoji-flat:victory-hand-medium" />
					<span>
						I'm <span class="font-black">João Batista</span></span
					>
				</div>

				<Typewriter
					:textArray="typewriterArr"
					:typingSpeed="150"
					:delayBetween="1500"
				/>
			</div>
			<button @click="authenticate">Connect to Spotify</button>

		</div>
	</transition>
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

const router = useRouter();

const authenticate = () => {
  window.location.href = '/api/spotify-auth'; // Redirect to the auth API route
};
const nowPlaying = ref(null);

onMounted(async () => {
	try {
		const data = await fetch("/api/spotify-now-playing");
		if (data.ok) {
			const res = await data.json();
			nowPlaying.value = res;
		}
	} catch (error) {
		console.error("Failed to fetch now playing data:", error);
	}
});

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
