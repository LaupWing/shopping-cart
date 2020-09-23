<template>
	<div class="product">
		<img :src="product.image"/>
		<div class="meta">
			<div class="info">
				<h2>{{product.name}}</h2>
				<p>{{product.description}}</p>
			</div>
			<div class="price_quantity">
				<div class="price">{{product.price}}</div>
				<input type="number" v-model.lazy="quantity">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	computed:{
		quantity:{
			get(){
				return this.$store.getters.shoppingcart
					.find(item=>item === this.product)
					.quantity
			},
			set(value){
				const updatedCart = this.$store.getters.shoppingcart
					.map(item=>{
						if(item===this.product){
							item.quantity = Number(value)
						}
						return item
					})
				console.log(updatedCart)
				this.$store.commit('SET_ITEM', {
					type: 'shoppingcart',
					value: updatedCart
				})
			}
		}
	},
	props:{
		product:{
			required: true,
			type: Object
		}
	}
}
</script>

<style scoped>
.product{
	display: flex;
	margin: 20px 0;
	border: solid 1px var(--border-color);
	max-width: 800px;
}
img{
	width: 200px;
}
.meta{
	display: flex;
	justify-content: space-between;
	flex: 1;
}
.info{
	padding: 10px;
}
.price_quantity{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10px;
}
.price::before{
	content: '$'
}
input[type="number"]{
	width: 40px;
	text-align: center;
}
</style>