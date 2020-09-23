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
		<router-link :to="{name:nextLink}">
			<global-button 
				:text="nextLink" 
				:extraStyling="{
					marginLeft: 'auto'
				}"
			/>
		</router-link>
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
		},
		nextLink(){
			const allRoutes = this.$router
				.options
				.routes[0]
				.children
				.map(x=>x.name)
			const index = allRoutes.indexOf(this.$route.name)
			return allRoutes[index+1]
		}
	}
}
</script>

<style>

</style>