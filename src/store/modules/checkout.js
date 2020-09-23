import faker from 'faker'

const state = {
	shoppingcart:[],
	email: '',
	voornaam: '',
	achternaam: '',
	woonplaats: '',
	straat: '',
	huisnummer: ''
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
				const quantity = Math.floor(Math.random() * 6) + 1 
				
				return {
					name,
					description,
					price,
					image,
					quantity
				}
			})
		
		commit('SET_ITEM', {
			type: 'shoppingcart',
			value: products
		})
	}
}
console.log(state)
const getters = {
	shoppingcart: state => state.shoppingcart,
	email: state => state.email,
	voornaam: state => state.voornaam,
	achternaam: state => state.achternaam,
	straat: state => state.straat,
	huisnummer: state => state.huisnummer,
	woonplaats: state => state.woonplaats,
}
export default {
    state,
    actions,
    mutations,
    getters
}