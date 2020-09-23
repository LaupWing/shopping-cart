const state = {
	shoppingcart:[]
}
const mutations = {
	'SET_SHOPPING'(state, items){
		state.shoppingcart = items
	},
	'SET_ITEM'(state, {type, value}){
		state[type] = value
	}
}
const actions ={
   
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