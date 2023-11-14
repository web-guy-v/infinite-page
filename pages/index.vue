<script setup>

const content = {
	section1: {
		title: `Section 1`,
		descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo voluptatem culpa reiciendis? Voluptatum eaque similique, libero, quas aspernatur qui expedita corporis reiciendis ex illo reprehenderit adipisci itaque quaerat cum!`
	},
	section2: {
		title: `Section 2`,
		descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo voluptatem culpa reiciendis? Voluptatum eaque similique, libero, quas aspernatur qui expedita corporis reiciendis ex illo reprehenderit adipisci itaque quaerat cum!`
	},
	section3: {
		title: `Section 3`,
		descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo voluptatem culpa reiciendis? Voluptatum eaque similique, libero, quas aspernatur qui expedita corporis reiciendis ex illo reprehenderit adipisci itaque quaerat cum!`
	}
}

</script>
<template>

	<div class="main-page">

		<HeroSection />

		<TheSection
			:title="content.section1.title"
			:descr="content.section1.descr"
		/>

		<TheSection
			:title="content.section2.title"
			:descr="content.section2.descr"
			is-black
		/>

		<TheSection
			:title="content.section3.title"
			:descr="content.section3.descr"
		/>

		<TheFooter />

		<div class="wrapper-for-infinity-scroll">
			<HeroSection />
		</div>



	</div>

</template>
<style lang='scss' scoped>

.wrapper-for-infinity-scroll {
	height: 100vh;
	overflow: hidden;
}

</style>