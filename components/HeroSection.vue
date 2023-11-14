<script setup>
</script>
<template>

	<div class="hero">
		<TheHeader />

		<div class="hero__content _container">
			<div class="hero__title h1">
				lucky stones
			</div>
		</div>
	</div>

</template>
<style lang='scss' scoped>

.hero {
	height: 150vh;
	background-image: url('/1.jpg');
	background-size: cover;
	background-position: center center;
	position: relative;
}

.hero__content {
	height: 100vh;
	display: flex;
	align-items: flex-end;
	color: $color-white;
	mix-blend-mode: overlay;
}
</style>