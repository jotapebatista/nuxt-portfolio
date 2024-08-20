<template>
	<div class="hidden sm:block sm:absolute top-1/2 left-4">
		<div class="flex flex-col gap-2">
			<div
				v-for="(element, index) in elements"
				:key="index"
				class="cursor-pointer"
				@click="handleClick(element)"
			>
				<UTooltip :text="element.name" :popper="{ placement: 'right-end' }">
					<Icon
						:name="element.icon"
						:class="`text-${element.color}-400 h-6 w-6`"
					/>
				</UTooltip>
			</div>

			<div class="w-8 h-8 rotate-90 -mx-5 border-t-2 border-white"></div>
			<p
				class="text-emerald-400 text-xs font-semibold -rotate-90 mt-6 -ml-5"
			>
				Follow Me
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Element {
	icon: string;
	color: string;
	url?: string;
	name?: string;
	callback?: () => void;
}

interface Props {
	elements: Element[];
}

const props = defineProps<Props>();

const handleClick = (element: Element) => {
	if (element.callback) {
		element.callback();
	} else if (element.url) {
		window.open(element.url, "_blank");
	}
};
</script>
