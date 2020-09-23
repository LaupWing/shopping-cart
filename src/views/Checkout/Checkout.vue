<template>
	<div class="checkout">
		<h2>Checkout</h2>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Checkout",
	props:{
		products:{
			type: Array
		}
	},
	data(){
		return{

		}
	},
	created(){
	}
}
</script>

<style>

</style>