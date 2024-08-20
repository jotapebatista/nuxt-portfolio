<template>
	<div class="flex items-center">
		<span class="text-lg font-mono">{{ displayedText }}</span>
		<span
			v-if="isTyping"
			class="ml-1 w-1.5 h-6 bg-gray-300 animate-blink"
		></span>
	</div>
</template>

<script setup lang="ts">

interface Props {
	textArray: string[];
	typingSpeed?: number;
	delayBetween?: number;
}

const props = defineProps<Props>();

// Reactive state
const displayedText = ref("");
const isTyping = ref(false);

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterEffect = async () => {
	if (currentIndex >= props.textArray.length) {
		currentIndex = 0; // Restart from the first string
	}

	const currentText = props.textArray[currentIndex];

	if (!isDeleting && charIndex < currentText.length) {
		isTyping.value = true;
		displayedText.value = currentText.slice(0, charIndex + 1);
		charIndex++;
		await new Promise((resolve) =>
			setTimeout(resolve, props.typingSpeed || 200)
		);
		typewriterEffect();
	} else if (isDeleting && charIndex > 0) {
		displayedText.value = currentText.slice(0, charIndex - 1);
		charIndex--;
		await new Promise((resolve) =>
			setTimeout(resolve, props.typingSpeed || 200)
		);
		typewriterEffect();
	} else if (!isDeleting) {
		await new Promise((resolve) =>
			setTimeout(resolve, props.delayBetween || 1500)
		);
		isDeleting = true;
		typewriterEffect();
	} else {
		isDeleting = false;
		charIndex = 0;
		currentIndex++;
		await new Promise((resolve) =>
			setTimeout(resolve, props.typingSpeed || 200)
		);
		typewriterEffect();
	}
};

watchEffect(() => {
	typewriterEffect();
});
</script>

<style scoped>
@keyframes blink {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}

.animate-blink {
	animation: blink 1s infinite;
}
</style>
