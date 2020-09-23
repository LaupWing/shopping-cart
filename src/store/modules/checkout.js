import faker from 'faker'

const state = {
	shoppingcart:[]
}
const mutations = {
	'SET_ITEM'(state, {type, value}){
		state[type] = value
	}
}
const actions ={
	fetchDummyData({commit}){
		const emptyArray = [...Array(5).keys()]
		const products = emptyArray
			.map(_=>{
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
		commit('SET_ITEM', {
			type: 'shoppingcart',
			value: products
		})
	}
}
const getters = {
	shoppingcart: state => state.shoppingcart
}
export default {
    state,
    actions,
    mutations,
    getters
}