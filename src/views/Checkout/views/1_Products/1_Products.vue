<template>
	<div class="products">
		<app-product
			v-for="product in shoppincart"
			:key="product.name"
			:product="product"
		/>
	</div>
</template>

<script>
import Product from './Product/Product'

export default {
	name: 'Products',
	components:{
		'app-product': Product
	},
	computed:{
		shoppincart(){
			return this.$store.getters.shoppingcart
		}
	}
}
</script>

<style>

</style>