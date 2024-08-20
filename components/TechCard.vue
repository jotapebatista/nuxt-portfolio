<template>
	<div
		class="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
	>
		<div :class="['text-5xl mb-4', color]">
			<Icon :name="icon" />
		</div>
		<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
			{{ title }}
		</h3>
	</div>
</template>

<script setup lang="ts">

defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
