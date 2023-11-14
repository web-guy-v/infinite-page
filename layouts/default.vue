<script setup>

	onMounted(() => {
		useSmoothScroll()
	})

</script>
<template>

	<div id="viewport">
		<slot />
	</div>

</template>
<style lang='scss' scoped>
</style>