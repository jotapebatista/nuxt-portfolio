<template>
	<transition
	  enter-active-class="transition transform ease-out duration-500"
	  enter-from-class="opacity-0 translate-y-10"
	  enter-to-class="opacity-100 translate-y-0"
	  leave-active-class="transition transform ease-in duration-500"
	  leave-from-class="opacity-100 translate-y-0"
	  leave-to-class="opacity-0 translate-y-10"
	  mode="out-in"
	>
	  <div
		class="flex flex-col h-[calc(100vh-65px)] w-full items-center justify-center px-6"
		key="page-content"
	  >
		<div
		  class="flex flex-col items-center justify-center gap-4 max-w-2xl text-center"
		>
		  <h1 class="text-5xl font-bold font-mono text-emerald-500">
			Hey there, I'm João. 🚀
		  </h1>
		  <p class="text-lg text-gray-700 dark:text-gray-300">
			As a junior Full Stack Developer, I'm on a journey of turning
			innovative ideas into beautifully functional web applications. The
			14-week coding bootcamp I conquered ignited my passion for both
			front-end and back-end technologies. My coding journey is fueled by
			the excitement of bringing creative visions to life.
		  </p>
		  <p class="text-lg text-gray-700 dark:text-gray-300">
			Whether it's crafting pixel-perfect UIs or building robust APIs, I
			thrive on challenges and collaborations. Let's build something
			awesome together!
		  </p>
		</div>
  
		<!-- Tech Stack Section -->
		<div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
		  <TechCard
			v-for="(tech, index) in techStacks"
			:key="index"
			:icon="tech.icon"
			:title="tech.title"
			:color="tech.color"
		  />
		</div>
	  </div>
	</transition>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
	  layout: "default",
	  title: "Home",
  });
  
  const techStacks = [
	  { title: "JavaScript", icon: "logos:javascript", color: "text-yellow-500" },
	  { title: "CSS", icon: "logos:css-3", color: "text-yellow-500" },
	  { title: "HTML", icon: "logos:html-5", color: "text-yellow-500" },
	  { title: "Vue", icon: "logos:vue", color: "text-emerald-500" },
	  { title: "React", icon: "logos:react", color: "text-emerald-500" },
	  { title: "Nuxt", icon: "logos:nuxt-icon", color: "text-green-600" },
	  {
		  title: "Tailwind CSS",
		  icon: "logos:tailwindcss-icon",
		  color: "text-teal-400",
	  },
	  { title: "Node.js", icon: "logos:nodejs-icon", color: "text-green-700" },
	  { title: "Java", icon: "logos:java", color: "text-green-600" },
	  { title: ".NET", icon: "logos:dotnet", color: "text-green-600" },
	  { title: "SQL", icon: "logos:mysql-icon", color: "text-green-600" },
  
	  { title: "GitHub", icon: "logos:github-icon", color: "text-gray-800" },
  ];
  </script>
  