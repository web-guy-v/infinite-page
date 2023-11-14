<script setup>

defineProps({
	title: String,
	descr: String,
	isBlack: Boolean
})

</script>
<template>

	<div
		class="section"
		:class="{_black: isBlack}"
	>

		<div class="section__content _container">
			<div class="section__title h2">
				{{ title }}
			</div>
			<div class="section__descr p1">
				{{ descr }}
			</div>
		</div>

	</div>

</template>
<style lang='scss' scoped>

.section {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.section__title {
	text-align: center;
}

.section__descr {
	width: 700px;
	text-align: justify;
	text-align-last: justify;
	margin-top: 30px;
}

.section._black {
	background: $color-black;
	color: $color-white;
}

</style>