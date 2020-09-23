<template>
	<div class="checkout">
		<router-view/>
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
	}
}
</script>

<style>

</style>