<template>
	<div class="product">
		<img :src="product.image"/>
	</div>
</template>

<script>
export default {
	name: 'Product',
	props:{
		product:{
			required: true,
			type: Object
		}
	}
}
</script>

<style scoped>
img{
	width: 200px;
}
</style>