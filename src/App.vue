<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
import faker from 'faker'
export default {
	name: 'App',
	created(){
		const emptyArray = [...Array(5).keys()]
		const products = emptyArray
			.map(x=>{
				const name = faker.commerce.productName()
				const image = faker.image.image() 
				const description = faker.commerce.productDescription() 
				const price = faker.commerce.price()
				
				return {
					name,
					description,
					price,
					image,
				}
			})
		this.$store.commit('SET_ITEM', {type: 'shoppingcart', value: products})
	}
}
</script>
<style>
:root{
	--highlight-color: orange;
}
*{
	margin: 0;
	padding: 0;
}
#app{
	display: flex;
	justify-content: center;
	width: 100vw;
}
</style>