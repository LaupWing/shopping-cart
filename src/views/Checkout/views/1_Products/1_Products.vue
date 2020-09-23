<template>
	<div class="products">
		<app-product
			v-for="product in shoppincart"
			:key="product.name"
			:product="product"
		/>
		<p class="total_price">
			Total: {{calcTotalPrice}}
		</p>
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
		},
		calcTotalPrice(){
			return this.$store.getters.shoppingcart
				.reduce((acc, curr)=>{
					return acc + Number(curr.price)
				},0)
		}
	}
}
</script>

<style scoped>
.total_price{
	text-align: right;
	font-size: 2rem;
}
</style>