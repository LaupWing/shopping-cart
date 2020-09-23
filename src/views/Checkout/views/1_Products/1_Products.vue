<template>
	<div class="products">
		
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
			return this.$store.getters.shoppincart
		}
	}
}
</script>

<style>

</style>