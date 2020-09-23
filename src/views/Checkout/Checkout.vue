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
		<div class="buttons">
			<global-button 
				v-if="links[0].name !== $route.name" 
				@click.native="$router.push({name:goTo(false)})" 
				text="back"
			/>
			<router-link 
				v-if="goTo(true)" 
				:to="{name:goTo(true)}"
			>
				<global-button 
					:text="goTo(true)"
				/>
			</router-link>
		</div>
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
	methods:{
		goTo(forward){
			const allRoutes = this.$router
				.options
				.routes[0]
				.children
				.map(x=>x.name)
			const index = allRoutes.indexOf(this.$route.name)
			return allRoutes[forward ? index+1 : index-1]
		}

	}
}
</script>

<style scoped>
ul{
	margin: 20px 0;
}
ul a{
	padding: 10px;
	border: solid 1px var(--border-color);
	position: relative;
}
ul a.router-link-exact-active{
	background: var(--highlight-color);
}
.buttons{
	display: flex;
	justify-self: flex-end;
}
.buttons a{
	width: 100%;
}
</style>