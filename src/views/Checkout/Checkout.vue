<template>
	<div class="checkout">
		<h2>Checkout</h2>
		<ul>
			<router-link
				v-for="link in links"
				:key="link.name"
				:to="{
					name: link.name
				}"
			>
				{{link.name}}
			</router-link>
		</ul>
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
	computed:{
		links(){
			return this.$router
				.options
				.routes[0]
				.children
		}
	},
	data(){
		return{

		}
	},
	created(){
		console.log(this.links)
	}
}
</script>

<style>

</style>